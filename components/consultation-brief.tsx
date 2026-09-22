"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  buildBrief,
  validateBrief,
  type BriefErrors,
} from "@/lib/consultation.mjs";
import { site } from "@/lib/site";
export function ConsultationBrief({
  initialFocus,
}: {
  initialFocus: "career" | "leadership";
}) {
  const [name, setName] = useState("");
  const [focus, setFocus] = useState(initialFocus);
  const [goal, setGoal] = useState("");
  const [errors, setErrors] = useState<BriefErrors>({});
  const [brief, setBrief] = useState("");
  const [status, setStatus] = useState("");
  const output = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (brief) output.current?.focus();
  }, [brief]);
  const reset = () => {
    setBrief("");
    setStatus("");
    setErrors({});
  };
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = { name, focus, goal };
    const nextErrors = validateBrief(input);
    setErrors(nextErrors);
    setStatus("");
    const first = Object.keys(nextErrors)[0];
    if (first) {
      document.getElementById(`brief-${first}`)?.focus();
      return;
    }
    setBrief(buildBrief(input));
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(brief);
      setStatus(
        "Copied. Open LinkedIn or Telegram and paste your note to start the conversation.",
      );
    } catch {
      output.current?.focus();
      output.current?.select();
      setStatus(
        "Copy is unavailable in this browser. Your note is selected — copy it manually.",
      );
    }
  }
  return (
    <div className="brief-builder">
      <form noValidate onSubmit={prepare}>
        <div className="field">
          <label htmlFor="brief-focus">What would you like to focus on?</label>
          <select
            id="brief-focus"
            value={focus}
            onChange={(e) => {
              setFocus(e.target.value as typeof focus);
              reset();
            }}
          >
            <option value="career">My QA career & skills</option>
            <option value="leadership">QA leadership & teams</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="brief-name">Your name</label>
          <input
            id="brief-name"
            autoComplete="given-name"
            value={name}
            maxLength={80}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={(e) => {
              setName(e.target.value);
              reset();
            }}
          />
          {errors.name && (
            <p className="field-error" id="name-error">
              {errors.name}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="brief-goal">
            What would make this conversation useful?
          </label>
          <textarea
            id="brief-goal"
            rows={5}
            maxLength={2000}
            required
            value={goal}
            placeholder="A challenge, a decision, or a next step you’re considering…"
            aria-invalid={Boolean(errors.goal)}
            aria-describedby={
              errors.goal ? "goal-error goal-help" : "goal-help"
            }
            onChange={(e) => {
              setGoal(e.target.value);
              reset();
            }}
          />
          {errors.goal && (
            <p className="field-error" id="goal-error">
              {errors.goal}
            </p>
          )}
          <p id="goal-help" className="small-note">
            A few sentences are enough. Leave out confidential details.
          </p>
        </div>
        <Button type="submit" className="action-button">
          Prepare my message <ArrowUpRight aria-hidden="true" />
        </Button>
        <p className="small-note">
          Nothing is sent or saved here. You choose when to share your message.
        </p>
      </form>
      {brief && (
        <section className="brief-output" aria-labelledby="brief-output-title">
          <h3 id="brief-output-title">Your conversation starter</h3>
          <label htmlFor="prepared-message" className="sr-only">
            Prepared message
          </label>
          <textarea
            ref={output}
            id="prepared-message"
            readOnly
            rows={10}
            value={brief}
          />
          <div className="actions">
            <Button type="button" onClick={copy} className="action-button">
              {status.startsWith("Copied") ? (
                <Check aria-hidden="true" />
              ) : (
                <Copy aria-hidden="true" />
              )}{" "}
              {status.startsWith("Copied") ? "Copied" : "Copy message"}
            </Button>
            <a
              className="text-link"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open LinkedIn <ArrowUpRight aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="text-link"
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Telegram <ArrowUpRight aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <p role="status" className="small-note">
            {status ||
              "Copy this note, then send it to Valerii on LinkedIn or Telegram."}
          </p>
        </section>
      )}
    </div>
  );
}
