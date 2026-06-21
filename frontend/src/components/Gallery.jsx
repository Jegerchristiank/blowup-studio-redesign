import { useState } from "react";
import { X } from "lucide-react";
import Reveal from "./Reveal";
import { gallery } from "../lib/data";

const layout = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "",
  "md:col-span-2",
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section
      className="relative py-24 md:py-32 border-t border-line"
      data-testid="gallery"
    >
      <div className="max-w-shell mx-auto px-5 md:px-10">
        <Reveal className="overline text-signal mb-4">Studiet</Reveal>
        <Reveal
          as="h2"
          delay={0.05}
          className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-12 max-w-2xl leading-[0.98]"
        >
          Et rum bygget til at lave hits i.
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[230px] gap-4">
          {gallery.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 0.06}
              onClick={() => setActive(src)}
              className={`relative overflow-hidden border border-line group cursor-pointer ${layout[i]}`}
              data-testid={`gallery-item-${i}`}
            >
              <img
                src={src}
                alt={`BLOWUP studio ${i + 1}`}
                className="h-full w-full object-cover brightness-[0.85] group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-signal/40 transition-all" />
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-5"
          onClick={() => setActive(null)}
          data-testid="gallery-lightbox"
        >
          <button
            className="absolute top-6 right-6 text-bone hover:text-signal transition-colors"
            onClick={() => setActive(null)}
            data-testid="lightbox-close"
            aria-label="Luk"
          >
            <X size={32} />
          </button>
          <img
            src={active}
            alt=""
            className="max-h-[85vh] max-w-full object-contain border border-line"
          />
        </div>
      )}
    </section>
  );
}
