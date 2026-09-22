import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "AI Skills — coming soon",
  "A focused collection of practical AI skills for QA professionals and leaders is in development.",
  "/skills",
);
export default function Skills() {
  return (
    <main id="main-content">
      <section className="wrap page-intro">
        <p className="eyebrow">AI SKILLS & PLAYBOOKS</p>
        <h1>
          Practical AI skills.
          <br />
          <span className="serif">Coming soon.</span>
        </h1>
        <div className="intro-bottom">
          <p>
            I’m reworking this collection to make every skill focused, useful
            and grounded in the real decisions QA professionals and leaders
            face.
          </p>
          <span className="tag">IN DEVELOPMENT</span>
        </div>
      </section>
      <section className="wrap section compact-top">
        <div className="coming-soon-panel coming-soon-page">
          <span className="tag">COMING SOON</span>
          <h2>A smaller, sharper collection is on the way.</h2>
          <p>
            The first skills will connect AI with practical QA work while
            keeping evidence, evaluation and human judgment at the centre.
          </p>
          <Link href="/radar" className="text-link">
            Explore QA + AI Radar <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
