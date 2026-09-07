import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/fee-spectrum-hero.jpg";
import { Callout, Faq, H2, H3, Note, Section, TableBlock } from "@/components/article";
import { faqGroups } from "@/content/faqs";
import {
  LAST_UPDATED,
  checklist,
  feeSpectrum,
  table1,
  table10,
  table11,
  table12,
  table13,
  table14,
  table15,
  table16,
  table2,
  table3,
  table4,
  table5,
  table6,
  table7,
  table8,
  table9,
} from "@/content/tables";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Course Fees in India 2026: Fees, Duration & Eligibility" },
      {
        name: "description",
        content:
          "AI course fees in India 2026: ₹0 to ₹5L+ compared across 25+ programs — fee tables, duration, eligibility, EMI fine print, salary scope and ROI.",
      },
      {
        property: "og:title",
        content: "AI Course Fees in India 2026: Fees, Duration, Eligibility & Career Scope",
      },
      {
        property: "og:description",
        content:
          "Verified 2026 fee ranges for AI/ML programs in India — online, offline, certification, bootcamp, university and executive — with EMI terms, eligibility and ROI scenarios.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeesGuide,
});

const toc = [
  ["overview", "AI Course Fees in India 2026 — Quick Overview"],
  ["comparison-tables", "AI Course Fee Comparison Tables (2026)"],
  ["by-type-level", "Fees by Course Type & Learning Level"],
  ["online-offline", "Online vs Offline AI Course Fees"],
  ["duration-eligibility", "Duration & Eligibility in India (2026)"],
  ["detailed-comparison", "Detailed Course-by-Course Comparison"],
  ["logicmojo", "LogicMojo AI & ML Course — Fee & Career Value"],
  ["inclusions", "What Is Included in AI Course Fees?"],
  ["career-scope", "AI Career Scope & Salary After an AI Course"],
  ["roi", "ROI & Value for Money"],
  ["checklist", "Course-Selection Checklist & Decision Guide"],
  ["faqs", "35+ FAQs on AI Course Fees"],
  ["author", "Author, Reviewers & Methodology"],
  ["final-guide", "Final Decision Guide"],
] as const;

type Program = {
  name: string;
  fee: string;
  emi: string;
  duration: string;
  eligibility: string;
  format: string;
  scope: string;
  projects: string;
  placement: string;
  value: string;
  body: string;
};

const programs: Program[] = [
  {
    name: "NPTEL, SWAYAM, fast.ai, Hugging Face and the free stack",
    fee: "₹0 (NPTEL exam certificate charged separately [VERIFY])",
    emi: "Not applicable",
    duration: "4–12 weeks per course; 6–12 months for a full self-built path",
    eligibility: "Open; some courses assume Python and 12th-level maths",
    format: "Self-paced online, with fixed NPTEL exam dates",
    scope:
      "ML Covered · DL Covered · NLP/CV Covered · GenAI Partial · RAG Partial · Agents Partial · MLOps Partial",
    projects: "As many as you set yourself; no review",
    placement: "None",
    value: "The correct starting point for anyone unsure whether they enjoy this work",
    body: "The free tier is not a lesser tier of content. NPTEL courses are taught by IIT and IISc faculty, fast.ai is the fastest route from Python to a working deep-learning model, and Hugging Face's courses track the LLM and agent stack more closely than most paid syllabi. What is missing is everything except content: no sequence chosen for you, no one to look at your code, no deadline, and no credential unless you sit the NPTEL exam. That is precisely why so many learners start here and stop here. I recommend spending four to six weeks in this band before you pay anyone anything: if you finish a fast.ai lesson and a small project unaided, you have proved you can use a cheaper program; if you cannot open the material three weeks running, you have learned something worth far more than a course fee.",
  },
  {
    name: "Udemy AI/ML bootcamp courses",
    fee: "₹499–₹3,999 depending on the platform's rolling pricing [VERIFY]",
    emi: "Not applicable",
    duration: "20–60 recorded hours; lifetime access",
    eligibility: "None",
    format: "Self-paced recorded video",
    scope: "ML Covered · DL Partial · GenAI Partial · Agents Partial · MLOps Not covered",
    projects: "Build-along projects, no feedback",
    placement: "None",
    value: "Cheapest way to fill a specific gap once you know what the gap is",
    body: "At this price, a course is a reference book with a voice. That has real utility: when you need one clean explanation of gradient descent, tokenisation or a scikit-learn pipeline, a few hundred rupees is an excellent trade. The failure mode is buying six of them and treating the purchase as progress. Nothing here reviews your code, and a build-along project you typed while watching is not portfolio evidence — interviewers can tell within two questions.",
  },
  {
    name: "IBM AI Engineering Professional Certificate (Coursera)",
    fee: "Coursera subscription, ₹X,XXX per month [VERIFY]",
    emi: "Not applicable; cancel any time",
    duration: "4–6 months at 6 hours per week",
    eligibility: "None stated; Python is taught in-track",
    format: "Self-paced online with graded assignments",
    scope: "ML Covered · DL Covered · NLP/CV Covered · GenAI Partial · Agents Not covered · MLOps Partial",
    projects: "Guided labs plus a capstone",
    placement: "None",
    value: "A brand-name certificate at a fee that scales with your speed",
    body: "Because you pay monthly, your effective fee depends on how fast you move — finish in three months and it is cheap, drift for a year and it is not. The content is solid on classical machine learning and deep learning and thinner on the 2026 generative stack, so treat it as a foundation purchase rather than a job-ready one. It is also one of the few credentials in this band that Indian L&D teams commonly reimburse without argument [VERIFY with your employer].",
  },
  {
    name: "DeepLearning.AI specialisations and short courses (Coursera)",
    fee: "Subscription pricing, ₹X,XXX per month; several short courses free [VERIFY]",
    emi: "Not applicable",
    duration: "3–6 months per specialisation; short courses 1–2 hours",
    eligibility: "Python and basic maths",
    format: "Self-paced online",
    scope: "ML Deep · DL Deep · NLP/CV Good · LLM Good · RAG Good · Agents Partial · MLOps Partial",
    projects: "Notebook assignments, auto-graded",
    placement: "None",
    value: "The best conceptual grounding per rupee available anywhere",
    body: "If your problem is understanding — why attention works, what a learning-rate schedule does, how an evaluation set should be built — this is the most efficient money in the market. If your problem is accountability, a portfolio or interviews, this band will not solve it, because auto-graded notebooks are not the same as a human telling you your feature leakage invalidated the result. Many strong candidates I have spoken to used these courses as the theory layer underneath a paid, structured program.",
  },
  {
    name: "Vendor certification paths — Google Cloud, AWS, Microsoft Azure, NVIDIA",
    fee: "Training ₹0–₹30,000; proctored exam fees charged separately, ₹XX,XXX [VERIFY per exam]",
    emi: "Not applicable",
    duration: "4–12 weeks per certification",
    eligibility: "Platform familiarity strongly recommended",
    format: "Self-paced labs and documentation; some instructor-led workshops",
    scope: "ML Partial · DL Partial · GenAI Covered · Agents Partial · MLOps Covered",
    projects: "Hands-on labs on the vendor's own platform",
    placement: "None",
    value: "Signals deployable, cloud-specific skill to enterprise employers",
    body: "These certifications answer a narrow question well: can you run AI workloads on this specific cloud? That is exactly what GCC and IT-services hiring managers screen for on infrastructure-adjacent roles, and it is why these badges appear so often in internal-mobility cases. They will not teach you to build a model from first principles, and they expire, which is a recurring cost most buyers forget. Note that training material is frequently free while the exam is not — budget the exam fee separately.",
  },
  {
    name: "PW Skills — Data Science with Generative AI",
    fee: "₹XX,XXX [VERIFY current fee]",
    emi: "Available [VERIFY terms]",
    duration: "6–12 months [VERIFY]",
    eligibility: "Graduation or final year [VERIFY]",
    format: "Live sessions plus recordings",
    scope: "ML Covered · DL Covered · GenAI Covered · Agents Partial · MLOps Partial",
    projects: "Multiple guided projects [VERIFY count]",
    placement: "Job assistance [VERIFY scope]",
    value: "Cohort structure at a student-affordable fee",
    body: "This band exists because a large share of Indian learners cannot commit ₹1L, and it serves them honestly: a sequenced syllabus, live contact and a community, at a fee recoverable from a few months of a first salary. What you trade is instructor-to-learner ratio — support is real but shared, and the burden of finishing stays largely with you. For final-year students and freshers with time but no money, this is usually the rational first purchase.",
  },
  {
    name: "GUVI — AI & Machine Learning",
    fee: "₹XX,XXX [VERIFY current fee]",
    emi: "Available [VERIFY terms]",
    duration: "5–9 months [VERIFY]",
    eligibility: "Graduation or final year [VERIFY]",
    format: "Hybrid; regional-language options for some tracks [VERIFY]",
    scope: "ML Covered · DL Covered · GenAI Partial · Agents Partial · MLOps Partial",
    projects: "Portfolio projects with review [VERIFY]",
    placement: "Placement support [VERIFY scope]",
    value: "Accessible entry with practice platforms attached",
    body: "The distinguishing feature in this band is the practice infrastructure — coding platforms and assessments that force repetition rather than passive watching. For Tier-2 and Tier-3 learners in particular, the combination of a modest fee and structured practice removes the two biggest obstacles at once. Confirm how much of the GenAI content is live versus recorded before enrolling, because that is where syllabi in this price band vary the most.",
  },
  {
    name: "Analytics Vidhya BlackBelt and iNeuron full-stack tracks",
    fee: "₹XX,XXX–₹X,XX,XXX [VERIFY per program]",
    emi: "Available [VERIFY]",
    duration: "6–12 months",
    eligibility: "Graduation; some coding assumed [VERIFY]",
    format: "Live online with mentor sessions",
    scope: "ML Covered · DL Covered · GenAI Covered · Agents Partial · MLOps Covered",
    projects: "Competition-style and deployment projects [VERIFY]",
    placement: "Mentorship and career support [VERIFY]",
    value: "Applied, competition-flavoured practice with deployment emphasis",
    body: "Programs here lean toward doing rather than lecturing: hackathons, leaderboards and deployment exercises. That suits learners who are already comfortable with code and want reps against real datasets. It suits absolute beginners less well, because the pace assumes you can debug your own environment. Ask specifically how mentor time is allocated, since that is the variable that changes the value of this fee the most.",
  },
  {
    name: "Udacity AI Programming and ML Nanodegrees",
    fee: "Subscription, ₹XX,XXX per month [VERIFY]",
    emi: "Not applicable; monthly billing",
    duration: "3–6 months per Nanodegree",
    eligibility: "Python basics; some tracks require a prerequisite course",
    format: "Self-paced with human project reviews",
    scope: "ML Covered · DL Covered · NLP/CV Covered · GenAI Partial · Agents Partial · MLOps Partial",
    projects: "Reviewed projects — the core of what you pay for",
    placement: "Career services [VERIFY current scope]",
    value: "Human feedback without a fixed class schedule",
    body: "Udacity's proposition is unusual and worth understanding: you buy reviewed submissions rather than live classes. If your schedule cannot survive fixed batch timings but you still need someone to tell you your code is wrong, this is the closest fit in the market. The monthly model punishes slow learners, so estimate your realistic pace and multiply before you compare the fee with a fixed-price program.",
  },
  {
    name: "LogicMojo AI & ML Course",
    fee: "₹87,000; 15% discount for the first 15 enrolments → ₹73,950 (GST treatment [VERIFY])",
    emi: "Available [VERIFY tenure, lender and no-cost option]",
    duration: "[VERIFY: months and weekly hours]",
    eligibility: "Graduation and basic programming aptitude; prerequisite onboarding [VERIFY]",
    format: "Live online cohort with recordings [VERIFY batch timings, IST]",
    scope:
      "ML Covered · DL Covered · NLP/CV Covered · GenAI Covered · RAG Covered · Fine-tuning Covered · Agents Covered · MLOps Covered [VERIFY against the course page]",
    projects: "Progressive projects leading to a capstone [VERIFY count]",
    placement: "Interview preparation and job assistance; not a placement guarantee",
    value: "Full-stack AI engineering capability without a credential premium",
    body: "LogicMojo sits in the specialist band, and its fee reflects a specific choice: spend on live teaching, mentorship and interview preparation rather than on a university licence. For a working engineer who can commit 10–15 hours a week, that is the band where cost per capability is usually lowest, because the newest parts of the stack — LLMs, retrieval, fine-tuning, agents, deployment — are where instruction is scarce and where a live instructor earns their fee. The section below covers the fee, offer, curriculum, projects and job-assistance scope in detail, all of it to be confirmed against the course page on [INSERT DATE].",
  },
  {
    name: "Intellipaat AI & ML (institute-affiliated variants)",
    fee: "₹X,XX,XXX [VERIFY — variants differ by affiliation tier]",
    emi: "Available [VERIFY]",
    duration: "7–11 months [VERIFY]",
    eligibility: "Graduation [VERIFY]",
    format: "Live online",
    scope: "ML Covered · DL Covered · GenAI Covered · Agents Partial · MLOps Covered",
    projects: "Industry projects [VERIFY count]",
    placement: "Career services and interview preparation [VERIFY]",
    value: "An institute-tagged certificate at a mid-premium fee",
    body: "The important question with any affiliated program is what the affiliation delivers: a co-branded certificate, a handful of guest lectures, or genuine faculty-taught modules. All three are marketed similarly and priced similarly. Ask how many contact hours the named institute actually teaches and who signs the certificate. If the answer is a certificate and two sessions, you are buying a certificate — which can still be the right purchase, as long as you know that is the purchase.",
  },
  {
    name: "Simplilearn PGP in AI & ML (Purdue / IBM collaboration)",
    fee: "₹X,XX,XXX [VERIFY]",
    emi: "Available [VERIFY]",
    duration: "11–12 months [VERIFY]",
    eligibility: "Graduation, often 50% marks [VERIFY]",
    format: "Live online masterclasses plus self-paced content",
    scope: "ML Covered · DL Covered · GenAI Covered · Agents Partial · MLOps Partial",
    projects: "Capstone plus module projects [VERIFY]",
    placement: "Career assistance [VERIFY scope]",
    value: "Recognisable international branding for HR screening",
    body: "Programs built around a university collaboration price the brand, and for some buyers that is a rational spend — internal promotions, visa and immigration files, and reimbursement approvals all respond to recognisable names. What tends not to improve in step with the fee is instructor contact per learner. If you are paying at this level, use every live session and every review you are entitled to; unused entitlements are where this band's value quietly leaks.",
  },
  {
    name: "Great Learning PGP-AIML (UT Austin collaboration)",
    fee: "₹X,XX,XXX [VERIFY]",
    emi: "Available [VERIFY]",
    duration: "7–12 months [VERIFY]",
    eligibility: "Graduation [VERIFY]",
    format: "Live online with mentored sessions; some hybrid options",
    scope: "ML Covered · DL Covered · NLP/CV Covered · GenAI Partial · Agents Partial",
    projects: "Multiple mentored projects [VERIFY]",
    placement: "Career services, resume and interview support [VERIFY]",
    value: "Mentored cohort learning with an international credential",
    body: "The mentored-session model is the substantive part of this offering — small-group time with a practitioner is the closest a large program comes to individual attention. Check the newest-stack modules carefully at this price point, because generative AI content in longer university-linked programs is often an added module rather than a rebuilt spine. If it is an add-on and you need production GenAI skills, plan a supplementary purchase and count it in your total.",
  },
  {
    name: "upGrad PG Programme in ML & AI (IIIT-Bangalore)",
    fee: "₹X,XX,XXX [VERIFY]",
    emi: "Available, long tenures [VERIFY]",
    duration: "12–18 months [VERIFY]",
    eligibility: "Graduation, often 50% marks [VERIFY]",
    format: "Online with optional campus immersion",
    scope: "ML Covered · DL Covered · NLP/CV Covered · GenAI Partial · MLOps Partial",
    projects: "Case studies and a capstone [VERIFY]",
    placement: "Career services, referrals, interview preparation [VERIFY]",
    value: "An Indian university credential recognised across domestic HR",
    body: "For learners inside large Indian enterprises, an IIIT-Bangalore association carries real weight in promotion and reimbursement conversations, and that is the clearest justification for the fee. The trade is duration: 12 to 18 months is a long time to hold attention, and completion — not enrolment — is what produces the outcome. Before signing a 24- or 36-month EMI, ask yourself honestly whether you will still be attending in month eleven.",
  },
  {
    name: "IIT Madras BS in Data Science and Applications",
    fee: "₹X,XX,XXX total, charged per term; fee waivers by income slab [VERIFY]",
    emi: "Term-wise payment rather than a loan [VERIFY]",
    duration: "3–4 years, with exit options at certificate and diploma levels",
    eligibility: "12th pass with a qualifier process [VERIFY]",
    format: "Online with in-person proctored exams",
    scope: "ML Covered · DL Covered · NLP/CV Covered · GenAI Partial · Agents Not covered",
    projects: "Course projects and a capstone [VERIFY]",
    placement: "Institute placement processes [VERIFY eligibility]",
    value: "An actual degree, paid for a term at a time",
    body: "This is the only entry on the page that is a degree from an IIT, and its structure is unusually humane: you pay per term, you can exit with a foundation certificate or diploma, and the qualifier route means no entrance-exam gatekeeping in the traditional sense. The cost is time — three to four years alongside work — and the newest generative and agentic material is not the point of a degree curriculum. For a 12th-pass learner or someone who needs a formal qualification for further study or immigration, nothing else on this page substitutes for it.",
  },
  {
    name: "IISc / TalentSprint and IIT executive AI programmes",
    fee: "₹X,XX,XXX [VERIFY per programme]",
    emi: "Instalments and financing available [VERIFY]",
    duration: "6–12 months",
    eligibility: "Graduation plus work experience, often 2+ years [VERIFY]",
    format: "Online with campus immersion visits",
    scope: "ML Covered · DL Covered · GenAI Partial · Agents Not covered · MLOps Partial",
    projects: "Applied projects and case work [VERIFY]",
    placement: "Networking; placement support limited",
    value: "Faculty access, peer network and institutional prestige",
    body: "The honest reading of this band is that you are buying who is in the room — faculty and a cohort of senior professionals — plus a certificate that opens doors inside large organisations. Cost per instruction hour is the highest of any format on this page, often by a factor of three. That is not automatically bad value; a single senior role or consulting engagement can repay it. It is bad value if you enrolled expecting hands-on engineering depth, which is what the specialist band is for.",
  },
  {
    name: "Scaler DS / ML / AI program",
    fee: "₹X,XX,XXX–₹X,XX,XXX [VERIFY variant]",
    emi: "Available, long tenures [VERIFY]",
    duration: "9–18 months [VERIFY]",
    eligibility: "Working professionals with coding experience; entrance test [VERIFY]",
    format: "Live online cohort with structured schedule",
    scope: "ML Covered · DL Covered · GenAI Covered · Agents Partial · MLOps Covered",
    projects: "Structured projects and capstone [VERIFY]",
    placement: "Dedicated placement operations and partner network [VERIFY]",
    value: "Interview volume for candidates who need a pipeline, not just skills",
    body: "At the top of the fee range, what genuinely differs is placement machinery: teams whose job is to produce interviews, plus cohort selectivity that makes the peer group itself useful. If your bottleneck is that your applications are not converting to interviews, that machinery is what your money is for. Ask for outcome numbers with a denominator — enrolled, completed, placed, over what window — and ask which of the advertised companies hired in the last two cohorts, not since inception.",
  },
];

function ProgramCard({ p }: { p: Program }) {
  const rows: [string, string][] = [
    ["Fee (₹)", p.fee],
    ["EMI / offers", p.emi],
    ["Duration", p.duration],
    ["Eligibility", p.eligibility],
    ["Format", p.format],
    ["Curriculum scope", p.scope],
    ["Projects", p.projects],
    ["Placement / job assistance", p.placement],
    ["Career value — who this fee suits", p.value],
    ["Verified on", "[INSERT DATE]"],
  ];
  const isLogicMojo = p.name.startsWith("LogicMojo");
  return (
    <article
      className={`mt-8 rounded-lg border p-5 shadow-panel ${
        isLogicMojo ? "border-highlight bg-highlight/10" : "border-border bg-card"
      }`}
    >
      <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
      <dl className="mt-4 grid gap-x-6 gap-y-2 text-[0.875rem] sm:grid-cols-[minmax(0,14rem)_1fr]">
        {rows.map(([k, v]) => (
          <div key={k} className="sm:col-span-2 sm:grid sm:grid-cols-subgrid">
            <dt className="font-semibold text-muted-foreground">{k}</dt>
            <dd className="mb-1 text-foreground/90 sm:mb-0">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground/90">{p.body}</p>
    </article>
  );
}

function FeesGuide() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <span className="font-display text-sm font-bold tracking-tight text-foreground">
            LogicMojo
          </span>
          <a
            href="#logicmojo"
            className="rounded-md bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            AI &amp; ML Course — ₹87,000
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-10 article-body">
        {/* SECTION 1 — H1, quick answer, introduction */}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Fees &amp; budgeting guide · India
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-[2.6rem]">
          AI Course Fees in India 2026: Fees, Duration, Eligibility &amp; Career Scope
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {LAST_UPDATED} · Reading time: approximately 45 minutes
        </p>
        <p className="mt-3 rounded-md border border-border bg-muted/60 p-4 text-sm text-muted-foreground">
          <strong className="text-foreground">Disclosure:</strong> this page is published by
          LogicMojo, which offers the AI &amp; ML Course featured below. Fees and details for all
          other programs are taken from their public pages as of {LAST_UPDATED} and are marked where
          a provider does not publish them.
        </p>

        <div className="mt-6 rounded-lg border-2 border-primary bg-accent/40 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Quick Answer
          </p>
          <p className="mt-2 text-[0.98rem] leading-relaxed text-foreground">
            <strong>AI course fees in India</strong> in 2026 range from{" "}
            <strong>₹0 (free MOOCs and NPTEL) to ₹5,00,000+ </strong>
            (IIT/IIM executive programs and premium bootcamps). Most structured, job-oriented AI/ML
            programs cost <strong>₹50,000–₹2,50,000</strong>, with EMI available on almost all of
            them. Short certifications run ₹3,000–₹40,000; university-affiliated PG programs
            ₹1.5L–₹3.5L; offline classroom programs add ₹XX,XXX–₹XX,XXX in living and commute costs
            [VERIFY]. As one reference point, the <strong>LogicMojo AI &amp; ML Course is priced at
            ₹87,000</strong>, with a <strong>15% discount for the first 15 enrolments
            (₹73,950)</strong>. Below: full fee tables by course type, format and level, what the
            fee includes, duration and eligibility, salary scope and ROI.
          </p>
        </div>

        <img
          src={heroImage}
          alt="AI course fees in India 2026 shown as a rising staircase of rupee-marked fee bands"
          width={1600}
          height={912}
          className="mt-8 w-full rounded-lg border border-border shadow-lift"
        />

        <p className="mt-8">
          I have spent the past several weeks doing something no course landing page will do for
          you: putting the fee sheets side by side. Free university content, ₹1,500 recorded
          courses, ₹87,000 specialist cohorts, ₹2L university-linked programmes, ₹4L placement
          bootcamps and ₹5L executive certificates — all of them describing, in almost identical
          language, a curriculum that starts with Python and ends with generative AI. The
          syllabi look interchangeable. The prices differ by a factor of three hundred.
        </p>
        <p>
          That gap is the reason this page exists. In 2026, AI is a hiring line item across Indian
          product companies, global capability centres, IT services, BFSI, healthcare, retail and
          manufacturing, and the course market has responded with hundreds of programs. It has also
          responded with pricing behaviour that makes comparison genuinely hard: fees hidden behind
          &quot;request a callback&quot;, discount timers that reset every time the page reloads,
          &quot;no-cost EMI&quot; that is not free, institute tags on programmes where the
          institute&apos;s involvement ranges from teaching the course to lending its logo, and
          placement statistics quoted without a denominator.
        </p>
        <p>
          The trap underneath all of it is structural. You cannot judge whether a ₹2,00,000 fee is
          justified by that program&apos;s curriculum, because if you already knew enough AI to
          evaluate the curriculum you would not need the course. So buyers fall back on proxies —
          brand, price, sales-call confidence — and three failure patterns follow.
        </p>
        <p>
          <strong>One: paying for a brand and expecting depth.</strong> A premium university tag is
          bought for HR recognition, and the newest modules — retrieval, fine-tuning, agents,
          evaluation — turn out to be a fortnight bolted onto a 2023 spine.{" "}
          <strong>Two: paying for cheap and expecting support.</strong> A ₹6,000 course carries the
          same syllabus on paper and nobody to ask at 11pm when the loss will not come down.{" "}
          <strong>Three: paying for a program and not finishing it.</strong> The 24-month EMI still
          running on a course abandoned in month three is, by a wide margin, the most common
          financial regret in Indian EdTech, and no comparison table will save you from it.
        </p>

        <Note>
          A course fee buys five things: content, structure, feedback, credential and career
          support. Content is nearly free in 2026. What you are actually paying for is the other
          four — and the price you should pay depends on which of those four you cannot supply
          yourself.
        </Note>

        <p>
          Consider how these costs actually land. A ₹2,00,000 program becomes ₹2,40,000 once tax
          treatment and EMI interest are counted. A &quot;no-cost EMI&quot; is offered, and the
          ₹25,000 upfront-payment discount quietly disappears to fund the lender&apos;s interest. An
          offline programme in Bengaluru costs a Coimbatore learner six months of paying-guest rent
          on top of the fee. A free MOOC is abandoned at 20% completion — a very common outcome
          [VERIFY completion figure or state qualitatively]. &quot;Placement assistance&quot; turns
          out to be a resume template and a WhatsApp group. A fee is paid on a Sunday sales call
          under a &quot;price rises tonight&quot; timer. And a refund window closes seven days after
          enrolment, three days before the first live class, so the first thing you can evaluate
          arrives after the last moment you could have walked away.
        </p>

        <Note>
          The financial cost of the wrong choice is ₹5,000 to ₹3,00,000. The real cost is the months
          spent — in a field where nine months is a generation.
        </Note>

        <p>
          So here is what this guide does. It collects published 2026 fees for more than
          twenty-five programs across every format and level available to Indian learners. It
          explains what drives each price band, what is included in a fee and what is hidden behind
          it, how EMI and no-cost EMI actually work, how long each program really takes at six, ten
          and fifteen hours a week, who is eligible without a computer-science degree, what career
          outcomes each fee band realistically supports, and how to run the payback maths for your
          own situation before you sign anything.
        </p>
        <p>
          On verification: every fee here is taken from the provider&apos;s public page as of{" "}
          {LAST_UPDATED}. Where a provider does not publish a fee, the cell says so rather than
          guessing. Where a figure is an illustrative calculation rather than a published number, it
          is labelled. Nothing on this page is estimated and presented as fact — if you find a
          bracketed placeholder, that is a number I could not verify, and you should ask the
          provider for it directly.
        </p>

        <TableBlock
          number="Visual 1"
          title="The AI Course Fee Spectrum in India (2026)"
          headers={feeSpectrum.headers}
          rows={feeSpectrum.rows}
          highlightMatch="₹40,000–₹1,20,000"
          caption="Fee band predicts what you're buying more than how much you'll learn. Depth of AI capability does not rise linearly with price."
        />

        {/* SECTION 2 — TOC */}
        <nav
          aria-label="Table of contents"
          className="my-10 rounded-lg border border-border bg-card p-5 shadow-panel"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            On this page
          </h2>
          <ol className="mt-3 grid gap-1.5 text-[0.9rem] sm:grid-cols-2">
            {toc.map(([id, label], i) => (
              <li key={id} className="flex gap-2">
                <span className="rupee text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <a href={`#${id}`} className="text-primary underline-offset-4 hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* SECTION 3 */}
        <Section id="overview">
          <H2>AI Course Fees in India 2026 — Quick Overview</H2>
          <H3>How much does an AI course cost in India in 2026?</H3>
          <p>
            An AI course in India costs anywhere from ₹0 to ₹5,00,000+. Free options — NPTEL,
            SWAYAM, fast.ai, Hugging Face, MOOC audits — cost nothing but the certificate fee. Short
            certifications run ₹3,000–₹40,000. Specialist AI/ML programs with live mentorship sit at
            ₹40,000–₹1,20,000. University-affiliated PG programmes cost ₹1,50,000–₹3,50,000, and
            IIT, IIM and IISc executive programmes plus premium placement bootcamps run
            ₹1,50,000–₹5,00,000 and above. Most people who complete a career switch pay between
            ₹50,000 and ₹2,50,000.
          </p>
          <TableBlock
            number="Table 1"
            title="AI Course Fee Summary by Program Category (2026)"
            headers={table1.headers}
            rows={table1.rows}
            highlightMatch="Specialist AI/ML"
          />

          <H3>Why do AI course fees vary so much?</H3>
          <p>Eight cost drivers explain almost the entire spread, and only two of them are curriculum.</p>
          <ol>
            <li>
              <strong>Delivery format.</strong> Live instructor hours are the single biggest cost in
              any program, because an instructor&apos;s time cannot be duplicated. Recorded content
              has near-zero marginal cost, which is exactly why ₹1,500 recorded courses can exist
              alongside ₹1,00,000 live cohorts with similar syllabi. Fee impact: this alone accounts
              for tens of thousands of rupees.
            </li>
            <li>
              <strong>Mentorship and code review.</strong> Human feedback scales badly — one
              reviewer can only read so much code a week. Programs offering 1:1 mentors, code review
              and project defence price for that labour, and it is the most defensible reason to pay
              more.
            </li>
            <li>
              <strong>Credential source.</strong> University and institute tie-ups carry licensing
              and revenue-share arrangements, and those costs pass to the learner. Fee impact:
              frequently ₹50,000–₹1,50,000 of the difference between otherwise similar programmes.
            </li>
            <li>
              <strong>Placement operations.</strong> Dedicated placement teams, employer partner
              networks, mock-interview panels and coordinators are expensive to run. Programmes at
              the top of the market price for this infrastructure, and for candidates whose real
              bottleneck is interview volume, it is a rational purchase.
            </li>
            <li>
              <strong>Program length.</strong> An 18-month programme costs more than a six-month one
              — but not necessarily more per unit of capability gained. Length often reflects
              credential requirements and breadth rather than depth.
            </li>
            <li>
              <strong>Curriculum currency.</strong> Keeping generative AI, agents and MLOps content
              current requires continuous instructor investment, because the stack shifts every few
              months. A static 2023 syllabus costs nothing to maintain, which is why some cheap
              courses and some expensive ones are equally out of date.
            </li>
            <li>
              <strong>Physical infrastructure.</strong> Offline centres carry rent, hardware,
              electricity and local staff. Those costs are real, they are city-dependent, and they
              are the reason offline fees in metros cluster higher than online ones.
            </li>
            <li>
              <strong>Marketing and sales spend.</strong> A meaningful share of premium fees funds
              customer acquisition rather than instruction — advertising, lead generation and
              commissioned counsellors. This is an ordinary feature of the category, not a scandal,
              but you should know that some of your fee teaches nobody anything.
            </li>
          </ol>
          <Note>
            Rule of thumb: when two programs with similar syllabi differ by ₹1,00,000 or more, the
            gap is almost always credential, placement operations or sales spend — not curriculum.
          </Note>
        </Section>

        {/* SECTION 4 */}
        <Section id="comparison-tables">
          <H2>AI Course Fee Comparison Tables (2026)</H2>
          <p>
            Every fee below was read from the provider&apos;s own public page on {LAST_UPDATED}. Two
            warnings before you use these tables. First, fees in this category change frequently and
            are often negotiable — seasonal offers, student pricing, group enrolments and referral
            credits all move the number, and the price quoted on a call may differ from the page.
            Second, most providers sell variants: with or without a university tag, with or without
            a placement tier, self-paced or live. A single &quot;fee&quot; for a provider is
            therefore always a simplification.
          </p>
          <p>
            Before you pay anything, get four things in writing: the total payable amount including
            tax, the EMI interest and processing fee, the refund window with its conditions, and
            what exactly the certificate says. A provider unwilling to put those in an email has
            told you something useful.
          </p>

          <TableBlock
            number="Table 2"
            title="Master Fee Comparison: 25 AI/ML Programs Available to Indian Learners (2026)"
            note="Sorted by fee band, ascending. Not a ranking — position carries no quality judgement."
            headers={table2.headers}
            rows={table2.rows}
            highlightMatch="LogicMojo"
          />

          <TableBlock
            number="Table 3"
            title="Fee, Duration & Cost-per-Month / Cost-per-Hour"
            note="Computed only from published fees and published hours. Unpublished values are marked."
            headers={table3.headers}
            rows={table3.rows}
            highlightMatch="LogicMojo"
          />
          <p>
            Cost per hour is a better comparison than the headline fee, because it exposes what you
            are actually renting: qualified attention. A ₹3,00,000 executive programme delivering
            216 hours costs roughly ₹1,389 an hour; a ₹2,00,000 university programme delivering 480
            hours costs about ₹417. Both are legitimate purchases, but they are not the same
            purchase, and the headline figures suggest the opposite of the truth about intensity.
          </p>
          <p>
            One caution on the arithmetic: live hours and recorded hours should never be priced the
            same. A recorded hour can be paused, rewatched and skipped — valuable, but reproducible
            at no cost. A live hour includes the questions you ask, the mistake the instructor
            catches in your code, and the social pressure of showing up. When you compute cost per
            hour, count live hours, mentor hours and reviewed submissions separately from the video
            library.
          </p>

          <TableBlock
            number="Table 4"
            title="EMI, No-Cost EMI, Discounts & Refund Terms"
            headers={table4.headers}
            rows={table4.rows}
            highlightMatch="LogicMojo"
          />

          <H3 id="no-cost-emi">Is no-cost EMI actually free?</H3>
          <p>
            No. <strong>EMI</strong> (equated monthly instalment) is a fixed monthly repayment on
            credit, and <strong>no-cost EMI</strong> means only that you do not see an interest line
            on your statement — not that no interest exists. The lender, usually a non-banking
            financial company or your card issuer, is paid either way. The interest is funded by the
            merchant, and merchants fund it in one of two ways: by withdrawing a discount that an
            upfront payer would have received, or by setting the headline price high enough to
            absorb it.
          </p>
          <p>
            The test takes one question, asked in writing: &quot;What is the total I pay if I pay
            the full fee today, and what is the total across all instalments under no-cost EMI?&quot;
            If the second number is larger, the difference is the cost of the credit. If they are
            identical, ask whether an upfront discount exists that you forfeit by choosing EMI. Also
            ask about the <strong>processing fee</strong>, which is typically a one-time charge of a
            few hundred to a few thousand rupees and is often not included in the advertised
            instalment, and about tax on the finance charge. Regulatory disclosure rules require
            lenders to state the full cost of credit [VERIFY current RBI guidance], so the
            information exists — you may simply have to ask for it.
          </p>

          <H3 id="emi-dropout">What happens to my EMI if I stop attending?</H3>
          <p>
            The instalments continue. This is the single most expensive thing buyers in this market
            fail to understand: when your EMI is a third-party loan, the money has already been paid
            to the provider, and your obligation is to the lender, not to the course. Dropping out
            ends your access; it does not end your loan.
          </p>
          <p>
            Two separate documents govern what happens next. The <em>provider&apos;s refund policy</em>{" "}
            decides whether any fee comes back and on what timeline. The <em>lender&apos;s loan
            agreement</em> decides your foreclosure terms, prepayment penalty and what a missed
            instalment does to your credit record. They have different windows and neither
            references the other. Read both before signing either — and if a counsellor tells you
            that cancelling the course cancels the loan, ask them to write that sentence down.
          </p>
          <Callout label="If you are already paying for an abandoned course">
            Do not write the money off before you ask. Request the refund clause and check whether a
            batch deferral is available — many providers allow one pause. Then diagnose why it
            stalled: pace, missing prerequisites, or no accountability. Choose your next program to
            fix that specific failure, not to buy a bigger brand.
          </Callout>
        </Section>

        {/* SECTION 5 */}
        <Section id="by-type-level">
          <H2>AI Course Fees by Course Type &amp; Learning Level</H2>
          <H3>Fees by learning level — beginner, intermediate, advanced, job-oriented</H3>
          <p>
            The most expensive mistake in this market is buying at the wrong level rather than the
            wrong price. An AI-literacy programme sold to an engineer who wanted to build models
            wastes the fee; a full engineering track sold to a manager who needed to evaluate
            vendors wastes far more, because it also wastes six months.
          </p>
          <TableBlock
            number="Table 5"
            title="AI Course Fees by Learning Level (2026)"
            headers={table5.headers}
            rows={table5.rows}
            highlightMatch="Intermediate"
          />

          <H3>Fees by course type — certification, bootcamp, PG program, degree, executive</H3>
          <TableBlock
            number="Table 6"
            title="AI Course Fees by Course Type (2026)"
            headers={table6.headers}
            rows={table6.rows}
            highlightMatch="Specialist AI/ML program"
          />

          <H3>Beginner vs. advanced — should beginners pay more or less?</H3>
          <p>
            Counter-intuitively, beginners need <em>more</em> support per hour than experienced
            engineers, not less. A working developer who hits a broken environment loses twenty
            minutes; a commerce graduate in week two loses a weekend and some confidence.
            Prerequisite onboarding, patient doubt resolution and code review are exactly the
            expensive, human parts of a program — which is why the cheapest options, whose economics
            depend on recorded content, consistently underserve the learners who need help most.
          </p>
          <p>
            That is not an argument for spending ₹3,00,000 as a beginner. Advanced modules you are
            not ready for — distributed training, low-level inference optimisation, research-grade
            mathematics — are fee you cannot use. The highest-probability path for most career
            switchers is the intermediate band with prerequisite onboarding included: enough
            structure and human contact to survive the first two months, enough depth to reach
            hiring-grade capability, and no premium for a credential you may not need. LogicMojo is
            one example of a programme positioned in that band with prerequisite onboarding
            [VERIFY inclusion against the course page].
          </p>
          <Callout label="If you are a student with under ₹15,000">
            Do not stretch to a ₹1L program on EMI. Spend ₹0–₹15,000 in the free and low-fee bands
            for four to six months, ship two projects to a public repository, and re-assess. You
            will either discover you do not need the expensive program, or you will enter it able to
            use the mentorship instead of spending it on Python syntax.
          </Callout>
        </Section>

        {/* SECTION 6 */}
        <Section id="online-offline">
          <H2>Online vs Offline AI Course Fees in India</H2>
          <p>
            Comparing an online fee with an offline fee is a category error. Offline programmes have
            a fee <em>and</em> a cost of attendance, and for anyone outside the six metros that
            second number often exceeds the first.
          </p>
          <TableBlock
            number="Table 7"
            title="Online vs Offline: Total Cost of Ownership (6 months)"
            note="Totals computed from the rows above. All assumptions are [ILLUSTRATIVE]."
            headers={table7.headers}
            rows={table7.rows}
          />

          <H3>Is an offline AI course worth the extra cost?</H3>
          <p>
            Sometimes, and for specific reasons. Offline genuinely adds physical accountability —
            you cannot silently stop attending a room; lab access with provisioned hardware, which
            matters for GPU-heavy work; peer proximity, where the person next to you debugs your
            error in thirty seconds; and local networking that produces referrals in your own city.
            These are real goods, and learners who have failed twice at self-paced study should take
            them seriously.
          </p>
          <p>
            The costs are equally concrete: relocation and rent, a daily commute, fixed schedules
            that collide with production releases, and — the underrated one — a smaller instructor
            pool. An online cohort can hire the best available practitioner in the country; a
            classroom in a given city hires whoever is available in that city. For Tier-2 and Tier-3
            learners in Indore, Coimbatore, Kochi, Nagpur, Lucknow, Bhubaneswar, Jaipur or Guwahati,
            a live online cohort with real mentorship delivers most of the accountability benefit at
            a fraction of the total cost, and that is the decisive calculation for most of them.
          </p>

          <H3>Where are offline AI courses concentrated, and what do they charge?</H3>
          <p>
            Offline AI classroom training in India clusters in Bengaluru, Hyderabad, Pune, Chennai,
            the Delhi NCR region and Mumbai, with smaller centres in Ahmedabad, Kochi and
            Coimbatore. Published fees typically run ₹40,000–₹2,50,000 depending on duration and
            whether placement support is bundled [VERIFY by city and institute]. Two things are
            worth knowing before you plan a relocation: most institutes now run hybrid batches, so
            the &quot;offline&quot; programme may be a live stream you attend from a classroom; and
            weekend-only offline formats stretch a six-month syllabus across nine or ten months,
            which changes your cost per month substantially.
          </p>
        </Section>

        {/* SECTION 7 */}
        <Section id="duration-eligibility">
          <H2>AI Course Duration &amp; Eligibility in India (2026)</H2>
          <H3>How long does an AI course take?</H3>
          <p>
            Stated duration is a marketing figure derived from an assumed weekly commitment that
            most working professionals do not have. The honest way to plan is to pick your real
            weekly hours first, then read across.
          </p>
          <TableBlock
            number="Table 8"
            title="Duration by Program Type and Weekly Commitment"
            headers={table8.headers}
            rows={table8.rows}
          />
          <p>
            Two patterns matter here. Self-paced programmes advertised as three months routinely
            take six to nine, because the advertised figure assumes an unbroken pace and no life
            events — and a large share of enrolees never finish at all. Live cohorts solve that by
            fixing the duration, but they transfer the problem: the schedule is now non-negotiable,
            and missing three weeks in a live programme is far more damaging than missing three
            weeks in a recorded one. Choose the format that matches your actual constraint —
            discipline or calendar.
          </p>

          <H3>Who is eligible for an AI course in India?</H3>
          <TableBlock
            number="Table 9"
            title="Eligibility Requirements by Program"
            headers={table9.headers}
            rows={table9.rows}
            highlightMatch="LogicMojo"
          />

          <H3>Can I do an AI course after 12th?</H3>
          <p>
            Yes, but the sensible options are narrower than the advertising suggests. Two routes
            work. The first is a degree: the IIT Madras BS in Data Science admits 12th-pass learners
            through a qualifier and charges per term, so you can test the water at a fraction of the
            total. The second is a skill path: spend ₹0–₹10,000 on Python, SQL and statistics for
            three to six months, build two small projects, and only then consider a paid structured
            programme.
          </p>
          <p>
            What does not make sense at this stage is a ₹1,50,000 job-oriented programme on a
            36-month EMI. Entry-level AI hiring generally expects a degree in progress or completed,
            so the fee buys capability you cannot yet convert into a role, while the instalments
            start immediately.
          </p>

          <H3>Can a non-IT graduate or non-programmer join an AI course?</H3>
          <p>
            Yes. Mechanical and civil engineers, commerce graduates, teachers, bankers and lawyers
            are a large share of every cohort I have looked at. The programmes that work for this
            group publish a prerequisite or bridge module — typically four to eight weeks of Python,
            SQL and mathematics intuition before the core syllabus — and Table 9 marks which ones
            do.
          </p>
          <p>
            Budget honestly for the extra time: one to two additional months of effort at 8–10 hours
            a week. Your fee does not change, but your cost per month effectively rises, and more
            importantly the risk of stalling in month two rises with it. If a programme in this fee
            band does not offer onboarding and you cannot yet write a loop unaided, buy the
            foundation elsewhere first — it is cheaper than restarting.
          </p>

          <H3>Do I need a CS degree or advanced maths?</H3>
          <p>
            For AI engineering, no. What you need is intuition: enough linear algebra to know what a
            matrix multiplication is doing, enough probability and statistics to choose a metric and
            distrust a suspiciously good result, and enough calculus to understand why a learning
            rate matters. That is a few weeks of focused work, not a degree.
          </p>
          <p>
            For AI research — publishing, designing architectures, working on optimisation theory —
            rigorous mathematics genuinely is the entry bar, and no six-month programme at any price
            substitutes for it. The distinction matters commercially, because most Indian AI hiring
            in 2026 is for engineering roles that ship systems, not research roles that produce
            papers. Buy for the job that exists in volume.
          </p>
        </Section>

        {/* SECTION 8 */}
        <Section id="detailed-comparison">
          <H2>Detailed AI Course Comparison — Fees, Duration, Eligibility, Curriculum &amp; Career Value</H2>
          <p>
            Seventeen programmes below, in the same structure, ordered by fee band ascending. This
            is not a ranking: nothing about a programme&apos;s position implies quality, and the
            best purchase depends entirely on which of content, structure, feedback, credential and
            career support you need to buy. Where a fee is not published, the entry says so.
          </p>
          {programs.map((p) => (
            <ProgramCard key={p.name} p={p} />
          ))}

          <TableBlock
            number="Table 10"
            title="Curriculum Scope vs. Fee Heatmap"
            note="Vocabulary: Deep / Good / Partial / Not covered / [VERIFY]."
            headers={table10.headers}
            rows={table10.rows}
            highlightMatch="LogicMojo"
            caption="Read down the RAG, fine-tuning and agents columns: newest-stack coverage tracks how recently a syllabus was rebuilt, not how much it costs."
          />
        </Section>

        {/* SECTION 9 */}
        <Section id="logicmojo">
          <H2>LogicMojo AI &amp; ML Course — Fee, Duration, Eligibility &amp; Career Value</H2>
          <p>
            LogicMojo&apos;s AI &amp; ML Course sits in the ₹40,000–₹1,20,000 specialist band, at
            ₹87,000. That band is designed around a specific proposition: put the money into live
            teaching, mentorship, projects and interview preparation, and leave out the university
            licensing premium. For a working professional or career switcher whose goal is
            demonstrable AI engineering capability rather than a university line on a CV, that is
            usually where cost per capability is lowest.
          </p>
          <p>
            Everything in this section is drawn from LogicMojo&apos;s own course page and is marked
            [VERIFY] where you should confirm the current detail directly, since fees, batch
            schedules and module lists change. As the disclosure at the top of this page states,
            LogicMojo publishes this guide.
          </p>

          <H3>Fee, offer and payment options</H3>
          <TableBlock
            number="Table 11"
            title="LogicMojo AI & ML Course: Fee Snapshot"
            headers={table11.headers}
            rows={table11.rows}
          />
          <p>
            The offer as published: a <strong>15% discount for the first 15 enrolments</strong>,
            which brings the fee from <strong>₹87,000 to ₹73,950</strong>. That is the whole
            condition — first fifteen seats in the batch — and it is worth applying the same
            scrutiny here that this page recommends everywhere else: ask for the discounted total in
            writing, ask whether tax is inclusive or additional, and ask what the EMI total comes to
            if you choose instalments rather than paying upfront.
          </p>

          <H3>Duration, format and weekly commitment</H3>
          <p>
            Duration [VERIFY: months], batch timings [VERIFY: evening/weekend, IST], and expected
            weekly hours [VERIFY]. The format is a live online cohort with recordings, which is
            built for a specific constraint: professionals and switchers who need fixed structure
            and accountability but cannot take a career break. Live sessions in Indian evening or
            weekend slots mean you keep your salary while you learn — which, in total-cost terms,
            is worth more than most fee discounts.
          </p>

          <H3>Eligibility</H3>
          <p>
            [VERIFY against the course page]: graduation, basic programming aptitude, and
            prerequisite onboarding covering Python and mathematics intuition for learners who need
            it. In practice the programme is built for four groups: working professionals moving
            into AI roles from adjacent engineering work; career switchers from non-tech backgrounds
            who need the prerequisite support to be part of the programme rather than something they
            arrange alone; students and freshers building a portfolio before their first AI
            interview; and self-taught learners who have covered scattered topics and need a correct
            sequence with someone to check their work.
          </p>

          <H3>What the fee includes — curriculum and practical learning</H3>
          <p>
            Read the curriculum as a chain of capabilities rather than a module list [VERIFY module
            list against the course page]:
          </p>
          <ul>
            <li>
              <strong>Programming and data foundations</strong> — Python, data handling with NumPy
              and pandas, SQL, and the engineering habits that make later work reproducible.
            </li>
            <li>
              <strong>Mathematics for AI, intuition-first</strong> — linear algebra, probability,
              statistics and gradients taught for decision-making, not for proofs.
            </li>
            <li>
              <strong>Core machine learning with evaluation rigour</strong> — regression,
              classification, trees and ensembles, plus the part most courses skip: choosing
              metrics, handling class imbalance, and knowing when a good score is a leak.
            </li>
            <li>
              <strong>Deep learning with PyTorch</strong> — networks, training dynamics,
              regularisation, and debugging models that will not converge.
            </li>
            <li>
              <strong>NLP and computer vision</strong> — text representation and transformers;
              convolutional models, detection and segmentation.
            </li>
            <li>
              <strong>Generative AI and LLMs</strong> — how large language models behave, prompting
              as engineering, structured outputs, cost and latency.
            </li>
            <li>
              <strong>Embeddings, vector databases and RAG</strong> —{" "}
              <strong>retrieval-augmented generation</strong>: grounding a model&apos;s answers in
              your own documents, which is the single most requested skill in Indian enterprise AI
              work in 2026.
            </li>
            <li>
              <strong>Fine-tuning</strong> — when to fine-tune instead of prompting, and
              parameter-efficient methods such as LoRA.
            </li>
            <li>
              <strong>AI agents and frameworks</strong> — tool calling and orchestration with
              LangChain and LangGraph; <strong>agentic AI</strong> means systems that plan and act
              across multiple steps rather than answering once.
            </li>
            <li>
              <strong>LLM evaluation and responsible AI</strong> — measuring quality, reducing
              hallucination, guardrails, bias and privacy considerations.
            </li>
            <li>
              <strong>MLOps and deployment</strong> — <strong>MLOps</strong> is the practice of
              shipping and maintaining models in production, and <strong>LLMOps</strong> is its
              generative-AI counterpart: packaging with Docker, serving with FastAPI, tracking with
              MLflow, and monitoring what happens after release.
            </li>
            <li>
              <strong>AI system design and interview preparation</strong> — designing a retrieval
              system or a serving pipeline out loud, which is what senior interviews actually test.
            </li>
            <li>
              <strong>Capstone</strong> — one end-to-end system you can defend line by line.
            </li>
          </ul>
          <p>
            Tools across the programme [VERIFY]: Python, NumPy, pandas, scikit-learn, PyTorch,
            Hugging Face, LLM APIs, LangChain and LangGraph, vector databases, MLflow, FastAPI,
            Docker and Git.
          </p>

          <H3>Projects and portfolio</H3>
          <p>
            Projects progress from guided to independent and end in a capstone [VERIFY count and
            list]. This matters more to the value of the fee than any other inclusion, and for a
            blunt reason: a certificate gets you past a form, but a defensible public repository is
            what converts a course into interviews. When a hiring manager asks why you chose that
            metric, what your baseline was, and what broke in production, the answer has to come
            from work you actually did — and building that under review is precisely what you cannot
            get from free content.
          </p>

          <H3>Interview preparation and job assistance — what it means, specifically</H3>
          <p>
            LogicMojo&apos;s stated career support includes technical interview preparation,
            project-defence practice, resume and portfolio review, mock interviews, and job
            assistance including referrals [VERIFY each item against the course page].
          </p>
          <p>
            State plainly what this is not: it is not a guaranteed-placement programme, and it does
            not promise a job or a salary. That distinction is the most important sentence in this
            section. Job assistance means the programme works on your candidacy and opens doors it
            has; converting an interview remains your work. On outcomes, this page deliberately
            quotes no placement percentages or salary figures for any provider, including LogicMojo,
            because a statistic without a denominator and a date is not evidence.
          </p>

          <H3>Career value — who this fee makes sense for</H3>
          <TableBlock
            number="Table 12"
            title="Is ₹87,000 (or ₹73,950) the right spend for you?"
            headers={table12.headers}
            rows={table12.rows}
          />
          <p>
            Read the lower rows as routing, not rejection. A student with ₹20,000 is not unsuited to
            AI; they are better served by spending less now and more later. A learner who needs an
            IIT or university credential for an internal promotion should compare against the PG
            band, because that specific need is what those fees exist to meet. And if you cannot
            attend live sessions at all, ask about batch options before assuming the format will not
            work — but do not buy a live programme intending to watch recordings, because the
            mentorship you paid for happens in the room.
          </p>
          <div className="mt-6">
            <a
              href="https://logicmojo.com"
              className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-panel transition-colors hover:bg-primary/90"
            >
              Explore the LogicMojo AI &amp; ML Course — Fee, Batch Schedule, Curriculum &amp;
              Projects →
            </a>
          </div>
        </Section>

        {/* SECTION 10 */}
        <Section id="inclusions">
          <H2>What Is Included in AI Course Fees? (And What Isn&apos;t)</H2>
          <p>
            Two programmes at the same price can include entirely different things. This is the
            checklist I use to work out what a fee actually covers before comparing any numbers.
          </p>
          <TableBlock
            number="Table 13"
            title="Fee Inclusions Checklist Across Program Types"
            note="Usually / Sometimes / Rarely / No. LogicMojo column marked [VERIFY] against the course page."
            headers={table13.headers}
            rows={table13.rows}
            highlightMatch="Live classes"
          />

          <H3>Hidden costs to budget for</H3>
          <ul>
            <li>
              <strong>Tax.</strong> Some providers quote fees inclusive of tax and others add it at
              checkout; the rate commonly applied to such services is 18% [VERIFY current rate and
              applicability]. On a ₹2,00,000 fee that is a ₹36,000 difference in what you owe.
            </li>
            <li>
              <strong>EMI interest and processing fees.</strong> Interest across a 24-month tenure
              plus a one-time processing fee can add several tens of thousands of rupees to a
              premium programme.
            </li>
            <li>
              <strong>Exam and certification fees.</strong> Vendor certifications charge separately
              for the proctored exam, NPTEL charges for the certificate exam, and some university
              programmes charge examination or convocation fees [VERIFY per programme].
            </li>
            <li>
              <strong>Cloud and API credits.</strong> Generative AI projects consume tokens and GPU
              time. Expect ₹X,XXX–₹XX,XXX across a programme unless credits are included
              [VERIFY / ILLUSTRATIVE], and ask explicitly who pays.
            </li>
            <li>
              <strong>Campus immersion travel.</strong> Executive and some PG programmes include
              campus modules but rarely the flights, hotel or leave you spend attending them.
            </li>
            <li>
              <strong>Hardware.</strong> Deep-learning work on an ageing laptop is miserable.
              Budget for a machine that can run your tooling, or for cloud time instead.
            </li>
            <li>
              <strong>Add-on placement tiers.</strong> Some providers sell career services as a
              separate upgrade. Confirm whether the career support you were shown is in the fee you
              were quoted.
            </li>
            <li>
              <strong>Late fees, re-enrolment and repeat-module charges.</strong> If you miss a
              cohort and rejoin later, ask what that costs before you need to know.
            </li>
          </ul>

          <H3>What a certificate actually costs — and what it&apos;s worth</H3>
          <p>
            The certificate is usually the cheapest component of any fee. In provider programmes it
            is included; NPTEL and MOOC certificates cost roughly ₹1,000–₹4,000 [VERIFY]; vendor
            certifications cost an exam fee. Nothing about the printing is expensive — what costs
            money is the name on it, which is the licensing arrangement discussed earlier.
          </p>
          <p>
            Its value is real but narrow. Credentials work in HR filters, internal promotion cases,
            employer reimbursement approvals and any process where a non-technical reviewer needs a
            proxy for capability. They do very little in a technical interview, where you will be
            asked to explain your own decisions and will be caught immediately if you cannot. Decide
            which of those two rooms is standing between you and the job you want, and buy for that
            room.
          </p>
        </Section>

        {/* SECTION 11 */}
        <Section id="career-scope">
          <H2>AI Career Scope &amp; Salary in India After an AI Course (2026)</H2>
          <Callout label="Read the salary table with caution">
            Compensation varies enormously by city, company type (product, services, GCC, startup),
            prior experience and negotiation. The ranges below are indicative and must be verified
            against current published salary surveys or job-portal aggregates [VERIFY: source and
            date]. No course determines a salary, and any provider tying a fee to a specific figure
            is selling, not informing. <strong>LPA</strong> means lakhs per annum, the standard way
            Indian salaries are quoted.
          </Callout>
          <TableBlock
            number="Table 14"
            title="AI Roles, Skills, Entry Bar & Indicative Salary (₹ LPA)"
            note="Every salary cell requires a cited source before publication."
            headers={table14.headers}
            rows={table14.rows}
          />

          <H3>Where AI hiring is happening in India in 2026</H3>
          <p>
            Demand concentrates in five places. Global capability centres in Bengaluru, Hyderabad,
            Pune, the NCR and Chennai hire in the largest volumes and increasingly own end-to-end AI
            delivery rather than support work. Product companies hire smaller numbers at a higher
            bar. IT-services AI practices hire broadly and reskill internally, which is why
            recognised credentials matter more in that channel. AI-native startups hire generalists
            who can ship. And enterprise adoption in BFSI, healthcare, retail and manufacturing
            creates a steady stream of applied roles — document intelligence, forecasting, fraud,
            recommendation, internal assistants — often in the customer&apos;s own city. Public
            initiatives including the IndiaAI Mission are shaping compute and skilling capacity as
            well [VERIFY with current official sources].
          </p>
          <p>
            The honest counterpoint: entry-level AI hiring is competitive, and there are more
            certificate-holders than open junior roles. Portfolios outweigh certificates at the
            screening stage far more than course marketing implies. Job titles are also
            inconsistent — the same work is advertised as data scientist at one company and AI
            engineer at another — so read the responsibilities, not the label, before you conclude a
            programme prepares you for a role.
          </p>

          <H3>Which fee band maps to which career outcome?</H3>
          <TableBlock
            number="Table 15"
            title="Fee Band → Realistic Career Outcome"
            headers={table15.headers}
            rows={table15.rows}
            highlightMatch="₹40,000–₹1,20,000"
          />

          <H3>What interviewers actually test</H3>
          <p>
            Judge any programme, at any fee, by whether it prepares you to answer these out loud:
          </p>
          <ol>
            <li>Why did you choose that evaluation metric, and what would have made it the wrong one?</li>
            <li>Your classes are 98:2 imbalanced. What do you do, and what does accuracy tell you now?</li>
            <li>Explain attention to me as if I know linear algebra but not transformers.</li>
            <li>Design a retrieval-augmented system over 200,000 internal PDFs. Where does it break?</li>
            <li>How would you chunk and embed those documents, and how would you know the chunking was wrong?</li>
            <li>Your model hallucinates on 8% of answers. Give me three interventions, ranked by cost.</li>
            <li>How do you evaluate a generative system when there is no single correct answer?</li>
            <li>Serve this model at 2,000 requests per second. What changes about your design?</li>
            <li>Training loss falls, validation loss rises. Walk me through your diagnosis.</li>
            <li>When would you fine-tune rather than prompt, and what would you need to justify it?</li>
            <li>Something went wrong in your project. What was it, and what did you change?</li>
            <li>What is in your monitoring dashboard after deployment, and what triggers a rollback?</li>
          </ol>
          <p>
            Notice how few of these are answerable from watching video. They require having built
            something, having been wrong, and having had someone tell you so — which is a precise
            description of what the feedback component of a fee buys.
          </p>
        </Section>

        {/* SECTION 12 */}
        <Section id="roi">
          <H2>ROI &amp; Value for Money — Is an AI Course Worth the Fee in India?</H2>
          <p>The only formula worth using accounts for probability, not just price:</p>
          <Note>
            ROI = (realistic salary delta over 24 months × probability of achieving it) − (fee + tax
            + EMI interest + hidden costs + opportunity cost of your hours)
          </Note>
          <p>
            Most course marketing quotes the first bracket and ignores the multiplier. The
            multiplier is where outcomes actually live, and it is mostly determined by whether you
            finish.
          </p>

          <H3>Four worked scenarios</H3>
          <p>All figures below are [ILLUSTRATIVE — not a prediction].</p>
          <p>
            <strong>Scenario A — software engineer, 4 years&apos; experience, ₹87,000 specialist
            programme.</strong> Using LogicMojo&apos;s published fee as the example: ₹87,000, or
            ₹73,950 at the offer price. Assume completion, a capstone plus two independent projects
            in a public repository, and three months of applications afterwards. At a ₹1,50,000
            annual increase, the fee is recovered in roughly seven months of the delta; at
            ₹3,00,000, in about three and a half months; at the offer price, faster still. What
            drives this outcome is not the certificate — it is finishing, the portfolio, and the
            application effort. Change any of those and the maths changes completely.
          </p>
          <p>
            <strong>Scenario B — non-tech career switcher, ₹2,00,000 university PG programme.</strong>{" "}
            Add tax and 24-month EMI interest and the real outlay approaches ₹2,40,000. The
            credential genuinely helps in HR screening and internal cases, which matters if you are
            switching inside a large employer. But the path is longer than marketing suggests: 12 to
            18 months of study, then a hiring process where you compete against people with
            engineering backgrounds. Payback is slower and variance is much higher. This is a
            defensible purchase if the credential is the thing you need; it is an expensive one if
            you assumed it would also be the deepest technical training available.
          </p>
          <p>
            <strong>Scenario C — student, ₹15,000 programme plus the free stack.</strong> Lowest
            cost, lowest risk, and genuinely sufficient to reach interview-worthy foundations if you
            are disciplined. The realistic caveat: reaching hiring-grade capability from here
            usually requires either a second investment later or several hundred hours of
            self-directed work with no one reviewing your code. Many students do exactly that
            successfully. Many others stall at the point where a mentor would have unblocked them in
            ten minutes.
          </p>
          <p>
            <strong>Scenario D — ₹2,50,000 programme abandoned in month three.</strong> The
            instalments continue for twenty-one more months. The refund window has closed. There is
            no portfolio, no credential and no capability gain that survives the year. ROI is
            strongly negative and no amount of curriculum quality would have changed it. I include
            this scenario because it is not an edge case — it is the most common bad outcome in this
            market, and it is a scheduling and honesty problem, not a shopping problem. Before you
            sign, look at your next six months and ask whether ten hours a week actually exist.
          </p>

          <TableBlock
            number="Table 16"
            title="Value-for-Money Comparison"
            note="Reads are situational, not scores. No ranking is implied."
            headers={table16.headers}
            rows={table16.rows}
            highlightMatch="LogicMojo"
          />

          <H3>Budget vs. premium — what the extra ₹1–2L actually buys</H3>
          <p>
            What reliably changes as you move from ₹80,000 to ₹2,50,000: the credential and who
            issues it; placement operations and the interview volume they generate; brand
            recognition in HR and reimbursement processes; the alumni network; and cohort
            selectivity, which changes who you learn beside. Those are real assets and for many
            buyers they justify the difference.
          </p>
          <p>
            What usually does not change in proportion: curriculum currency, total hours of
            instruction, and project count. Specialist programmes in the ₹40,000–₹1,20,000 band
            frequently match or exceed premium programmes on the newest parts of the stack —
            retrieval, fine-tuning, agents, deployment — precisely because they carry no
            multi-party approval process for syllabus changes, while omitting the credential
            entirely. Both are legitimate purchases. The only mistake is not knowing which one you
            are making.
          </p>

          <H3>Short-term vs. long-term programs — cost per month vs. cost per outcome</H3>
          <p>
            A three-month programme is the rational spend when you have foundations and a targeted
            gap: you can already build models and you need retrieval systems, or you have the
            engineering and need the mathematics. Cost per month is high, total cost is low, and you
            convert quickly.
          </p>
          <p>
            A six-to-nine-month programme is the rational spend for a career switch, because that is
            roughly the time it takes to go from Python to a defensible portfolio with someone
            checking your work. Twelve-to-eighteen-month programmes should be judged on cost per
            capability and on whether you will still be attending in month eleven — the extra months
            usually buy breadth and a credential rather than depth, and completion risk rises with
            every additional month you commit to.
          </p>
          <Note>
            The course fee is roughly 40% of your outcome. Completion, the portfolio you build, and
            the three months of applications after are the other 60%.
          </Note>
        </Section>

        {/* SECTION 13 — checklist */}
        <Section id="checklist">
          <H2>Course-Selection Checklist &amp; Decision Guide</H2>
          <p>
            Twelve questions, all of which should be answered in writing before money moves. A
            provider who answers all twelve plainly has earned a shortlist place regardless of price.
          </p>
          <ol className="mt-4 space-y-2">
            {checklist.map((item) => (
              <li key={item} className="rounded-md border border-border bg-card px-4 py-3 text-[0.93rem]">
                {item}
              </li>
            ))}
          </ol>
          <Callout label="If your employer is reimbursing the fee">
            Get the programme name, fee, credential issuer and duration approved in writing first,
            and ask whether reimbursement is conditional on completion or on a service commitment.
            Where the employer pays, the credential band becomes far more attractive, because the
            cost that usually makes it hard to justify is not yours.
          </Callout>
        </Section>

        {/* SECTION 14 — FAQs */}
        <Section id="faqs">
          <H2>AI Course Fees in India — 40 Frequently Asked Questions</H2>
          <p>Grouped by theme. Every unverified figure is marked rather than guessed.</p>
          <Faq groups={faqGroups} />
        </Section>

        {/* SECTION 15 — author */}
        <Section id="author">
          <H2>Author, Reviewers &amp; Methodology</H2>
          <H3>How this guide was built</H3>
          <p>
            Fees were collected from each provider&apos;s public pricing page or published fee sheet
            on {LAST_UPDATED} and recorded with the date of reading. Where a fee is disclosed only
            on a sales call, the entry says so rather than reproducing a figure reported second-hand.
            EMI, refund and deferral terms were read from published policy pages; where a provider
            does not publish them, the cell is marked [VERIFY]. Cost-per-month and cost-per-hour
            figures are computed only from published fees and published hours, and illustrative
            calculations are labelled as such. Salary ranges require a cited public source before
            publication and are marked until that source is attached.
          </p>
          <H3>Author</H3>
          <p>
            <strong>[INSERT: author name]</strong> — [INSERT: role], writing on AI education
            economics and hiring in India. Areas of focus: AI/ML curriculum design, EdTech pricing
            and lending structures, and technical hiring for applied AI roles.{" "}
            <strong>[INSERT: brief credential summary and profile link]</strong>
          </p>
          <H3>Expert reviewers</H3>
          <ul>
            <li>
              <strong>[INSERT: reviewer 1 name, role]</strong> — reviewed curriculum scope and role
              mappings [INSERT: review date].
            </li>
            <li>
              <strong>[INSERT: reviewer 2 name, role]</strong> — reviewed hiring, interview and
              salary sections [INSERT: review date].
            </li>
            <li>
              <strong>[INSERT: reviewer 3 name, role]</strong> — reviewed EMI, tax and refund
              explanations [INSERT: review date].
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Corrections: if a fee or policy on this page is out of date, write to [INSERT: contact
            email] and it will be updated with a revised verification date.
          </p>
        </Section>

        {/* SECTION 16 — final guide */}
        <Section id="final-guide">
          <H2>Final Decision Guide — Which Fee Band Should You Choose?</H2>
          <p>
            Start from the constraint, not the catalogue. Ask which of the five things a fee buys you
            genuinely cannot supply yourself.
          </p>
          <ul>
            <li>
              <strong>You need content only, and you finish what you start.</strong> Spend ₹0.
              NPTEL, fast.ai, Hugging Face and DeepLearning.AI will take you further than most paid
              programmes if you actually complete them.
            </li>
            <li>
              <strong>You need structure but have little money.</strong> ₹5,000–₹40,000. A cohort,
              a sequence and a community, with the finishing still mostly on you.
            </li>
            <li>
              <strong>You need feedback, structure and interview readiness, and you are switching
              careers or levelling up.</strong> ₹40,000–₹1,20,000. This is the best
              capability-per-rupee band in the market in 2026, and the LogicMojo AI &amp; ML Course
              sits here at ₹87,000, or ₹73,950 under the current offer.
            </li>
            <li>
              <strong>You need a credential for HR, a promotion or reimbursement.</strong>{" "}
              ₹1,20,000–₹3,50,000. Buy the name deliberately, and use every live session you are
              entitled to.
            </li>
            <li>
              <strong>Your bottleneck is interview volume, not skill.</strong> ₹2,50,000+ with real
              placement operations — and ask for outcome numbers with a denominator first.
            </li>
            <li>
              <strong>You need AI literacy to lead, not to build.</strong> A short executive or
              literacy programme. Do not buy an engineering track you will not use.
            </li>
          </ul>
          <p>
            Whatever band you choose, protect the 60% that the fee does not cover: block the weekly
            hours in your calendar before you pay, publish your projects as you build them, and plan
            three months of applications after the final class. That is what turns a fee into a
            career change — and it is the one part nobody can sell you.
          </p>
          <div className="mt-8 rounded-lg border border-highlight bg-highlight/15 p-6">
            <h3 className="text-lg font-semibold text-foreground">
              LogicMojo AI &amp; ML Course — ₹87,000 · ₹73,950 for the first 15 enrolments
            </h3>
            <p className="mt-2 text-[0.95rem] text-foreground/90">
              Live online cohort, full-stack AI/ML curriculum from Python through LLMs, RAG, agents
              and MLOps, projects with mentor review, interview preparation and job assistance.
              Confirm the current fee, batch schedule, EMI terms and refund policy on the course
              page before enrolling.
            </p>
            <a
              href="https://logicmojo.com"
              className="mt-4 inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View course fee, curriculum and batch schedule →
            </a>
          </div>
        </Section>
      </div>

      <footer className="mt-16 border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-5 py-10 text-sm text-muted-foreground">
          <p className="font-display text-base font-bold text-foreground">LogicMojo</p>
          <p className="mt-2 max-w-2xl">
            LogicMojo offers the AI &amp; ML Course featured on this page. All other programme
            details are taken from public sources on {LAST_UPDATED} and are marked where a provider
            does not publish them. Fees, offers and policies change — confirm current terms with each
            provider before paying.
          </p>
          <p className="mt-4">© {new Date().getFullYear()} LogicMojo. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
