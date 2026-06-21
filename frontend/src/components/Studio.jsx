import { Mic, Sliders, Music, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { asset, features } from "../lib/data";

const icons = [<Mic size={22} />, <Sliders size={22} />, <Music size={22} />];

export default function Studio() {
  return (
    <section id="studie" className="bg-ink py-20 md:py-28" data-testid="studio">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <SectionHeader
          index="01"
          label="Studie"
          title="Hurtigt fra idé til færdig lyd."
          sub="BLOWUP studio tilbyder professionel hjælp til mix, master, beats og tekster. Uanset om du er ny eller rutineret, bruges pengene på det, der faktisk løfter sangen."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <Reveal className="relative border border-line overflow-hidden group rounded-2xl min-h-[340px]">
            <img
              src={asset("patrick.jpg")}
              alt="Patrick Forslund — producer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-center gap-2 text-sm">
              <BadgeCheck size={18} className="text-brand shrink-0" />
              <span className="text-bone font-medium">
                Patrick Forslund — producer &amp; mix/master-engineer
              </span>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 0.08}
                className="border border-line bg-surface p-6 sm:p-7 rounded-2xl hover-lift flex gap-5 items-start"
              >
                <span className="h-12 w-12 shrink-0 rounded-xl bg-brand/15 text-brand flex items-center justify-center">
                  {icons[i]}
                </span>
                <div>
                  <h3 className="font-display font-semibold uppercase text-2xl tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-sm text-ash leading-relaxed mt-1">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
