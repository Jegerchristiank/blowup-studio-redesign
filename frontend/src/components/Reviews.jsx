import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import { reviews } from "../lib/data";

export default function Reviews() {
  return (
    <section
      className="relative py-24 md:py-32 border-t border-line"
      data-testid="reviews"
    >
      <div className="max-w-shell mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal className="overline text-signal mb-4">Anmeldelser</Reveal>
            <Reveal
              as="h2"
              delay={0.05}
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-2xl leading-[0.98]"
            >
              Det kunderne fremhæver igen og igen.
            </Reveal>
          </div>
          <Reveal delay={0.1} className="flex items-center gap-3">
            <div className="flex text-signal">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="overline text-ash">5.0 · Google</span>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 0.06}
              className="border border-line bg-surface p-7 hover-lift flex flex-col"
              data-testid={`review-${i}`}
            >
              <Quote size={26} className="text-signal/60 mb-4" />
              <p className="text-bone/90 leading-relaxed mb-6 flex-1">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-signal/15 text-signal flex items-center justify-center font-display">
                  {r.name.slice(0, 1)}
                </span>
                <div>
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="overline text-ash mt-0.5">Google review</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
