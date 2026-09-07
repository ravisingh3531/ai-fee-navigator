import type { ReactNode } from "react";

export function Section({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border pt-10 mt-12 first:mt-0 first:border-0 first:pt-0">
      {children}
    </section>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-foreground">
      {children}
    </h2>
  );
}

export function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className="scroll-mt-24 mt-9 text-lg sm:text-xl font-semibold text-foreground">
      {children}
    </h3>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-6 rounded-r-md border-l-4 border-primary bg-accent/50 px-5 py-4 text-[0.975rem] leading-relaxed text-accent-foreground">
      {children}
    </blockquote>
  );
}

export function Callout({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="my-6 rounded-lg border border-highlight/60 bg-highlight/15 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-highlight-foreground">
        {label}
      </p>
      <div className="mt-2 text-[0.975rem] leading-relaxed text-foreground">{children}</div>
    </div>
  );
}

export function TableBlock({
  number,
  title,
  headers,
  rows,
  highlightMatch,
  caption,
  note,
}: {
  number: string;
  title: string;
  headers: string[];
  rows: string[][];
  highlightMatch?: string;
  caption?: string;
  note?: string;
}) {
  return (
    <figure className="my-8">
      <figcaption className="mb-3">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          {number}
        </span>
        <span className="ml-2 text-sm font-semibold text-foreground">{title}</span>
        {note ? <p className="mt-1 text-xs text-muted-foreground">{note}</p> : null}
      </figcaption>
      <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-panel">
        <table className="w-full border-collapse text-left text-[0.84rem]">
          <thead>
            <tr className="bg-secondary">
              {headers.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="whitespace-nowrap border-b border-border px-3 py-2.5 text-[0.72rem] font-semibold uppercase tracking-wide text-secondary-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const isHighlight =
                !!highlightMatch && row[0]?.toLowerCase().includes(highlightMatch.toLowerCase());
              return (
                <tr
                  key={i}
                  className={
                    isHighlight
                      ? "bg-highlight/20 font-medium"
                      : i % 2
                        ? "bg-muted/40"
                        : undefined
                  }
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="border-b border-border px-3 py-2.5 align-top leading-snug text-foreground/90"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {caption ? (
        <p className="mt-2 text-xs italic text-muted-foreground">{caption}</p>
      ) : null}
    </figure>
  );
}

export function Faq({
  groups,
}: {
  groups: { theme: string; items: { q: string; a: string }[] }[];
}) {
  return (
    <div className="mt-6 space-y-8">
      {groups.map((g) => (
        <div key={g.theme}>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            {g.theme}
          </h3>
          <div className="mt-3 divide-y divide-border rounded-lg border border-border bg-card">
            {g.items.map((it) => (
              <details key={it.q} className="group px-4 py-3">
                <summary className="cursor-pointer list-none text-[0.95rem] font-semibold text-foreground marker:hidden">
                  <span className="mr-2 text-primary">+</span>
                  {it.q}
                </summary>
                <p className="mt-2 pl-5 text-[0.92rem] leading-relaxed text-muted-foreground">
                  {it.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
