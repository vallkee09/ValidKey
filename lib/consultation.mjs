export function validateBrief({ name, focus, goal }) {
  const errors = {};
  if (!name.trim()) errors.name = "Enter your name.";
  else if (name.length > 80) errors.name = "Use 80 characters or fewer.";
  if (!["career", "leadership"].includes(focus))
    errors.focus = "Choose a consultation focus.";
  if (!goal.trim()) errors.goal = "Describe what you would like help with.";
  else if (goal.length > 2000) errors.goal = "Use 2,000 characters or fewer.";
  return errors;
}
export function buildBrief({ name, focus, goal }) {
  const topic =
    focus === "leadership" ? "QA leadership & teams" : "QA career & skills";
  return `Hi Valerii,\n\nI’m ${name.trim()}. I’m interested in a personal consultation about ${topic}.\n\nWhat I’d like to work through:\n${goal.trim()}\n\nCould we discuss the fit, format and fee?`;
}
