import { useState } from "react";
import { X } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { gallery } from "../lib/data";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-surface py-20 md:py-28 border-t border-line" data-testid="gallery">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <SectionHeader
          index="06"
          label="Studiet"
          title="Et rum bygget til at lave hits i."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {gallery.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 0.06}
              onClick={() => setActive(src)}
              className={`relative overflow-hidden rounded-xl border border-line group cursor-pointer aspect-[4/3] ${
                i === 0 ? "col-span-2 md:row-span-2 md:aspect-auto" : ""
              }`}
              data-testid={`gallery-item-${i}`}
            >
              <img
                src={src}
                alt={`BLOWUP studio ${i + 1}`}
                className="h-full w-full object-cover brightness-[0.9] group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
              />
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
          data-testid="gallery-lightbox"
        >
          <button
            className="absolute top-5 right-5 text-bone hover:text-brand transition-colors"
            onClick={() => setActive(null)}
            data-testid="lightbox-close"
            aria-label="Luk"
          >
            <X size={30} />
          </button>
          <img
            src={active}
            alt=""
            className="max-h-[85vh] max-w-full object-contain rounded-xl border border-line"
          />
        </div>
      )}
    </section>
  );
}
