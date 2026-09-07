import { useMemo, useState } from "react";
import { AlertTriangle, ArrowRight, Calculator, Check, ClipboardCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Callout, H3, TableBlock } from "@/components/article";

const goalRows = [
  ["AI literacy for my current role", "₹0–₹25K", "4–10 weeks", "DeepLearning.AI short courses, vendor literacy tracks"],
  ["Add AI skills without a career switch", "₹25K–₹1L", "3–7 months", "IBM (Coursera), Intellipaat, LogicMojo"],
  ["Full career switch into AI/ML engineering", "₹70K–₹2.5L", "6–12 months", "LogicMojo, upGrad, Great Learning, Scaler"],
  ["Credential for promotion / HR", "₹1.5L–₹3.5L", "7–18 months", "upGrad, Great Learning, Simplilearn, IIT executive"],
  ["Placement infrastructure first", "₹2.5L–₹4L", "11–18 months", "Scaler and similar bootcamps"],
  ["Test whether AI is for me", "₹0–₹15K", "4–12 weeks", "PW Skills, GUVI, NPTEL, MOOC audit"],
];

const checklist = [
  "Exact fee including GST in writing",
  "EMI lender, interest, tenure and processing fee",
  "Whether “no-cost EMI” is priced above the upfront price",
  "Refund window with the exact cut-off date",
  "What happens to the loan if you stop",
  "Deferral and transfer policy",
  "Duration and realistic weekly hours",
  "Eligibility and prerequisite onboarding",
  "Live versus recorded mix, and whether you can observe a class",
  "Named instructor for your batch",
  "Doubt-resolution service level or response time",
  "Whether a human reviews your code",
  "Curriculum last-updated date, with RAG, agents and MLOps present",
  "What “job assistance” includes, item by item",
  "Access to two recent alumni who were not hand-picked",
];

const redFlags = [
  "Discount timers that reset",
  "Fee visible only after a sales call",
  "“No-cost EMI” with no upfront price",
  "Refund window shorter than module one",
  "Placement numbers with no denominator",
  "Lender terms hidden until signing",
  "An “IIT” tag with unspecified involvement",
  "Mandatory add-on placement tiers",
  "Pressure to pay on the same call",
  "Certificates presented as the main outcome",
];

type Answers = { budget: string; goal: string; background: string; hours: string; format: string; funding: string };
const initial: Answers = { budget: "", goal: "", background: "", hours: "", format: "", funding: "" };
const questions = [
  { key: "budget", label: "Budget", options: ["Under ₹15K", "₹15K–₹60K", "₹60K–₹1.5L", "₹1.5L+", "Free only"] },
  { key: "goal", label: "Primary goal", options: ["Literacy", "Upskill", "Career switch", "Credential", "Placement"] },
  { key: "background", label: "Background", options: ["Non-tech", "Some coding", "Engineer", "Student"] },
  { key: "hours", label: "Weekly hours", options: ["Under 6", "6–10", "10–15", "15+"] },
  { key: "format", label: "Preferred format", options: ["Live", "Self-paced", "Weekend", "Offline"] },
  { key: "funding", label: "Funding", options: ["Self", "Employer", "Loan"] },
] as const;

function recommendation(a: Answers) {
  if (a.budget === "Free only") return { band: "₹0", programs: "NPTEL + DeepLearning.AI audit + Hugging Face", why: "Start with open material and pay only if you later identify a support gap." };
  if (a.budget === "Under ₹15K") return { band: "₹0–₹15K", programs: "PW Skills / GUVI entry options [VERIFY current fee]", why: "Keep financial risk low while testing consistency and foundations." };
  if (a.goal === "Literacy" && a.hours === "Under 6") return { band: "₹0–₹25K", programs: "DeepLearning.AI short courses / vendor tracks", why: "Short, focused modules fit limited weekly time better than a career-track cohort." };
  if (a.funding === "Employer" && a.goal === "Credential") return { band: "₹1.5L–₹3.5L", programs: "Simplilearn / Great Learning [VERIFY current program and fee]", why: "Employer funding makes a recognised credential easier to justify." };
  if (a.goal === "Placement" && a.budget === "₹1.5L+" && a.hours === "15+") return { band: "₹2.5L–₹4L", programs: "Scaler and similar placement-led bootcamps [VERIFY]", why: "Your time and budget can support a long, placement-infrastructure-first format." };
  if (a.goal === "Credential" && a.budget === "₹1.5L+") return { band: "₹1.5L–₹3.5L", programs: "upGrad / Great Learning / Simplilearn [VERIFY]", why: "This band is where university and employer-recognised credential value is concentrated." };
  if (a.goal === "Career switch" && a.budget === "₹60K–₹1.5L" && ["10–15", "15+"].includes(a.hours) && a.format === "Live") return { band: "₹60K–₹1.5L", programs: "LogicMojo — ₹87,000; ₹73,950 for the first 15 enrolments", why: "A live specialist cohort aligns with your switch goal, available time and fee ceiling. Re-check the offer before paying." };
  return { band: a.budget || "Choose a budget", programs: "Complete all six answers for a tighter match", why: "Prioritise the format you can finish; then compare support, credential value and written terms." };
}

export function FeeDecisionFramework() {
  const [answers, setAnswers] = useState<Answers>(initial);
  const result = useMemo(() => recommendation(answers), [answers]);
  const complete = Object.values(answers).every(Boolean);
  return (
    <>
      <div className="decision-step">
        <span className="step-number">01</span><div><H3>Fix your goal, then your fee band</H3><p>Price is useful only after the outcome is defined. Start with the row that describes what must change after the course.</p></div>
      </div>
      <TableBlock number="Decision table" title="Goal-to-fee-band map" headers={["Goal", "Fee Band That Makes Sense (₹)", "Duration", "Example Fits"]} rows={goalRows} />

      <div className="decision-step"><span className="step-number">02</span><div><H3>Compute your real cost</H3><p>The headline fee ignores finance charges, tools and the value of your time. Completion risk belongs in the denominator because an unfinished course cannot deliver the intended outcome.</p></div></div>
      <div className="formula-panel">
        <Calculator aria-hidden="true" className="h-6 w-6 text-primary" />
        <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Real-cost formula</p><p className="rupee mt-2 text-base font-semibold">(Fee + GST + EMI interest + hidden costs + hours × hourly value) ÷ probability of completion</p><p className="mt-3 text-sm text-muted-foreground"><strong>[ILLUSTRATIVE — not a prediction]</strong> ₹87,000 fee + ₹15,660 GST [VERIFY applicability] + ₹4,000 tools + (300 hours × ₹500) = ₹2,56,660. At an 80% completion probability, risk-adjusted real cost = ₹3,20,825.</p></div>
      </div>

      <div className="decision-step"><span className="step-number">03</span><div><H3>Be honest about discipline</H3><p>Two or more abandoned self-paced courses are evidence, not a character flaw. Move toward a live cohort, deadlines and human review even when a recorded course has the lower sticker price.</p></div></div>
      <Callout label="A fee can buy accountability">Do not optimise for the cheapest content after repeated non-completion. Optimise for the least expensive structure you are likely to finish.</Callout>

      <div className="decision-step"><span className="step-number">04</span><div><H3>The 15-point pre-payment checklist</H3><p>Save or screenshot this list. Ask for every answer in writing before money moves.</p></div></div>
      <ol className="checklist-grid">
        {checklist.map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, "0")}</span><Check aria-hidden="true" /><p>{item}</p></li>)}
      </ol>

      <div className="decision-step"><span className="step-number">05</span><div><H3>Interactive AI Course Fee Finder</H3><p>Six choices produce a practical fee band and one or two example fits. This is a decision aid, not a ranking or outcome promise.</p></div></div>
      <div className="fee-finder">
        <div className="space-y-7">
          {questions.map((q, index) => <fieldset key={q.key}><legend><span>{index + 1}</span>{q.label}</legend><div className="option-grid">{q.options.map((option) => <Button key={option} type="button" variant={answers[q.key] === option ? "default" : "outline"} onClick={() => setAnswers((v) => ({ ...v, [q.key]: option }))}>{answers[q.key] === option ? <Check /> : null}{option}</Button>)}</div></fieldset>)}
        </div>
        <aside className="finder-result" aria-live="polite"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Your practical range</p><p className="rupee mt-3 text-3xl font-bold text-foreground">{result.band}</p><p className="mt-5 text-sm font-semibold text-foreground">{result.programs}</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{result.why}</p><div className="mt-6 h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full bg-primary transition-all" style={{ width: `${Object.values(answers).filter(Boolean).length / 6 * 100}%` }} /></div><p className="mt-2 text-xs text-muted-foreground">{Object.values(answers).filter(Boolean).length}/6 answered</p>{complete ? <a href="#pre-payment-checklist" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Run the checklist <ArrowRight /></a> : null}<Button type="button" variant="ghost" className="mt-4" onClick={() => setAnswers(initial)}>Reset answers</Button></aside>
      </div>

      <div className="mt-12 rounded-lg border border-destructive/25 bg-card p-6 shadow-panel">
        <div className="flex items-center gap-3"><AlertTriangle aria-hidden="true" className="text-destructive" /><h3 className="text-xl font-semibold">Ten fee red flags</h3></div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">{redFlags.map((flag) => <div key={flag} className="flex gap-3 rounded-md bg-muted px-4 py-3 text-sm"><ClipboardCheck aria-hidden="true" className="h-4 w-4 shrink-0 text-destructive" /><span>{flag}</span></div>)}</div>
      </div>
      <span id="pre-payment-checklist" className="scroll-mt-24" />
    </>
  );
}
