import { Asterisk } from "lucide-react";

const items = [
  "Mix",
  "Master",
  "Beats",
  "Vokalcoaching",
  "Topline",
  "Release-klar lyd",
  "Flow",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      className="relative border-y border-line bg-surface py-5 overflow-hidden"
      data-testid="marquee"
    >
      <div className="flex w-max animate-marquee items-center">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display font-medium uppercase text-2xl md:text-3xl text-bone/90 px-6">
              {t}
            </span>
            <Asterisk size={20} className="text-signal" />
          </span>
        ))}
      </div>
    </div>
  );
}
