import { Asterisk } from "lucide-react";

const items = ["Mix", "Master", "Beats", "Vokalcoaching", "Topline", "Release-klar"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="bg-brand text-ink overflow-hidden select-none" data-testid="marquee">
      <div className="flex w-max animate-marquee items-center py-3.5">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display font-bold uppercase text-2xl sm:text-3xl px-5">
              {t}
            </span>
            <Asterisk size={18} strokeWidth={2.5} />
          </span>
        ))}
      </div>
    </div>
  );
}
