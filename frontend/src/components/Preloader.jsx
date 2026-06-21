import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OVERLAY_EXIT = { y: "-100%" };
const OVERLAY_TRANSITION = { duration: 0.8, ease: [0.76, 0, 0.24, 1] };
const WORD_INITIAL = { opacity: 0, y: 16 };
const WORD_ANIMATE = { opacity: 1, y: 0 };
const DURATION = 1100;

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 200);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center"
          exit={OVERLAY_EXIT}
          transition={OVERLAY_TRANSITION}
          data-testid="preloader"
        >
          <motion.span
            initial={WORD_INITIAL}
            animate={WORD_ANIMATE}
            className="font-display font-bold uppercase text-bone text-6xl sm:text-8xl tracking-tight"
          >
            BLOW<span className="text-brand">UP</span>
          </motion.span>
          <div className="mt-6 w-44 sm:w-60 h-px bg-line relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-brand" style={{ width: `${count}%` }} />
          </div>
          <span className="mt-4 font-display text-ash text-xl tabular-nums">{count}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
