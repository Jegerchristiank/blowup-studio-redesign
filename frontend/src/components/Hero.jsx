import { motion } from "framer-motion";
import { ArrowUpRight, Disc3, Music } from "lucide-react";
import { links, asset, stats } from "../lib/data";

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[88vh] sm:min-h-screen flex flex-col justify-end overflow-hidden"
      data-testid="hero"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={asset("studio-hero.mp4")}
        poster={asset("gallery-1.jpg")}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />

      <div className="relative max-w-shell w-full mx-auto px-5 md:px-8 pb-14 sm:pb-20 pt-32">
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex items-center gap-2.5 overline text-brand mb-5"
        >
          <span className="h-2 w-2 rounded-full bg-brand animate-pulseDot" />
          Musikstudie i Hedehusene
        </motion.div>

        <h1 className="font-display font-bold uppercase tracking-tight text-bone text-6xl sm:text-7xl lg:text-8xl leading-[0.9] max-w-4xl">
          <motion.span custom={1} variants={fade} initial="hidden" animate="show" className="block">
            Fra idé til
          </motion.span>
          <motion.span custom={2} variants={fade} initial="hidden" animate="show" className="block text-brand">
            release-klar sang.
          </motion.span>
        </h1>

        <motion.p
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-6 text-ash text-base sm:text-lg max-w-xl leading-relaxed"
        >
          Patrick og teamet hjælper med beat, vokal, coaching, mix og master — så
          projektet føles skarpt fra første take.
        </motion.p>

        <motion.div
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3"
        >
          <a
            href={links.booking}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-brand hover:bg-brandDark text-ink font-semibold text-base px-7 py-4 rounded-full transition-colors"
            data-testid="hero-book-btn"
          >
            Book din session
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href={links.readyBeat}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 border border-lineStrong hover:border-bone text-bone font-medium text-base px-7 py-4 rounded-full transition-colors"
            data-testid="hero-beat-btn"
          >
            <Disc3 size={18} /> Køb færdigt beat
          </a>
          <a
            href={links.customBeat}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 text-ash hover:text-bone font-medium text-base px-5 py-4 transition-colors"
            data-testid="hero-custom-btn"
          >
            <Music size={18} /> Custom beat
          </a>
        </motion.div>

        <motion.div
          custom={5}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-6"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2" data-testid={`hero-stat-${s.label}`}>
              <span className="font-display font-bold text-2xl text-bone">{s.value}</span>
              <span className="overline text-ash">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
