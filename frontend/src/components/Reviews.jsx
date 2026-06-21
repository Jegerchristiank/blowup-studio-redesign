import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { reviews } from "../lib/data";

function Card({ r }) {
  return (
    <article className="w-[290px] sm:w-[360px] shrink-0 border border-line bg-surface rounded-2xl p-6">
      <div className="flex text-brand mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={15} fill="currentColor" />
        ))}
      </div>
      <p className="text-bone/90 leading-relaxed mb-5">"{r.text}"</p>
      <div className="flex items-center gap-3">
        <span className="h-9 w-9 rounded-full bg-brand/15 text-brand flex items-center justify-center font-display font-bold">
          {r.name.slice(0, 1)}
        </span>
        <div>
          <p className="text-sm font-semibold">{r.name}</p>
          <p className="overline text-ash mt-0.5">Google</p>
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  const row = [...reviews, ...reviews];
  return (
    <section className="bg-surface py-20 md:py-28 border-t border-line overflow-hidden" data-testid="reviews">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <SectionHeader index="06" label="Ord" title="Hvad kunderne siger." />
      </div>

      <div className="space-y-4">
        <div className="marquee-pause overflow-hidden">
          <div className="marquee-track flex w-max gap-4 animate-marquee">
            {row.map((r, i) => (
              <Card key={`a-${i}`} r={r} />
            ))}
          </div>
        </div>
        <div className="marquee-pause overflow-hidden">
          <div className="marquee-track flex w-max gap-4 animate-marqueeReverse">
            {row.map((r, i) => (
              <Card key={`b-${i}`} r={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
