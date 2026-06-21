import { Radio } from "lucide-react";
import Reveal from "./Reveal";
import { links, releaseHighlights } from "../lib/data";

export default function Releases() {
  return (
    <section
      id="udgivelser"
      className="relative py-24 md:py-32 border-t border-line"
      data-testid="releases"
    >
      <div className="max-w-shell mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="overline text-signal mb-4">Udgivelser</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.98]">
            Lyt til artisterne, ikke bare ordene.
          </h2>
          <p className="mt-6 text-ash text-lg max-w-xl leading-relaxed">
            Playlisten samler udgivelser fra blandt andre han$en, Micass, RX,
            HYPD, MIBE, Nikz og $ly. Her ligger beviset på, hvordan studiet lyder
            — uden filter.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {releaseHighlights.map((r) => (
              <span
                key={r}
                className="border border-line px-4 py-2 text-sm text-bone/80 hover:border-lineStrong transition-colors"
              >
                {r}
              </span>
            ))}
          </div>
          <a
            href={links.spotifyOpen}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-lineStrong hover:border-bone text-bone font-mono text-xs uppercase tracking-wider px-6 py-3 transition-colors"
            data-testid="releases-spotify-btn"
          >
            <Radio size={16} /> Åbn playlist
          </a>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-6 bg-signal/20 blur-3xl rounded-full opacity-40" />
            <div className="relative border border-line bg-surface p-2 rounded-2xl overflow-hidden">
              <iframe
                title="BLOWUP studio playlist"
                src={links.spotifyEmbed}
                width="100%"
                height="480"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
