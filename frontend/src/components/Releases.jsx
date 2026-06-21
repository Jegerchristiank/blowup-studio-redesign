import { Radio } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { links, releaseHighlights } from "../lib/data";

export default function Releases() {
  return (
    <section
      id="udgivelser"
      className="bg-surface py-20 md:py-28 border-t border-line"
      data-testid="releases"
    >
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <SectionHeader
          index="04"
          label="Udgivelser"
          title="Lyt til artisterne, ikke bare ordene."
          sub="Playlisten samler udgivelser fra blandt andre han$en, Micass, RX, HYPD, MIBE, Nikz og $ly — beviset på, hvordan studiet lyder."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Reveal className="rounded-2xl overflow-hidden border border-line">
            <iframe
              title="BLOWUP studio playlist"
              src={links.spotifyEmbed}
              width="100%"
              height="420"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {releaseHighlights.map((r) => (
                <span
                  key={r}
                  className="border border-line bg-ink px-4 py-2 rounded-full text-sm text-bone/85 hover:border-brand hover:text-brand transition-colors"
                >
                  {r}
                </span>
              ))}
            </div>
            <a
              href={links.spotifyOpen}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 bg-brand hover:bg-brandDark text-ink font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
              data-testid="releases-spotify-btn"
            >
              <Radio size={16} /> Åbn på Spotify
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
