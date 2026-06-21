import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { reviews } from "../lib/data";

export default function Reviews() {
  return (
    <section className="bg-ink py-20 md:py-28 border-t border-line" data-testid="reviews">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <SectionHeader
            index="07"
            label="Anmeldelser"
            title="Det kunderne fremhæver igen og igen."
          />
          <div className="flex items-center gap-2 mb-10 md:mb-14">
            <div className="flex text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="overline text-ash">5.0 · Google</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 0.06}
              className="border border-line bg-surface p-6 sm:p-7 rounded-2xl hover-lift flex flex-col"
              data-testid={`review-${i}`}
            >
              <Quote size={24} className="text-brand mb-4" />
              <p className="text-bone/90 leading-relaxed mb-6 flex-1">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-brand/15 text-brand flex items-center justify-center font-display font-bold text-lg">
                  {r.name.slice(0, 1)}
                </span>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
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
