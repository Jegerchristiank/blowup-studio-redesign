import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { sessionFlow, links } from "../lib/data";

export default function Process() {
  return (
    <section
      id="proces"
      className="relative py-24 md:py-32 border-t border-line"
      data-testid="process"
    >
      <div className="max-w-shell mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal className="overline text-signal mb-4">Session flow</Reveal>
            <Reveal
              as="h2"
              delay={0.05}
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-2xl leading-[0.98]"
            >
              Færre løse idéer. Mere færdig sang.
            </Reveal>
          </div>
          <a
            href={links.customBeat}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-lineStrong hover:border-bone text-bone font-mono text-xs uppercase tracking-wider px-6 py-3 transition-colors self-start"
            data-testid="process-custom-btn"
          >
            Tal om custom beat <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-line">
          {sessionFlow.map((s, i) => (
            <Reveal
              key={s.no}
              delay={i * 0.08}
              className="group relative border-r border-b border-line p-8 min-h-[260px] flex flex-col justify-between hover:bg-elevated/40 transition-colors"
              data-testid={`process-step-${s.no}`}
            >
              <span className="font-mono text-6xl text-bone/10 group-hover:text-signal/30 transition-colors">
                {s.no}
              </span>
              <div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-ash leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
