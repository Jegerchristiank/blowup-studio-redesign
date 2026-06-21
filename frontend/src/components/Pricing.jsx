import { Check, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { pricing, links } from "../lib/data";

export default function Pricing() {
  return (
    <section
      id="priser"
      className="bg-ink py-20 md:py-28 border-t border-line"
      data-testid="pricing"
    >
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <SectionHeader
          index="03"
          label="Priser"
          title="Vælg pakken der passer til sangen."
          sub="Alle sessioner samler coaching, beat, optagelse og teknisk finish i én tydelig proces."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pricing.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.06}
              className={`relative flex flex-col p-6 sm:p-7 rounded-2xl border hover-lift ${
                p.featured
                  ? "border-brand bg-brand/[0.06]"
                  : "border-line bg-surface"
              }`}
              data-testid={`price-card-${i}`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 bg-brand text-ink text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                  Mest værdi
                </span>
              )}
              <span className="overline text-ash">{p.tag}</span>
              <h3 className="font-display font-semibold uppercase text-2xl tracking-tight mt-3">
                {p.title}
              </h3>
              <p className="text-sm text-ash mt-1">{p.duration}</p>
              <div className="font-display font-bold text-5xl text-bone my-5">
                {p.price}
              </div>
              <ul className="space-y-2.5 mb-7 flex-1">
                {p.included.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-bone/90">
                    <Check size={16} className="text-brand shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={links.booking}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-3.5 rounded-full transition-colors ${
                  p.featured
                    ? "bg-brand hover:bg-brandDark text-ink"
                    : "border border-lineStrong hover:border-bone text-bone"
                }`}
                data-testid={`price-book-${i}`}
              >
                Book denne løsning <ArrowUpRight size={15} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
