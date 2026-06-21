import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { sessionFlow } from "../lib/data";

export default function Process() {
  return (
    <section
      id="proces"
      className="bg-surface py-20 md:py-28 border-t border-line"
      data-testid="process"
    >
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <SectionHeader
          index="02"
          label="Proces"
          title="Færre løse idéer. Mere færdig sang."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sessionFlow.map((s, i) => (
            <Reveal
              key={s.no}
              delay={i * 0.08}
              className="group relative border border-line bg-ink rounded-2xl p-6 sm:p-7 min-h-[220px] flex flex-col justify-between hover-lift"
              data-testid={`process-step-${s.no}`}
            >
              <span className="font-display font-bold text-5xl text-brand/30 group-hover:text-brand transition-colors leading-none">
                {s.no}
              </span>
              <div>
                <h3 className="font-display font-semibold uppercase text-2xl tracking-tight mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-ash leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
