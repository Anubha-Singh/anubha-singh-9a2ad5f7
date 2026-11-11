import { Link } from "@tanstack/react-router";
import { Page } from "./SiteChrome";
import { SlideDeckViewer } from "@/components/SlideDeckViewer";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <Page>
      <article className="mx-auto max-w-3xl px-6 pt-16">
        <Link to="/" hash="work" className="eyebrow transition-colors hover:text-primary">
          ← Case studies
        </Link>
        <p className="eyebrow mt-8">
          {study.org} · {study.role}
        </p>
        <h1 className="mt-3 text-4xl leading-tight text-ink sm:text-5xl">{study.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{study.summary}</p>
        {study.link && (
          <a
            href={study.link.href}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {study.link.label} ↗
          </a>
        )}

        <dl className="mt-10 grid gap-4 sm:grid-cols-2">
          {study.metrics.map((m) => (
            <div key={m.label} className="rounded border border-border bg-card px-5 py-4">
              <dt className="eyebrow">{m.label}</dt>
              <dd className="mt-1 font-display text-2xl text-primary">{m.value}</dd>
            </div>
          ))}
        </dl>

        {(study.slug === "pos-gap-analysis" || study.slug === "loyalty-program") && (
          <div className="mt-10">
            <SlideDeckViewer defaultDeck={study.slug === "pos-gap-analysis" ? "pos" : "loyalty"} />
          </div>
        )}

        <div className="prose-case mt-4 pb-8">
          {study.blocks.map((b, i) => {
            if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
            if (b.type === "p") return <p key={i}>{b.text}</p>;
            if (b.type === "pre") {
              return (
                <pre
                  key={i}
                  className="my-6 overflow-x-auto rounded border border-border bg-card p-4 font-mono text-xs leading-relaxed text-ink shadow-sm"
                >
                  {b.text}
                </pre>
              );
            }
            if (b.type === "table") {
              return (
                <div key={i} className="my-6 overflow-x-auto rounded border border-border bg-card shadow-sm">
                  <table className="w-full border-collapse text-left text-xs sm:text-sm">
                    <thead className="border-b border-border bg-secondary/60 font-semibold text-ink">
                      <tr>
                        {b.headers.map((h, hi) => (
                          <th key={hi} className="px-4 py-3 whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {b.rows.map((row, ri) => (
                        <tr key={ri} className="transition-colors hover:bg-secondary/30">
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className={`px-4 py-3 leading-relaxed text-muted-foreground ${ci === 0 ? "font-medium text-ink whitespace-nowrap" : ""}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          })}
        </div>
      </article>
    </Page>
  );
}
