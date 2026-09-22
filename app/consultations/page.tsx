import { ArrowUpRight } from "lucide-react";
import { Suspense } from "react";
import { ConsultationEntry } from "@/components/consultation-entry";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
export const metadata = pageMetadata(
  "Personal consultations",
  "60-minute personal consultations for QA professionals and leaders, with a short written summary and practical next steps.",
  "/consultations",
);
export default function Consultations() {
  return (
    <main id="main-content">
      <section className="wrap page-intro">
        <p className="eyebrow">PERSONAL CONSULTATIONS</p>
        <h1>
          A fresh perspective.
          <br />
          <span className="serif">A clearer next step.</span>
        </h1>
        <div className="intro-bottom">
          <p>
            Bring a real challenge. We’ll explore the context, question the
            assumptions and identify useful next steps together. A 60-minute
            conversation, followed by a short written summary with next steps.
          </p>
          <a className="text-link" href="#start">
            Start a conversation <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
      <section
        className="wrap section compact-top consult-grid"
        aria-label="Consultation directions"
      >
        <article className="consult-card">
          <span className="tag">FOR QA PROFESSIONALS</span>
          <h2>Career & skills</h2>
          <p>
            For testers and QA engineers navigating growth, new tools or a move
            toward leadership.
          </p>
          <ul className="plain-list">
            <li>Clarify your next career step.</li>
            <li>Identify skills to develop and ways to practise.</li>
            <li>Find practical entry points into AI-assisted QA.</li>
            <li>Think through the move from contributor to lead.</li>
          </ul>
        </article>
        <article className="consult-card">
          <span className="tag">FOR QA LEADERS & TEAMS</span>
          <h2>Strategy & teams</h2>
          <p>
            For leads and managers making decisions about quality, people and
            change.
          </p>
          <ul className="plain-list">
            <li>Review priorities in your quality strategy.</li>
            <li>Frame a useful, measurable AI pilot.</li>
            <li>Explore team responsibilities and collaboration.</li>
            <li>Think through scaling without losing clarity.</li>
          </ul>
        </article>
      </section>
      <section className="process-band">
        <div className="wrap">
          <p className="eyebrow">HOW IT WORKS</p>
          <div className="expertise-grid">
            {[
              [
                "01",
                "Share the context",
                "Send a short note about your situation and the decision you want help with.",
              ],
              [
                "02",
                "Agree on the session",
                "We discuss fit, scope and fee, then arrange your 60-minute session.",
              ],
              [
                "03",
                "Work through it together",
                "After our conversation, you receive a short written summary of the priorities and next steps we discussed.",
              ],
            ].map(([number, title, text]) => (
              <div key={number}>
                <p className="mono">{number}</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section contact-layout" id="start">
        <div>
          <p className="eyebrow">LET’S START WITH YOUR QUESTION</p>
          <h2>
            What’s on
            <br />
            your mind?
          </h2>
          <p className="section-intro">
            Use this short builder to prepare a message, or reach out directly.
          </p>
          <div className="contact-links">
            <a
              className="text-link"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message me on LinkedIn <ArrowUpRight aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="text-link"
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Or connect on Telegram <ArrowUpRight aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <p className="small-note">
            Consultations are offered in a personal capacity.
          </p>
        </div>
        <Suspense
          fallback={
            <p className="small-note">
              Loading the message builder. You can also reach out using the
              links alongside.
            </p>
          }
        >
          <ConsultationEntry />
        </Suspense>
      </section>
      <section className="wrap section compact-top faq">
        <h2>A few practical details.</h2>
        <details>
          <summary>What does a consultation include?</summary>
          <p>
            A 60-minute personal conversation and a short written summary with
            practical next steps, tailored to the challenge we discuss.
          </p>
        </details>
        <details>
          <summary>Is this a course?</summary>
          <p>
            No. This is a personal consultation centred on your situation and
            questions.
          </p>
        </details>
        <details>
          <summary>How much does a consultation cost?</summary>
          <p>
            We agree on the fee after discussing the scope, before you book a
            session.
          </p>
        </details>
        <details>
          <summary>What should I prepare?</summary>
          <p>
            A brief description of the challenge, what you have already tried,
            and what would make the conversation useful. Use anonymised examples
            where needed.
          </p>
        </details>
        <details>
          <summary>
            Will this guarantee a promotion or a particular outcome?
          </summary>
          <p>
            No. The purpose is to help you understand your options and make
            informed decisions. The next steps and their outcomes depend on your
            context.
          </p>
        </details>
      </section>
    </main>
  );
}
