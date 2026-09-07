import { useMemo, useState } from "react";
import { IndianRupee, RotateCcw, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const inr = (value: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(value));

type Fields = { fee: string; months: string; current: string; expected: string };
const initial: Fields = { fee: "87000", months: "7", current: "800000", expected: "1200000" };

const fields = [
  { key: "fee", label: "Course fee (₹)", hint: "Total fee you would actually pay, including tax and EMI interest if any." },
  { key: "months", label: "Course duration (months)", hint: "Months from your first class to your final project." },
  { key: "current", label: "Current annual salary (₹)", hint: "Your gross annual pay today. Enter 0 if you are a student." },
  { key: "expected", label: "Target annual salary (₹)", hint: "A figure you have seen in real job posts for the role you want." },
] as const;

export function FeeRoiCalculator() {
  const [values, setValues] = useState<Fields>(initial);

  const result = useMemo(() => {
    const fee = Math.max(0, Number(values.fee) || 0);
    const months = Math.max(1, Number(values.months) || 1);
    const current = Math.max(0, Number(values.current) || 0);
    const expected = Math.max(0, Number(values.expected) || 0);
    const annualGain = expected - current;
    const monthlyGain = annualGain / 12;
    const learningHours = months * 40;
    const timeValue = current > 0 ? (current / (12 * 160)) * learningHours * 0.25 : 0;
    const investment = fee + timeValue;
    const payback = monthlyGain > 0 ? investment / monthlyGain : null;
    const threeYear = annualGain * 3 - investment;
    const ratio = investment > 0 ? (annualGain * 3) / investment : 0;
    return { fee, months, annualGain, monthlyGain, learningHours, timeValue, investment, payback, threeYear, ratio };
  }, [values]);

  return (
    <div className="calc-panel">
      <div className="calc-inputs">
        {fields.map((f) => (
          <div key={f.key} className="calc-field">
            <Label htmlFor={`calc-${f.key}`}>{f.label}</Label>
            <Input
              id={`calc-${f.key}`}
              inputMode="numeric"
              type="number"
              min={0}
              value={values[f.key]}
              onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
            />
            <p>{f.hint}</p>
          </div>
        ))}
        <Button type="button" variant="ghost" className="justify-self-start" onClick={() => setValues(initial)}>
          <RotateCcw aria-hidden="true" /> Reset to example values
        </Button>
      </div>

      <aside className="calc-output" aria-live="polite">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Your estimate</p>
        <p className="mt-1 text-xs font-semibold text-muted-foreground">[ILLUSTRATIVE — your own numbers, not a prediction or a salary promise]</p>

        <dl className="calc-metrics">
          <div>
            <dt>Total investment</dt>
            <dd className="rupee">₹{inr(result.investment)}</dd>
            <p>Fee ₹{inr(result.fee)} + a conservative value for {inr(result.learningHours)} study hours (₹{inr(result.timeValue)}).</p>
          </div>
          <div>
            <dt>Annual salary difference</dt>
            <dd className="rupee">{result.annualGain >= 0 ? "+" : "−"}₹{inr(Math.abs(result.annualGain))}</dd>
            <p>About {result.monthlyGain >= 0 ? "+" : "−"}₹{inr(Math.abs(result.monthlyGain))} a month, if you reach your target figure.</p>
          </div>
          <div>
            <dt>Break-even point</dt>
            <dd>{result.payback ? `${result.payback.toFixed(1)} months` : "Not reached"}</dd>
            <p>{result.payback ? "How long the salary difference takes to repay the investment." : "Set a target above your current salary to see a break-even point."}</p>
          </div>
          <div>
            <dt>Three-year net gain</dt>
            <dd className="rupee">{result.threeYear >= 0 ? "+" : "−"}₹{inr(Math.abs(result.threeYear))}</dd>
            <p>Return multiple over three years: {result.ratio.toFixed(1)}×.</p>
          </div>
        </dl>

        <div className="calc-footnote">
          <TrendingUp aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
          <p>
            This is arithmetic on numbers you entered — nothing here forecasts a hike, an offer or a
            timeline. Divide the result by your honest probability of finishing: a course you abandon
            has no return at any fee. Verify every fee, tax and EMI figure in writing before paying.
          </p>
        </div>
        <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <IndianRupee aria-hidden="true" className="h-3.5 w-3.5" /> All amounts in Indian rupees.
        </p>
      </aside>
    </div>
  );
}
