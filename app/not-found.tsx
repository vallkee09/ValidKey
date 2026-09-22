import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="wrap section page-intro">
      <p className="eyebrow">404 / A SMALL DETOUR</p>
      <h1>This page isn’t here.</h1>
      <p className="section-intro">Let’s get you back to something useful.</p>
      <Link href="/" className="text-link">
        Back to the homepage ↗
      </Link>
    </main>
  );
}
