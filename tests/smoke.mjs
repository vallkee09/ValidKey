import assert from "node:assert/strict";
import { gzipSync } from "node:zlib";
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3101";
const paths = [
  "/",
  "/radar",
  "/radar/a-practical-lens-for-ai-in-qa",
  "/skills",
  "/consultations?focus=leadership",
];
const pages = new Map();
const results = [];
for (const path of paths) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.match(html, /<main[^>]+id="main-content"/);
  assert.equal(
    (html.match(/<h1[\s>]/g) || []).length,
    1,
    path + " has exactly one h1",
  );
  assert.match(html, /name="robots" content="noindex, nofollow"/);
  assert.doesNotMatch(
    response.headers.get("content-security-policy"),
    /unsafe-eval/,
  );
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title?.includes("Valerii Kovalenko"));
  pages.set(path, html);
  results.push({
    path,
    status: response.status,
    title,
    htmlBytes: Buffer.byteLength(html),
  });
}
assert.equal(
  new Set(results.map((r) => r.title)).size,
  paths.length,
  "unique page titles",
);
const checked = new Set();
for (const [path, html] of pages) {
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    const url = new URL(href, base + path);
    if (url.origin !== new URL(base).origin || checked.has(url.href)) continue;
    checked.add(url.href);
    const response = await fetch(url);
    assert.equal(response.status, 200, url.href);
    if (url.hash) {
      const target = await response.text();
      assert.ok(
        target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
        "missing anchor " + url.href,
      );
    }
  }
}
assert.equal((await fetch(base + "/this-page-does-not-exist")).status, 404);
assert.match(await (await fetch(base + "/robots.txt")).text(), /Disallow: \//);
const home = pages.get("/");
const skills = pages.get("/skills");
for (const html of [home, skills]) {
  assert.match(html, /Coming soon/i);
  assert.doesNotMatch(html, /Risk-based test planning/);
  assert.doesNotMatch(html, /Release-readiness review/);
  assert.doesNotMatch(html, /Download the playbook/);
}
for (const file of ["risk-based-test-planning", "release-readiness"]) {
  const response = await fetch(`${base}/playbooks/${file}.md`);
  assert.equal(response.status, 200);
  const retiredPlaybook = await response.text();
  assert.match(retiredPlaybook, /AI Skills are coming soon/i);
  assert.doesNotMatch(retiredPlaybook, /Guided workflow/);
  assert.doesNotMatch(retiredPlaybook, /Step 1/);
}
const scripts = [...home.matchAll(/<script\b[^>]*src="([^"]+)"[^>]*>/g)]
  .filter((m) => !m[0].includes("noModule"))
  .map((m) => m[1]);
let raw = 0,
  gzip = 0;
for (const src of new Set(scripts)) {
  const r = await fetch(new URL(src, base));
  assert.equal(r.status, 200);
  const b = Buffer.from(await r.arrayBuffer());
  raw += b.length;
  gzip += gzipSync(b).length;
}
assert.doesNotMatch(home, /\/_next\/image\?/);
const image = await fetch(base + "/images/valerii-portrait.webp");
assert.equal(image.status, 200);
assert.match(image.headers.get("content-type"), /image\/webp/);
console.log(
  JSON.stringify(
    {
      routes: results,
      internalTargetsChecked: checked.size,
      modernJavaScript: {
        count: new Set(scripts).size,
        rawBytes: raw,
        estimatedGzipBytes: gzip,
      },
      portrait: {
        type: image.headers.get("content-type"),
        optimizedBytes: (await image.arrayBuffer()).byteLength,
      },
      missingPage: 404,
    },
    null,
    2,
  ),
);
