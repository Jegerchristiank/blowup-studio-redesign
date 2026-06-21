import { Check, Clock, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { pricing, links } from "../lib/data";

export default function Pricing() {
  return (
    <section
      id="priser"
      className="relative py-24 md:py-32 border-t border-line"
      data-testid="pricing"
    >
      <div className="max-w-shell mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal className="overline text-signal mb-4">Priser</Reveal>
            <Reveal
              as="h2"
              delay={0.05}
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-2xl leading-[0.98]"
            >
              Vælg pakken der passer til sangen.
            </Reveal>
            <Reveal delay={0.1} className="mt-5 text-ash max-w-xl">
              Alle sessioner samler coaching, beat, optagelse og teknisk finish i
              én tydelig proces.
            </Reveal>
          </div>
          <a
            href={links.booking}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-signal hover:bg-signalDeep text-white font-mono text-xs uppercase tracking-wider px-6 py-3 transition-colors self-start"
            data-testid="pricing-book-btn"
          >
            Book tid <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pricing.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.06}
              className={`relative flex flex-col p-8 border hover-lift ${
                p.featured
                  ? "border-signal bg-gradient-to-b from-signal/10 to-transparent lg:-translate-y-3"
                  : "border-line bg-surface"
              }`}
              data-testid={`price-card-${i}`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`overline ${p.featured ? "text-signal" : "text-ash"}`}>
                  {p.tag}
                </span>
                <Clock size={16} className="text-ash" />
              </div>
              <h3 className="font-display text-2xl">{p.title}</h3>
              <p className="text-sm text-ash mt-1">{p.duration}</p>
              <div className="font-display text-4xl my-6">{p.price}</div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.included.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-bone/90">
                    <Check size={16} className="text-signal shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={links.booking}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider px-5 py-3.5 transition-colors ${
                  p.featured
                    ? "bg-signal hover:bg-signalDeep text-white"
                    : "border border-lineStrong hover:border-bone text-bone"
                }`}
                data-testid={`price-book-${i}`}
              >
                Book denne løsning <ArrowUpRight size={14} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
