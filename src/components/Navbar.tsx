"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-9 py-5 border-b border-off3 transition-all duration-200 ${
        scrolled ? "bg-off/95 backdrop-blur-sm" : "bg-off"
      }`}
    >
      <div className="font-clash font-bold text-[17px] tracking-tight text-ink">
        Lunyx
        <sup className="text-[9px] tracking-widest text-muted font-cabinet font-normal uppercase align-super ml-0.5">
          DEV
        </sup>
      </div>

      <div className="flex items-center gap-7">
        <button
          onClick={() => scrollTo("projet")}
          className="text-[12px] tracking-widest uppercase text-muted hover:text-ink transition-colors"
        >
          Projet
        </button>
        <button
          onClick={() => scrollTo("competences")}
          className="text-[12px] tracking-widest uppercase text-muted hover:text-ink transition-colors"
        >
          Compétences
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="text-[12px] tracking-widest uppercase text-muted hover:text-ink transition-colors"
        >
          Contact
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="text-[11px] px-4 py-2 bg-lime text-ink rounded-full font-bold tracking-wide hover:bg-lime2 transition-colors"
        >
          Disponible →
        </button>
      </div>
    </nav>
  );
}
