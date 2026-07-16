"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 120);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[34px] py-[22px] font-mono text-[13px] tracking-[0.06em] mix-blend-difference text-white pointer-events-none transition-transform duration-[450ms] ease-in-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } max-md:px-5 max-md:py-4`}
      >
        <a
          href="#top"
          className="w-[34px] h-[34px] border border-white border-[1.5px] rounded-full flex items-center justify-center font-display text-[12px] pointer-events-auto"
        >
          DJ
        </a>

        <div className="hidden md:flex gap-[26px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative opacity-85 hover:opacity-100 transition-opacity duration-200 pointer-events-auto
                after:content-[''] after:absolute after:left-0 after:-bottom-[4px] after:w-0 after:h-px after:bg-current after:transition-all after:duration-[250ms] hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] w-[30px] bg-transparent border-none cursor-pointer pointer-events-auto p-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-blue z-45 flex flex-col items-start justify-center gap-[22px] px-[34px] transition-transform duration-500 ease-[cubic-bezier(.77,0,.18,1)] ${
          menuOpen ? "translate-y-0 pointer-events-auto" : "-translate-y-full pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-[clamp(30px,9vw,52px)] opacity-90 hover:opacity-100"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
