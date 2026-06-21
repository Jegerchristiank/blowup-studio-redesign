import { BadgeCheck, Mic, Sliders, Music } from "lucide-react";
import Reveal from "./Reveal";
import { asset, features } from "../lib/data";

const icons = [<Mic size={22} />, <Sliders size={22} />, <Music size={22} />];

export default function Studio() {
  return (
    <section id="studie" className="relative py-24 md:py-32" data-testid="studio">
      <div className="max-w-shell mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <Reveal className="overline text-signal mb-5">Hvad tilbyder vi</Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.98] tracking-tight"
          >
            Et studie der får artister hurtigt fra idé til færdig lyd.
          </Reveal>
          <Reveal delay={0.1} className="mt-7 text-ash text-lg max-w-xl leading-relaxed">
            BLOWUP studio tilbyder professionel hjælp til mix, master, beats og
            tekster. Uanset om du er ny eller rutineret, bruges pengene på det,
            der faktisk løfter sangen.
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={0.15 + i * 0.08}
                className="border border-line bg-surface p-6 hover-lift"
              >
                <div className="text-signal mb-4">{icons[i]}</div>
                <h3 className="font-display text-xl mb-2">{f.title}</h3>
                <p className="text-sm text-ash leading-relaxed">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="relative border border-line overflow-hidden group">
            <img
              src={asset("patrick.jpg")}
              alt="Patrick Forslund — producer"
              className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-2 text-sm">
              <BadgeCheck size={18} className="text-signal shrink-0" />
              <span className="text-bone">
                Patrick Forslund — producer &amp; mix/master-engineer
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
