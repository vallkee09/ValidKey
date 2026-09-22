import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "AI Skills & playbooks",
  "Reusable AI prompts and human review checklists for risk-based test planning and release readiness.",
  "/skills",
);
const guides = [
  {
    id: "risk-based-test-planning",
    number: "01",
    category: "PLANNING",
    title: "Risk-based test planning",
    description:
      "Turn a feature brief into a reviewable map of risks, test ideas and open questions.",
    input:
      "A sanitised feature brief, acceptance criteria and known constraints.",
    output:
      "A prioritised risk table, test ideas tied to requirements, and questions for the product team.",
    steps: [
      "Separate stated requirements from assumptions.",
      "Identify plausible failure modes and affected users.",
      "Connect each test idea to a risk and an observable result.",
      "Review priorities and remove unsupported assumptions.",
    ],
    file: "risk-based-test-planning.md",
  },
  {
    id: "release-readiness",
    number: "02",
    category: "DELIVERY",
    title: "Release-readiness review",
    description:
      "Bring test evidence, open issues and decision ownership into one structured review.",
    input:
      "Release scope, available test results, known issues and rollback information. Use non-confidential examples.",
    output:
      "An evidence summary, unresolved risks, missing information and a decision checklist for the release owner.",
    steps: [
      "Map each release change to the available evidence.",
      "Distinguish a passed check from an untested area.",
      "Assign owners to open risks and missing information.",
      "Summarise the trade-offs for a human decision.",
    ],
    file: "release-readiness.md",
  },
];
export default function Skills() {
  return (
    <main id="main-content">
      <section className="wrap page-intro">
        <p className="eyebrow">AI SKILLS & PLAYBOOKS</p>
        <h1>
          Useful workflows.
          <br />
          <span className="serif">Human judgment.</span>
        </h1>
        <div className="intro-bottom">
          <p>
            Practical prompts and review checklists for everyday QA work. Take a
            small problem, work through it with AI, and make the result your
            own.
          </p>
          <span className="tag">FREE WORKFLOW GUIDES</span>
        </div>
      </section>
      <div className="wrap skills-list">
        {guides.map((guide) => (
          <article key={guide.id} id={guide.id} className="skill-detail">
            <div className="skill-number mono">
              {guide.number} / {guide.category}
            </div>
            <div>
              <h2>{guide.title}</h2>
              <p className="skill-description">{guide.description}</p>
              <dl className="input-output">
                <div>
                  <dt>Bring</dt>
                  <dd>{guide.input}</dd>
                </div>
                <div>
                  <dt>Leave with</dt>
                  <dd>{guide.output}</dd>
                </div>
              </dl>
              <ol className="step-list">
                {guide.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <Button asChild className="action-button">
                <a href={`/playbooks/${guide.file}`} download>
                  Download the playbook <ArrowDownToLine aria-hidden="true" />
                </a>
              </Button>
              <p className="small-note">
                Markdown · v0.1 · Guided workflow, not an autonomous agent
              </p>
            </div>
          </article>
        ))}
      </div>
      <section className="wrap section compact-top">
        <div className="callout">
          <h2>A starting point for your context.</h2>
          <p>
            These guides are early editions. They include a copyable prompt, a
            fictional example and a review checklist. Validate AI output against
            your requirements and use only information you are permitted to
            share with your chosen tool.
          </p>
          <Link href="/consultations" className="text-link">
            Talk through your QA workflow <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
