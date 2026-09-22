export interface BriefInput {
  name: string;
  focus: string;
  goal: string;
}
export type BriefErrors = Partial<Record<keyof BriefInput, string>>;
export function validateBrief(input: BriefInput): BriefErrors;
export function buildBrief(input: BriefInput): string;
