import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { links, nav, asset } from "../lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    if (window.lenis) window.lenis.scrollTo(href, { offset: -72 });
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass border-b border-line" : "py-5 bg-transparent"
      }`}
      data-testid="site-header"
    >
      <div className="max-w-shell mx-auto px-5 md:px-10 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          className="flex items-center gap-3"
          data-testid="brand-link"
        >
          <img src={asset("blowup-icon.svg")} alt="BLOWUP" className="h-8 w-8" />
          <span className="font-display text-lg tracking-tight">
            BLOWUP <span className="text-ash">studio</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => go(e, item.href)}
              className="overline text-ash hover:text-bone transition-colors"
              data-testid={`nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={links.booking}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-signal hover:bg-signalDeep text-white font-mono text-xs uppercase tracking-wider px-5 py-2.5 transition-colors"
            data-testid="header-book-btn"
          >
            Book session <ArrowUpRight size={15} />
          </a>
          <button
            className="lg:hidden text-bone"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            data-testid="mobile-menu-toggle"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-line mt-3" data-testid="mobile-menu">
          <div className="px-5 py-4 flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => go(e, item.href)}
                className="py-3 font-display text-2xl border-b border-line/60"
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.booking}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex justify-center items-center gap-2 bg-signal text-white font-mono text-xs uppercase tracking-wider px-5 py-3"
            >
              Book session <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
