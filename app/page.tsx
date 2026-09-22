import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, siteOrigin } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Quality Engineering & AI in QA",
  "Valerii Kovalenko, Director of Quality Assurance at ODDITY. Practical AI, QA leadership, career development and personal consultations.",
  "/",
);

const expertise = [
  {
    icon: Layers3,
    number: "01",
    title: "Quality Engineering",
    text: "Build quality into the way software is designed, delivered and improved. Focus on the risks that matter.",
  },
  {
    icon: Code2,
    number: "02",
    title: "AI in QA",
    text: "Turn new AI capabilities into useful testing workflows. Keep evidence, evaluation and human judgment at the centre.",
  },
  {
    icon: Users,
    number: "03",
    title: "Teams & careers",
    text: "Help QA professionals grow and leaders build teams with clear ownership, strong practices and room to learn.",
  },
];
export default function Home() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: site.name,
            jobTitle: "Director of Quality Assurance",
            worksFor: { "@type": "Organization", name: "ODDITY" },
            sameAs: [site.linkedin, site.github],
            knowsAbout: ["Quality Engineering", "AI in QA", "QA leadership"],
            ...(siteOrigin ? { url: siteOrigin } : {}),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="blue-dot" /> QUALITY ENGINEERING · AI · LEADERSHIP
          </p>
          <h1 id="hero-title">
            Better quality.
            <br />
            <span>Stronger teams.</span>
          </h1>
          <p className="hero-intro">
            Hi, I’m <strong>Valerii Kovalenko.</strong>
          </p>
          <p className="hero-description">
            Director of Quality Assurance at ODDITY.
            <br />
            Exploring practical AI, building quality into engineering, and
            helping QA people grow.
          </p>
          <div className="actions">
            <Button asChild className="action-button">
              <a href="#work">
                Explore my work <ArrowDown aria-hidden="true" />
              </a>
            </Button>
            <a className="text-link" href="#consultations">
              Let’s talk <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="portrait">
          <div className="portrait-image">
            <Image
              src="/images/valerii-portrait.webp"
              alt="Portrait of Valerii Kovalenko"
              width={960}
              height={1200}
              sizes="(max-width: 760px) 85vw, 380px"
              preload
            />
          </div>
          <figcaption>
            <span>Valerii Kovalenko</span>
            <span>QA leader. Curious builder.</span>
          </figcaption>
        </figure>
      </section>
      <section
        className="expertise wrap"
        id="work"
        aria-labelledby="expertise-title"
      >
        <div className="section-heading">
          <p className="eyebrow">WHERE I FOCUS</p>
          <h2 id="expertise-title">Good systems. Thoughtful people.</h2>
        </div>
        <div className="expertise-grid">
          {expertise.map(({ icon: Icon, ...item }) => (
            <article key={item.number} className="expertise-item">
              <div className="item-top">
                <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                <span className="mono">{item.number}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="radar-section"
        id="radar"
        aria-labelledby="radar-title"
      >
        <div className="wrap radar-grid">
          <div>
            <p className="eyebrow light-label">A CLEARER VIEW OF WHAT’S NEXT</p>
            <h2 id="radar-title">
              QA + AI
              <br />
              <span className="radar-word">
                Radar<span className="radar-period">.</span>
              </span>
            </h2>
            <p className="radar-description">
              The changes worth your attention.
              <br />
              The questions worth asking.
            </p>
            <Link className="light-link" href="/radar">
              Explore the Radar <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <Link
            href="/radar/a-practical-lens-for-ai-in-qa"
            className="radar-feature"
          >
            <div className="item-top">
              <span className="tag light-tag">START HERE</span>
              <ArrowUpRight size={26} aria-hidden="true" />
            </div>
            <p className="mono radar-meta">EDITOR’S NOTE · 4 MIN READ</p>
            <h3>
              A practical lens
              <br />
              for AI in QA.
            </h3>
            <p>
              What changed? Does it improve quality? What should we actually
              try? A framework for reading the signals.
            </p>
            <span className="radar-feature-bottom">
              Read the introduction <span aria-hidden="true">↗</span>
            </span>
          </Link>
        </div>
      </section>
      <section
        className="section wrap"
        id="skills"
        aria-labelledby="skills-title"
      >
        <div className="section-heading heading-with-link">
          <div>
            <p className="eyebrow">FROM IDEAS TO PRACTICE</p>
            <h2 id="skills-title">Small tools. Useful habits.</h2>
          </div>
          <Link className="text-link" href="/skills">
            AI Skills & playbooks <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="playbook-grid">
          <Link
            className="playbook-card"
            href="/skills#risk-based-test-planning"
          >
            <span className="mono">01 / PLANNING</span>
            <h3>
              Ask better
              <br />
              testing questions.
            </h3>
            <p>
              A guided AI workflow for turning a feature brief into risks, test
              ideas and unanswered questions.
            </p>
            <span className="card-bottom">
              Risk-based test planning <ArrowUpRight aria-hidden="true" />
            </span>
          </Link>
          <Link className="playbook-card" href="/skills#release-readiness">
            <span className="mono">02 / DELIVERY</span>
            <h3>
              Make the release
              <br />
              decision clearer.
            </h3>
            <p>
              A structured review of evidence, open risks and ownership before a
              release goes out.
            </p>
            <span className="card-bottom">
              Release-readiness review <ArrowUpRight aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>
      <section
        className="consult-section"
        id="consultations"
        aria-labelledby="consult-title"
      >
        <div className="wrap">
          <div className="section-heading">
            <p className="eyebrow">A CONVERSATION WITH A PURPOSE</p>
            <h2 id="consult-title">
              Your next step,
              <br />
              <span className="serif">with a little perspective.</span>
            </h2>
            <p className="section-intro">
              Personal consultations around the challenges you’re working
              through. A 60-minute conversation and a short written summary with
              practical next steps.
            </p>
          </div>
          <div className="consult-grid">
            <article className="consult-card">
              <span className="tag">FOR QA PROFESSIONALS</span>
              <h3>Grow with intention.</h3>
              <p>
                Find direction in your QA career, strengthen your skills, or
                prepare for a move into leadership.
              </p>
              <ul className="check-list">
                <li>
                  <Check aria-hidden="true" /> Career direction & next steps
                </li>
                <li>
                  <Check aria-hidden="true" /> Practical AI skills
                </li>
                <li>
                  <Check aria-hidden="true" /> The transition to team leadership
                </li>
              </ul>
              <Button asChild className="action-button">
                <Link href="/consultations?focus=career">
                  Explore career consultations{" "}
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </article>
            <article className="consult-card">
              <span className="tag">FOR QA LEADERS & TEAMS</span>
              <h3>Build for what’s next.</h3>
              <p>
                Get another perspective on your quality strategy, AI adoption,
                and the way your team works.
              </p>
              <ul className="check-list">
                <li>
                  <Check aria-hidden="true" /> Quality strategy & priorities
                </li>
                <li>
                  <Check aria-hidden="true" /> AI adoption & evaluation
                </li>
                <li>
                  <Check aria-hidden="true" /> Team structure & scaling
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                className="action-button secondary-button"
              >
                <Link href="/consultations?focus=leadership">
                  Explore leadership consultations{" "}
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </article>
          </div>
        </div>
      </section>
      <section
        className="section wrap about-grid"
        id="about"
        aria-labelledby="about-title"
      >
        <div>
          <p className="eyebrow">THE PERSON BEHIND THE WORK</p>
          <h2 id="about-title">
            Hello again.
            <br />
            I’m Valerii.
          </h2>
        </div>
        <div className="about-copy">
          <p className="large-copy">
            I work at the intersection of software quality, people and change.
          </p>
          <p>
            As Director of Quality Assurance at ODDITY, my professional focus is
            Quality Engineering, practical AI in QA, and the development of QA
            teams and careers.
          </p>
          <p>
            This is my personal space for sharing ideas, exploring useful tools
            and having thoughtful conversations about our work.
          </p>
          <a
            href={site.linkedin}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn <ArrowUpRight aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
    </main>
  );
}
