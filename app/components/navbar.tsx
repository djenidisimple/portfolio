"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Projets", href: "#projets", id: "projets" },
  { label: "À propos", href: "#apropos", id: "apropos" },
  { label: "Parcours", href: "#parcours", id: "parcours" },
  { label: "Services", href: "#services", id: "services" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const desktop = window.matchMedia("(min-width:901px)");
    const onBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpointChange);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpointChange);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const ids = ["projets", "apropos", "parcours", "services", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="topbar">
        <div className="wrap tb">
          <a className="brand" href="#top" aria-label="Djenidi, accueil">
            <img className="av" src="/src/avatar.jpg" alt="" width={38} height={38} />
            <span>Djenidi</span>
          </a>
          <nav className="nav-links" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                className="navlink"
                href={link.href}
                aria-current={activeSection === link.id ? "true" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a className="tbcta" href="#contact">
            Me contacter
          </a>
          <button
            className="burger"
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mnav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav id="mnav" className="mnav" aria-label="Menu mobile" hidden={!menuOpen}>
        {NAV_LINKS.map((link) => (
          <a key={link.id} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-d" href="#contact" onClick={() => setMenuOpen(false)}>
          Me contacter
        </a>
      </nav>
    </>
  );
}
