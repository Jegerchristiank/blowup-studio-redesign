import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DURATION = 1000; // counter duration (ms)
const ACCEL = [0.5, 0, 0.75, 0]; // ease-in: slow start -> rushes at you

function LoadingLayer({ count }) {
  return (
    <motion.div
      className="absolute inset-0 bg-ink flex flex-col items-center justify-center"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 2.6, filter: "blur(8px)" }}
      transition={{ duration: 0.4, ease: ACCEL }}
    >
      <span className="font-display font-bold uppercase text-bone text-6xl sm:text-8xl tracking-tight">
        BLOW<span className="text-brand">UP</span>
      </span>
      <div className="mt-6 w-44 sm:w-60 h-px bg-line relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-brand" style={{ width: `${count}%` }} />
      </div>
      <span className="mt-4 font-display text-ash text-xl tabular-nums">{count}</span>
    </motion.div>
  );
}

function ZoomThroughW({ onDone }) {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style={{ transformOrigin: "50% 50%" }}
      initial={{ scale: 1, filter: "blur(0px)" }}
      animate={{ scale: 52, filter: "blur(7px)" }}
      transition={{ duration: 0.95, delay: 0.18, ease: ACCEL }}
      onAnimationComplete={onDone}
      aria-hidden="true"
    >
      <defs>
        <mask id="blowup-w-hole">
          <rect width="100" height="100" fill="white" />
          <text
            x="50"
            y="53"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="'Barlow Condensed', sans-serif"
            fontWeight="700"
            fontSize="26"
            fill="black"
          >
            W
          </text>
        </mask>
      </defs>
      <rect width="100" height="100" fill="#0A0A0A" mask="url(#blowup-w-hole)" />
    </motion.svg>
  );
}

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading | zoom | done

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setPhase(reduce ? "done" : "zoom");
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[200] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          data-testid="preloader"
        >
          {phase === "zoom" && <ZoomThroughW onDone={() => setPhase("done")} />}
          <AnimatePresence>
            {phase === "loading" && <LoadingLayer key="loading" count={count} />}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
