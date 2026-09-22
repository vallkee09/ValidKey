import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
export const metadata = pageMetadata(
  "QA + AI Radar",
  "A practical reading of AI and Quality Engineering: what changed, why it matters, and what to try next.",
  "/radar",
);
export default function Radar() {
  return (
    <main id="main-content">
      <section className="wrap page-intro radar-intro">
        <p className="eyebrow">THE READING ROOM / QA + AI</p>
        <h1>
          Less noise.
          <br />
          <span className="serif">More perspective.</span>
        </h1>
        <div className="intro-bottom">
          <p>
            QA + AI Radar is a space for making sense of changes in testing and
            AI. Useful signals, clear sources, and a practical question: what
            does this mean for our work?
          </p>
          <span className="tag">BY VALERII KOVALENKO</span>
        </div>
      </section>
      <section
        className="wrap section compact-top"
        aria-labelledby="reading-title"
      >
        <div className="section-heading heading-with-link">
          <h2 id="reading-title">Start with the lens.</h2>
          <span className="mono">01 / INTRODUCTION</span>
        </div>
        <Link
          href="/radar/a-practical-lens-for-ai-in-qa"
          className="editorial-row"
        >
          <div>
            <span className="tag">EDITOR’S NOTE</span>
            <p className="mono">22 SEPTEMBER 2026 · 4 MIN READ</p>
          </div>
          <div>
            <h3>A practical lens for AI in QA.</h3>
            <p>
              Five questions to ask before a promising demo becomes part of your
              quality process.
            </p>
          </div>
          <ArrowUpRight aria-hidden="true" />
        </Link>
        <div className="editorial-note">
          <h3>What belongs in the Radar?</h3>
          <div className="expertise-grid">
            <div>
              <h4>Tools, with context</h4>
              <p>
                What a new capability can do, where its limits are, and what
                evidence is available.
              </p>
            </div>
            <div>
              <h4>Quality, in practice</h4>
              <p>
                Testing ideas, evaluation approaches and useful experiments to
                bring back to a team.
              </p>
            </div>
            <div>
              <h4>People, always</h4>
              <p>
                What changes for QA careers, engineering leadership and the way
                teams work.
              </p>
            </div>
          </div>
          <p className="small-note">
            The weekly digest is being prepared. This introduction sets the
            direction; it is not a news edition.
          </p>
        </div>
        <a
          className="text-link"
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow the conversation on LinkedIn{" "}
          <ArrowUpRight aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </section>
    </main>
  );
}
