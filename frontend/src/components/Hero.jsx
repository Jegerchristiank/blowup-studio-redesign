import { motion } from "framer-motion";
import { ArrowUpRight, Disc3, Music, Star } from "lucide-react";
import { links, asset, stats } from "../lib/data";

const fade = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
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
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-transparent to-transparent" />

      <div className="absolute -bottom-[2vw] right-2 hidden md:block select-none pointer-events-none">
        <span className="font-display font-semibold text-[17vw] leading-none text-stroke">
          BLOWUP
        </span>
      </div>

      <div className="relative max-w-shell w-full mx-auto px-5 md:px-10 pb-16 md:pb-24 pt-32">
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex items-center gap-3 overline text-signal mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-signal animate-pulseDot" />
          Musikstudie i Hedehusene
        </motion.div>

        <h1 className="font-display font-semibold uppercase tracking-tight text-bone text-[15vw] sm:text-7xl lg:text-8xl leading-[0.9] max-w-5xl">
          <motion.span custom={1} variants={fade} initial="hidden" animate="show" className="block">
            Fra idé til
          </motion.span>
          <motion.span custom={2} variants={fade} initial="hidden" animate="show" className="block">
            release-klar <span className="text-signal">sang.</span>
          </motion.span>
        </h1>

        <motion.p
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 text-ash text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          Patrick og teamet hjælper med beat, vokal, coaching, mix og master — så
          projektet føles skarpt fra første take. DK's varmeste studie.
        </motion.p>

        <motion.div
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href={links.booking}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 bg-signal hover:bg-signalDeep text-white font-mono text-sm uppercase tracking-wider px-7 py-4 transition-colors"
            data-testid="hero-book-btn"
          >
            Book din session
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href={links.readyBeat}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-lineStrong hover:border-bone text-bone font-mono text-sm uppercase tracking-wider px-7 py-4 transition-colors"
            data-testid="hero-beat-btn"
          >
            <Disc3 size={18} /> Køb færdigt beat
          </a>
          <a
            href={links.customBeat}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-ash hover:text-bone font-mono text-sm uppercase tracking-wider px-4 py-4 transition-colors"
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
          className="mt-14 flex flex-wrap gap-3"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass border border-line px-5 py-3 flex items-center gap-2"
              data-testid={`hero-stat-${s.label}`}
            >
              <span className="font-display text-xl text-bone">{s.value}</span>
              {s.value === "5.0" && (
                <Star size={13} className="text-signal" fill="currentColor" />
              )}
              <span className="overline text-ash">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
