import { Mail, MapPin } from "lucide-react";
import { links, asset, nav } from "../lib/data";

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault();
    if (window.lenis) window.lenis.scrollTo(href, { offset: -72 });
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line bg-ink" data-testid="footer">
      <div className="max-w-shell mx-auto px-5 md:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <a
            href="#top"
            onClick={(e) => go(e, "#top")}
            className="flex items-center gap-3 mb-5"
          >
            <img src={asset("blowup-icon.svg")} alt="BLOWUP" className="h-9 w-9" />
            <span className="font-display text-xl">
              BLOWUP <span className="text-ash">studio</span>
            </span>
          </a>
          <p className="text-ash text-sm max-w-xs leading-relaxed">
            Musikstudie i Hedehusene. Fra idé til release-klar sang — beat, vokal,
            coaching, mix og master.
          </p>
        </div>
        <div>
          <p className="overline text-ash mb-5">Naviger</p>
          <ul className="space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={(e) => go(e, n.href)}
                  className="text-bone/80 hover:text-bone transition-colors"
                  data-testid={`footer-nav-${n.label.toLowerCase()}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="overline text-ash mb-5">Kontakt</p>
          <div className="space-y-3 text-sm">
            <a
              href={`mailto:${links.email}`}
              className="flex items-center gap-2 text-bone/80 hover:text-bone transition-colors"
              data-testid="footer-email"
            >
              <Mail size={16} className="text-signal" />
              {links.email}
            </a>
            <p className="flex items-center gap-2 text-bone/80">
              <MapPin size={16} className="text-signal" />
              {links.address}
            </p>
            <p className="text-ash">CVR: {links.cvr}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="max-w-shell mx-auto px-5 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ash">
          <span>
            © {new Date().getFullYear()} BLOWUP studio. Alle rettigheder
            forbeholdes.
          </span>
          <span className="font-mono">Hedehusene · DK</span>
        </div>
      </div>
    </footer>
  );
}
