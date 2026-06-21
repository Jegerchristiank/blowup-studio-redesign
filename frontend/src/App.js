import { useEffect } from "react";
import Lenis from "lenis";
import Noise from "./components/Noise";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Studio from "./components/Studio";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Releases from "./components/Releases";
import Artists from "./components/Artists";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    window.lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <div className="bg-ink text-bone min-h-screen relative">
      <Noise />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Studio />
        <Process />
        <Pricing />
        <Releases />
        <Artists />
        <Gallery />
        <Reviews />
        <Contact />
        <Social />
      </main>
      <Footer />
    </div>
  );
}
