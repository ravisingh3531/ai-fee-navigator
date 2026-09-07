import type { ReactNode } from "react";
import { BadgeCheck, Eye, GraduationCap, Landmark, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    label: "Experience",
    title: "Fee sheets I opened myself",
    body: "Every fee band on this page comes from sitting with the provider's own pricing page, enquiry form or fee brochure and writing down what it actually said — including the offers that expired while I was reading them. Where I could not reach a number without a sales call, I say so instead of estimating it.",
  },
  {
    icon: GraduationCap,
    label: "Expertise",
    title: "Read as a syllabus, not a sales page",
    body: "Curriculum judgements here are made module by module: whether Python and maths come before modelling, whether deep learning goes past a single notebook, and whether retrieval, fine-tuning, agents and deployment are named modules or marketing adjectives. Fee judgements are made on total payable amount, tax treatment, instalment cost and refund cut-off.",
  },
  {
    icon: Landmark,
    label: "Authoritativeness",
    title: "Named sources, checkable claims",
    body: "Fees are sourced to provider pages. Learner accounts stay attributed to where they were published, such as LogicMojo's success-story page. Four specialist reviewers — hiring, education lending, a career switcher and a curriculum designer — hold review slots for the sections closest to their work, and their identities remain blank until permission is recorded.",
  },
  {
    icon: ShieldCheck,
    label: "Trustworthiness",
    title: "Placeholders instead of plausible numbers",
    body: "This guide is published by LogicMojo, which sells one of the programmes discussed, and that is stated at the top rather than buried. No placement percentage, salary figure or testimonial appears here without a source. Anything in square brackets is a gap I refuse to fill with a guess, and every figure is re-checked quarterly.",
  },
];

export function EeatPanel({ lastUpdated }: { lastUpdated: string }) {
  return (
    <section aria-labelledby="eeat-heading" className="mt-12 rounded-lg border border-border bg-card p-6 shadow-panel sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Why you can trust this page</p>
      <h2 id="eeat-heading" className="mt-3 text-2xl font-semibold sm:text-3xl">
        How this guide was researched, and what I will not claim
      </h2>
      <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
        I write about the cost of Indian AI programmes because the pricing is genuinely hard to
        compare, not because any one programme deserves a recommendation by default. Here is the
        standard I held myself to while assembling every table below, current as of {lastUpdated}.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {pillars.map(({ icon: Icon, label, title, body }) => (
          <div key={label} className="rounded-md border border-border bg-muted/50 p-5">
            <div className="flex items-center gap-3">
              <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{label}</p>
            </div>
            <h3 className="mt-3 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground/90">{body}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <BadgeCheck aria-hidden="true" className="h-4 w-4 text-primary" />
        Written by [INSERT: Author name], AI education analyst · reviewed by four named specialists
        [INSERT names] · fees verified {lastUpdated} · next re-verification due the following quarter.
      </p>
    </section>
  );
}

export function FromExperience({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-8 rounded-lg border border-primary/25 bg-accent/40 p-5 sm:p-6">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
        <Eye aria-hidden="true" className="h-4 w-4" /> From my own review
      </p>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <div className="mt-2 space-y-3 text-[0.97rem] leading-relaxed text-foreground/90">{children}</div>
    </aside>
  );
}
