import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const dur = 1100;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          data-testid="preloader"
        >
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold uppercase text-bone text-6xl sm:text-8xl tracking-tight"
          >
            BLOW<span className="text-brand">UP</span>
          </motion.span>
          <div className="mt-6 w-44 sm:w-60 h-px bg-line relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-brand"
              style={{ width: `${count}%` }}
            />
          </div>
          <span className="mt-4 font-display text-ash text-xl tabular-nums">{count}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
