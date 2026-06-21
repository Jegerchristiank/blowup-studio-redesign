import { Instagram, Youtube, Music2, MessageCircle, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { links, asset } from "../lib/data";

const socials = [
  { label: "Instagram", href: links.instagram, icon: Instagram },
  { label: "YouTube", href: links.youtube, icon: Youtube },
  { label: "TikTok", href: links.tiktok, icon: Music2 },
  { label: "Discord", href: links.discord, icon: MessageCircle },
];

export default function Social() {
  return (
    <section className="relative overflow-hidden border-t border-line" data-testid="social">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        src={asset("studio-social.mp4")}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/85" />

      <div className="relative max-w-shell mx-auto px-5 md:px-8 py-24 md:py-32">
        <Reveal className="overline text-brand mb-4">Følg med</Reveal>
        <Reveal
          as="h2"
          delay={0.05}
          className="font-display font-bold uppercase text-4xl sm:text-6xl lg:text-7xl tracking-tight max-w-3xl leading-[0.92]"
        >
          Se sessions, drops og nye artister hvor de sker.
        </Reveal>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 0.07}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass border border-line hover:border-brand rounded-2xl p-5 flex items-center justify-between group transition-colors"
                  data-testid={`social-${s.label.toLowerCase()}`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon size={20} className="text-brand" />
                    <span className="font-display font-semibold uppercase text-lg tracking-tight">
                      {s.label}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-ash group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
