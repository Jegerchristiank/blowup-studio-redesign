import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { links, asset, nav } from "../lib/data";

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault();
    if (window.lenis) window.lenis.scrollTo(href, { offset: -70 });
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink border-t border-line" data-testid="footer">
      <div className="max-w-shell mx-auto px-5 md:px-8 py-14 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="sm:col-span-2 md:col-span-1">
          <a
            href="#top"
            onClick={(e) => go(e, "#top")}
            className="flex items-center gap-2.5 mb-4"
          >
            <img src={asset("blowup-icon.svg")} alt="BLOWUP" className="h-8 w-8" />
            <span className="font-display font-bold uppercase text-xl tracking-wide">
              BLOWUP <span className="text-brand">studio</span>
            </span>
          </a>
          <p className="text-ash text-sm max-w-xs leading-relaxed">
            Musikstudie i Hedehusene. Fra idé til release-klar sang — beat, vokal,
            coaching, mix og master.
          </p>
          <a
            href={links.booking}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 bg-brand hover:bg-brandDark text-ink font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
            data-testid="footer-book-btn"
          >
            Book session <ArrowUpRight size={15} />
          </a>
        </div>
        <div>
          <p className="overline text-ash mb-4">Naviger</p>
          <ul className="space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={(e) => go(e, n.href)}
                  className="text-bone/80 hover:text-brand transition-colors"
                  data-testid={`footer-nav-${n.label.toLowerCase()}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="overline text-ash mb-4">Kontakt</p>
          <div className="space-y-2.5 text-sm">
            <a
              href={`mailto:${links.email}`}
              className="flex items-center gap-2 text-bone/80 hover:text-brand transition-colors break-all"
              data-testid="footer-email"
            >
              <Mail size={16} className="text-brand shrink-0" />
              {links.email}
            </a>
            <p className="flex items-center gap-2 text-bone/80">
              <MapPin size={16} className="text-brand shrink-0" />
              {links.address}
            </p>
            <p className="text-ash">CVR: {links.cvr}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="max-w-shell mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ash">
          <span>© {new Date().getFullYear()} BLOWUP studio. Alle rettigheder forbeholdes.</span>
          <span className="font-display uppercase tracking-wide">Hedehusene · DK</span>
        </div>
      </div>
    </footer>
  );
}
