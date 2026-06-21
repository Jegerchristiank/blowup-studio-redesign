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
    <section
      className="relative overflow-hidden border-t border-line"
      data-testid="social"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        src={asset("studio-social.mp4")}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/85" />

      <div className="relative max-w-shell mx-auto px-5 md:px-10 py-28 md:py-40">
        <Reveal className="overline text-signal mb-5">Følg med</Reveal>
        <Reveal
          as="h2"
          delay={0.05}
          className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight max-w-3xl leading-[0.95]"
        >
          Se sessions, drops og nye artister hvor de sker.
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 0.07}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass border border-line hover:border-lineStrong p-6 flex items-center justify-between group transition-colors"
                  data-testid={`social-${s.label.toLowerCase()}`}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={22} className="text-signal" />
                    <span className="font-display text-lg">{s.label}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-ash group-hover:text-bone group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
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
