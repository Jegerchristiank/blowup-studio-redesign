import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Magnetic from "./Magnetic";
import CountUp from "./CountUp";
import { sessions, sessionIncludes, addonBeat, links } from "../lib/data";

export default function Configurator() {
  const [sel, setSel] = useState(sessions[1].id);
  const [addon, setAddon] = useState(false);
  const current = sessions.find((s) => s.id === sel) ?? sessions[0];
  const total = current.price + (addon ? addonBeat.price : 0);

  return (
    <section id="session" className="bg-surface py-20 md:py-28 border-t border-line" data-testid="configurator">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <SectionHeader index="02" label="Byg din session" title="Sæt din pakke sammen." />

        <div className="grid lg:grid-cols-5 gap-5">
          {/* Options */}
          <div className="lg:col-span-3 space-y-3">
            {sessions.map((s) => {
              const isSel = s.id === sel;
              return (
                <button
                  key={s.id}
                  onClick={() => setSel(s.id)}
                  className={`w-full text-left rounded-2xl border p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors ${
                    isSel ? "border-brand bg-brand/[0.07]" : "border-line bg-ink hover:border-lineStrong"
                  }`}
                  data-testid={`session-option-${s.id}`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSel ? "border-brand" : "border-lineStrong"
                      }`}
                    >
                      {isSel && <span className="h-2.5 w-2.5 rounded-full bg-brand" />}
                    </span>
                    <div>
                      <div className="font-display font-semibold uppercase text-2xl tracking-tight leading-none">
                        {s.label}
                      </div>
                      <div className="overline text-ash mt-1">{s.note}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {s.popular && (
                      <span className="hidden sm:inline-block bg-brand text-ink text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                        Populær
                      </span>
                    )}
                    <span className="font-display font-bold text-2xl text-bone">{s.price.toLocaleString("da-DK")},-</span>
                  </div>
                </button>
              );
            })}

            <button
              onClick={() => setAddon((v) => !v)}
              className={`w-full text-left rounded-2xl border p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors ${
                addon ? "border-brand bg-brand/[0.07]" : "border-line bg-ink hover:border-lineStrong"
              }`}
              data-testid="session-addon"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`h-6 w-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                    addon ? "border-brand bg-brand text-ink" : "border-lineStrong text-transparent"
                  }`}
                >
                  {addon ? <Check size={15} /> : <Plus size={15} className="text-ash" />}
                </span>
                <span className="font-medium text-bone">{addonBeat.label}</span>
              </div>
              <span className="font-display font-bold text-xl text-ash">+{addonBeat.price},-</span>
            </button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-line bg-ink p-6 sm:p-8 lg:sticky lg:top-24">
              <div className="overline text-ash">Din pris</div>
              <div className="font-display font-bold text-7xl sm:text-8xl text-brand leading-none my-3">
                <CountUp value={total} format={(n) => n.toLocaleString("da-DK")} />
                <span className="text-bone text-5xl align-top">,-</span>
              </div>

              <ul className="space-y-2.5 my-6">
                {sessionIncludes.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-bone/90">
                    <Check size={16} className="text-brand shrink-0" /> {f}
                  </li>
                ))}
                <motion.li
                  initial={false}
                  animate={{ opacity: addon ? 1 : 0.3, height: "auto" }}
                  className="flex items-center gap-3 text-sm text-bone/90"
                >
                  <Check size={16} className={addon ? "text-brand" : "text-ash"} /> {addonBeat.label}
                </motion.li>
              </ul>

              <Magnetic className="block">
                <a
                  href={links.booking}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brandDark text-ink font-semibold text-base px-6 py-4 rounded-full transition-colors"
                  data-testid="configurator-book-btn"
                >
                  Book denne session <ArrowUpRight size={18} />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
