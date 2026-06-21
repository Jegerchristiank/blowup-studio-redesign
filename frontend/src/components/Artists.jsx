import { useMemo, useState } from "react";
import { Play, Youtube } from "lucide-react";
import Reveal from "./Reveal";
import { videos, links } from "../lib/data";

export default function Artists() {
  const [selected, setSelected] = useState(videos[0].id);
  const current = useMemo(
    () => videos.find((v) => v.id === selected) ?? videos[0],
    [selected]
  );

  return (
    <section
      id="artister"
      className="relative py-24 md:py-32 border-t border-line"
      data-testid="artists"
    >
      <div className="max-w-shell mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal className="overline text-signal mb-4">Mød artisterne</Reveal>
            <Reveal
              as="h2"
              delay={0.05}
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-2xl leading-[0.98]"
            >
              Videoer der viser energien i rummet.
            </Reveal>
          </div>
          <a
            href={links.youtube}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-lineStrong hover:border-bone text-bone font-mono text-xs uppercase tracking-wider px-6 py-3 transition-colors self-start"
            data-testid="artists-youtube-btn"
          >
            <Youtube size={16} /> YouTube
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <Reveal className="lg:col-span-2">
            <div className="relative aspect-video border border-line overflow-hidden bg-black">
              <iframe
                key={current.id}
                title={current.title}
                src={`https://www.youtube.com/embed/${current.id}?rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="mt-4 font-display text-xl">{current.title}</p>
          </Reveal>

          <div className="flex flex-col gap-3 lg:max-h-[520px] lg:overflow-y-auto no-scrollbar pr-1">
            {videos.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelected(v.id)}
                className={`group flex items-center gap-4 border p-3 text-left transition-colors ${
                  v.id === selected
                    ? "border-signal bg-signal/5"
                    : "border-line hover:border-lineStrong"
                }`}
                data-testid={`video-item-${v.id}`}
              >
                <div className="relative h-16 w-28 shrink-0 overflow-hidden">
                  <img src={v.thumb} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={18} className="text-white" />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{v.title}</p>
                  <p className="overline text-ash mt-1">{v.duration}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
