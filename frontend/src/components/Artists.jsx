import { useMemo, useState } from "react";
import { Play, Youtube } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
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
      className="bg-ink py-20 md:py-28 border-t border-line"
      data-testid="artists"
    >
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <SectionHeader
            index="05"
            label="Artister"
            title="Energien i rummet — på video."
          />
          <a
            href={links.youtube}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 border border-lineStrong hover:border-bone text-bone font-medium text-sm px-5 py-3 rounded-full transition-colors mb-10 md:mb-14"
            data-testid="artists-youtube-btn"
          >
            <Youtube size={16} /> YouTube
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <Reveal className="lg:col-span-2">
            <div className="relative aspect-video border border-line rounded-2xl overflow-hidden bg-black">
              <iframe
                key={current.id}
                title={current.title}
                src={`https://www.youtube.com/embed/${current.id}?rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="mt-4 font-display font-semibold uppercase text-xl tracking-tight">
              {current.title}
            </p>
          </Reveal>

          <div className="flex flex-col gap-3 lg:max-h-[480px] lg:overflow-y-auto no-scrollbar pr-1">
            {videos.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelected(v.id)}
                className={`group flex items-center gap-4 border rounded-xl p-3 text-left transition-colors ${
                  v.id === selected
                    ? "border-brand bg-brand/5"
                    : "border-line hover:border-lineStrong"
                }`}
                data-testid={`video-item-${v.id}`}
              >
                <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-lg">
                  <img src={v.thumb} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={16} className="text-white" />
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
