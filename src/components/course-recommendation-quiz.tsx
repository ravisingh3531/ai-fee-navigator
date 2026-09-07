import { useMemo, useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const questions = [
  { key: "experience", label: "Experience level", options: ["Complete beginner", "Some coding", "Working engineer"] },
  { key: "background", label: "Educational background", options: ["Non-tech graduate", "Engineering / CS", "Student / final year"] },
  { key: "goal", label: "Career goal", options: ["AI literacy", "Upskill in role", "Career switch to AI/ML", "Credential for promotion"] },
  { key: "budget", label: "Budget", options: ["Free only", "Under ₹40K", "₹40K–₹1.2L", "₹1.2L+"] },
  { key: "placement", label: "Importance of placement support", options: ["Not needed", "Helpful", "Critical"] },
  { key: "mode", label: "Learning mode", options: ["Self-paced", "Live online", "Classroom / hybrid"] },
  { key: "time", label: "Weekly time available", options: ["Under 6 hrs", "6–12 hrs", "12+ hrs"] },
  { key: "foundations", label: "Do you need Python / ML foundations built from scratch?", options: ["Yes, from zero", "Partly", "No, already solid"] },
] as const;

type Key = (typeof questions)[number]["key"];
type Answers = Partial<Record<Key, string>>;

type Match = {
  name: string;
  fee: string;
  duration: string;
  why: string;
  modules: string;
  placement: string;
  ctaLabel: string;
  ctaHref: string;
  sponsored?: boolean;
};

const logicmojo: Match = {
  name: "LogicMojo AI & ML Course",
  fee: "₹87,000 · ₹73,950 for the first 15 enrolments (Verified on the LogicMojo course page; GST treatment [VERIFY])",
  duration: "[VERIFY: months] · live online cohort with recordings",
  why: "You want a structured switch into AI with foundations built from scratch, live accountability and career support — and your budget sits in the specialist band, where fees buy teaching and mentorship rather than a university licensing premium.",
  modules: "Python → statistics → machine learning → deep learning → NLP and Transformers → Generative AI: prompt engineering, LLMs, RAG, LangChain, vector databases, fine-tuning and AI agents, plus real-world projects (provider-reported — confirm the current syllabus).",
  placement: "Interview preparation, resume and career guidance, and job assistance. This is assistance, not a placement guarantee. Read the published stories at logicmojo.com/success-story and ask for details of recent batches in writing.",
  ctaLabel: "Explore the LogicMojo AI & ML Course",
  ctaHref: "https://logicmojo.com",
  sponsored: true,
};

function match(a: Answers): Match {
  const answered = questions.every((q) => a[q.key]);
  if (!answered) {
    return {
      name: "Answer all eight questions",
      fee: "—",
      duration: "—",
      why: "Each answer narrows the fee band and the format that suits you. Complete the quiz to see a best-fit option.",
      modules: "—",
      placement: "—",
      ctaLabel: "Continue the quiz",
      ctaHref: "#course-quiz",
    };
  }
  if (a.budget === "Free only") {
    return {
      name: "Free foundation stack: NPTEL / SWAYAM + fast.ai + Hugging Face courses",
      fee: "₹0 (optional exam certificate fees [VERIFY])",
      duration: "3–6 months at your own pace",
      why: "With a zero budget, open material is the honest answer. These three cover theory, applied deep learning and the current GenAI stack. Pay later only if you identify a specific gap — usually feedback, structure or career support.",
      modules: "ML foundations, deep learning, NLP, LLMs, RAG and agents.",
      placement: "None. Build a public portfolio and apply directly.",
      ctaLabel: "Read the fee spectrum table",
      ctaHref: "#comparison-tables",
    };
  }
  if (a.goal === "AI literacy" || a.time === "Under 6 hrs") {
    return {
      name: "Short structured certifications: DeepLearning.AI or a cloud vendor AI track",
      fee: "₹0–₹30,000 · subscription or exam fees [VERIFY]",
      duration: "4–12 weeks",
      why: "Your goal or your weekly time points to focused modules rather than a long cohort. Short courses finish; long ones you cannot attend do not.",
      modules: "AI and ML concepts, GenAI usage, cloud AI services.",
      placement: "None — these are literacy and role-alignment credentials.",
      ctaLabel: "Compare short-course fees",
      ctaHref: "#by-type-level",
    };
  }
  if (a.budget === "Under ₹40K") {
    return {
      name: "Budget structured cohorts: PW Skills / GUVI entry programs",
      fee: "₹XX,XXX [VERIFY current fee]",
      duration: "5–12 months",
      why: "This keeps financial risk low while giving you a schedule and a cohort. Verify how much live teaching and human code review the fee actually includes before paying.",
      modules: "Python, ML, deep learning, partial GenAI (provider-reported).",
      placement: "Provider-reported job assistance [VERIFY what it includes].",
      ctaLabel: "See what the fee includes",
      ctaHref: "#inclusions",
    };
  }
  if (a.goal === "Credential for promotion" && a.budget === "₹1.2L+") {
    return {
      name: "University-affiliated PG programs (upGrad, Great Learning, Simplilearn, Intellipaat)",
      fee: "₹1,50,000–₹3,50,000 [VERIFY per program]",
      duration: "7–18 months",
      why: "When the outcome you need is a recognised line on your CV for an internal promotion or an HR filter, the credential premium is a rational spend — especially if your employer funds it.",
      modules: "ML, DL and GenAI breadth with capstones [VERIFY depth].",
      placement: "Provider-reported career services [VERIFY].",
      ctaLabel: "Compare premium band fees",
      ctaHref: "#comparison-tables",
    };
  }
  if (a.placement === "Critical" && a.budget === "₹1.2L+" && a.time === "12+ hrs") {
    return {
      name: "Placement-infrastructure bootcamps (Scaler and similar)",
      fee: "₹2,50,000–₹4,00,000 [VERIFY]",
      duration: "11–18 months",
      why: "You have the time and budget for a long, placement-led format. Ask for placement numbers with a denominator and a batch date before signing anything.",
      modules: "CS fundamentals plus AI/ML modules.",
      placement: "Provider-reported placement infrastructure [VERIFY denominators].",
      ctaLabel: "Read the pre-payment checklist",
      ctaHref: "#checklist",
    };
  }
  if (a.mode === "Self-paced" && a.foundations === "No, already solid") {
    return {
      name: "Self-paced specialisations with reviewed projects (DeepLearning.AI, Udacity, Hugging Face)",
      fee: "Subscription ₹X,XXX–₹XX,XXX per month [VERIFY]",
      duration: "3–6 months",
      why: "Your foundations are in place and you prefer self-paced study, so you are buying current material and project feedback — not classroom structure.",
      modules: "Deep learning, NLP, LLMs, RAG, agents, MLOps basics.",
      placement: "Limited to none [VERIFY].",
      ctaLabel: "Compare mid-band options",
      ctaHref: "#detailed-comparison",
    };
  }
  return logicmojo;
}

export function CourseRecommendationQuiz() {
  const [answers, setAnswers] = useState<Answers>({});
  const [open, setOpen] = useState(false);
  const result = useMemo(() => match(answers), [answers]);
  const answeredCount = questions.filter((q) => answers[q.key]).length;
  const complete = answeredCount === questions.length;

  return (
    <div className="quiz-panel">
      <div className="quiz-questions">
        {questions.map((q, i) => (
          <fieldset key={q.key}>
            <legend>
              <span>{i + 1}</span>
              {q.label}
            </legend>
            <div className="option-grid">
              {q.options.map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant={answers[q.key] === option ? "default" : "outline"}
                  onClick={() => setAnswers((v) => ({ ...v, [q.key]: option }))}
                >
                  {answers[q.key] === option ? <Check aria-hidden="true" /> : null}
                  {option}
                </Button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <aside className="quiz-status" aria-live="polite">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Quiz progress</p>
        <p className="mt-3 text-3xl font-bold text-foreground">{answeredCount}/8</p>
        <progress className="finder-progress mt-4" max={8} value={answeredCount} aria-label="Quiz completion" />
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Answers stay on your device. The result is a decision aid based on your budget, time and
          goal — not a ranking, and not an outcome promise.
        </p>
        <Button type="button" className="mt-5 w-full" disabled={!complete} onClick={() => setOpen(true)}>
          <Sparkles aria-hidden="true" /> {complete ? "Show my best-fit course" : "Answer all eight questions"}
        </Button>
        <Button type="button" variant="ghost" className="mt-2 w-full" onClick={() => setAnswers({})}>
          Reset quiz
        </Button>
      </aside>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-xl">
          <DialogHeader>
            <DialogDescription className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Your best-fit option
            </DialogDescription>
            <DialogTitle className="text-2xl leading-tight">{result.name}</DialogTitle>
          </DialogHeader>
          <dl className="quiz-result">
            <div><dt>Fee</dt><dd className="rupee">{result.fee}</dd></div>
            <div><dt>Duration &amp; mode</dt><dd>{result.duration}</dd></div>
            <div><dt>Why it fits you</dt><dd>{result.why}</dd></div>
            <div><dt>Key modules</dt><dd>{result.modules}</dd></div>
            <div><dt>Placement support</dt><dd>{result.placement}</dd></div>
          </dl>
          <a
            href={result.ctaHref}
            {...(result.sponsored ? { rel: "sponsored" } : {})}
            onClick={() => result.ctaHref.startsWith("#") && setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {result.ctaLabel} <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <p className="text-xs text-muted-foreground">
            Confirm fee, tax, EMI terms, duration, syllabus and refund policy in writing before paying.
            LogicMojo publishes this guide; the disclosure appears near the top of the page.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
