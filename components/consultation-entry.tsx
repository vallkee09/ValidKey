"use client";
import { useSearchParams } from "next/navigation";
import { ConsultationBrief } from "@/components/consultation-brief";

export function ConsultationEntry() {
  const params = useSearchParams();
  const focus = params.get("focus") === "leadership" ? "leadership" : "career";
  return <ConsultationBrief key={focus} initialFocus={focus} />;
}
