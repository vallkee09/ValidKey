import test from "node:test";
import assert from "node:assert/strict";
import { validateBrief, buildBrief } from "../lib/consultation.mjs";

test("rejects whitespace-only goals", () => {
  assert.equal(
    validateBrief({ name: "Valerii", focus: "career", goal: "  \n  " }).goal,
    "Describe what you would like help with.",
  );
});
test("enforces name and goal length limits", () => {
  const errors = validateBrief({
    name: "a".repeat(81),
    focus: "career",
    goal: "a".repeat(2001),
  });
  assert.ok(errors.name);
  assert.ok(errors.goal);
});
test("rejects unknown consultation audiences", () => {
  assert.ok(
    validateBrief({ name: "Sam", focus: "other", goal: "A question" }).focus,
  );
});
test("builds a leadership brief without adding outcome promises", () => {
  assert.equal(
    buildBrief({
      name: " Sam ",
      focus: "leadership",
      goal: " Evaluate AI adoption. ",
    }),
    "Hi Valerii,\n\nI’m Sam. I’m interested in a personal consultation about QA leadership & teams.\n\nWhat I’d like to work through:\nEvaluate AI adoption.\n\nCould we discuss the fit, format and fee?",
  );
});
test("preserves Ukrainian text and trims outer whitespace", () => {
  const input = {
    name: " Олена ",
    focus: "career",
    goal: " Хочу розвиватися в QA. ",
  };
  assert.deepEqual(validateBrief(input), {});
  assert.match(buildBrief(input), /I’m Олена/);
  assert.match(buildBrief(input), /QA career & skills/);
  assert.match(buildBrief(input), /Хочу розвиватися в QA\./);
});
