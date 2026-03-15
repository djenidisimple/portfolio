"use client";

import { useEffect, useState, useRef } from "react";
import Loading from "./loading";
import { Card } from "@/components/Card";

const SECTION_IDS = ["home", "about", "stack", "services", "projects", "contact"] as const;
const HEADER_OFFSET = 100;

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function LogoIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] flex-shrink-0" />
  );
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white active:scale-95 transition-all touch-manipulation min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0"
    >
      {children}
    </a>
  );
}

const REVEAL_SECTION_IDS = ["about", "stack", "services", "projects"] as const;
const REVEAL_DELAY_CLASSES = ["section-reveal-delay-1", "section-reveal-delay-2", "section-reveal-delay-3", "section-reveal-delay-4", "section-reveal-delay-5", "section-reveal-delay-6"] as const;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [year] = useState(new Date().getFullYear());
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [revealedSections, setRevealedSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled((window.scrollY ?? window.pageYOffset) > 20);
      let current = "home";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= HEADER_OFFSET) current = id;
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setRevealedSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { rootMargin: "-60px 0px -80px 0px", threshold: 0.1 }
    );
    REVEAL_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const isLinkActive = (href: string) => activeSection === href.slice(1);

  if (isLoading) return <Loading />;

  const sectionPadding = "py-16 sm:py-20 lg:py-24";
  const containerClass = "max-w-6xl mx-auto px-4 sm:px-6";
  const sectionHeaderClass = "mb-10 sm:mb-12";
  const sectionTitleClass = "text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary)]";
  const sectionDescClass = "text-[var(--color-text)] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed";

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-200 ${
          isScrolled ? "bg-white/95 shadow-sm backdrop-blur-sm border-gray-200" : "bg-white border-gray-100"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2" onClick={closeMenu}>
            <LogoIcon />
            <span className="font-bold text-lg text-[var(--color-primary)]">Djenidi</span>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`w-5 h-0.5 bg-[var(--color-primary)] origin-center transition-all duration-200 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[var(--color-primary)] transition-all duration-200 ${menuOpen ? "opacity-0 scale-0" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-[var(--color-primary)] origin-center transition-all duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
          <ul
            className={`fixed lg:static inset-0 lg:inset-auto top-[57px] lg:top-auto left-0 right-0 bottom-0 lg:bottom-auto ${menuOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 bg-white lg:bg-transparent p-8 lg:p-0 pt-16 lg:pt-0`}
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`block py-2 text-base lg:text-sm font-medium transition-colors ${
                      active
                        ? "border-b-2 border-[var(--color-primary)] text-[var(--color-primary)]"
                        : "border-b-2 border-transparent text-[var(--color-text)] hover:text-[var(--color-primary)] lg:border-transparent"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative min-h-[90vh] sm:min-h-[88vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between overflow-hidden"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-[var(--color-hero-bg)]"
            aria-hidden
          />
          <div
            className="absolute top-0 right-0 w-[80%] sm:w-1/2 h-[60%] bg-gradient-to-bl from-[var(--color-primary)]/5 to-transparent rounded-full blur-3xl pointer-events-none"
            aria-hidden
          />

          <div className={`relative w-full ${containerClass} py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-16`}>
            <div className="flex-1 max-w-xl w-full text-center lg:text-left order-2 lg:order-1">
              <p className="opacity-0 animate-fade-in-up animate-delay-100 text-[var(--color-primary)] font-semibold text-sm sm:text-base tracking-wide uppercase mb-3">
                Hello, I&apos;m
              </p>
              <h1 className="opacity-0 animate-fade-in-up animate-delay-200 text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-primary)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
                Full stack
                <br />
                Developer
              </h1>
              <p className="opacity-0 animate-fade-in-up animate-delay-300 text-[var(--color-text)] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0">
                I design and build modern, fast, and accessible web applications.
                From front-end to back-end, I handle the full stack to deliver products
                that combine performance and great user experience.
              </p>
              <div className="opacity-0 animate-fade-in-up animate-delay-400 flex flex-wrap justify-center lg:justify-start gap-4 mb-10 sm:mb-12">
                <a
                  href="#contact"
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-semibold py-3 px-7 rounded-xl transition-all duration-200 text-sm sm:text-base min-h-[48px] inline-flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/25 hover:shadow-xl hover:shadow-[var(--color-primary)]/30 hover:-translate-y-0.5"
                >
                  Contact me
                </a>
                <a
                  href="#projects"
                  className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold py-3 px-7 rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 text-sm sm:text-base min-h-[48px] inline-flex items-center justify-center hover:-translate-y-0.5"
                >
                  Portfolio
                </a>
              </div>
              <div className="opacity-0 animate-fade-in-up animate-delay-500 flex justify-center lg:justify-start gap-4">
                <SocialIcon href="https://facebook.com">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </SocialIcon>
                <SocialIcon href="https://github.com">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </SocialIcon>
                <SocialIcon href="https://x.com">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </SocialIcon>
              </div>
            </div>
            <div className="hidden lg:flex flex-shrink-0 items-center justify-center order-1 lg:order-2 opacity-0 animate-fade-in animate-delay-400">
              <div
                className="relative w-64 h-64 xl:w-80 xl:h-80 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] shadow-2xl shadow-[var(--color-primary)]/20 ring-4 ring-white/50 animate-float"
                aria-hidden
              >
                <div className="absolute inset-2 rounded-xl bg-white/10" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={`${sectionPadding} bg-white`}>
          <div className={`${containerClass} flex flex-col md:flex-row items-center gap-10 sm:gap-14`}>
            <div className={`section-reveal ${revealedSections.has("about") ? "revealed" : ""} flex flex-col md:flex-row items-center gap-10 sm:gap-14 w-full`}>
            <div className="hidden md:block flex-shrink-0 relative w-48 h-48">
              <div className="absolute w-32 h-32 rounded-full bg-[var(--color-primary)] opacity-20 top-0 left-0" />
              <div className="absolute w-28 h-28 rounded-full bg-[var(--color-primary)] opacity-30 bottom-4 left-4" />
              <div className="absolute w-16 h-16 rounded-full bg-[var(--color-accent)] opacity-80 top-8 right-0" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className={`${sectionTitleClass} ${sectionHeaderClass}`}>
                About me
              </h2>
              <p className={`${sectionDescClass} mb-6 text-center md:text-left md:mx-0`}>
              Passionate full stack developer, I build custom web solutions with
              React, Next.js and Node.js. I love turning ideas into solid, user-friendly
              digital products, following best practices and accessibility standards.
              </p>
              <a
                href="#"
                className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition-colors text-sm sm:text-base min-h-[44px]"
              >
                Download CV
              </a>
            </div>
            </div>
          </div>
        </section>

        <section id="stack" className={`${sectionPadding} bg-[var(--color-hero-bg)]`}>
          <div className={`${containerClass} text-center`}>
            <div className={`section-reveal ${revealedSections.has("stack") ? "revealed" : ""}`}>
            <h2 className={`${sectionTitleClass} ${sectionHeaderClass}`}>
              Technologies
            </h2>
            <p className={`${sectionDescClass} ${sectionHeaderClass} text-center`}>
              I use modern, proven technologies to build responsive interfaces,
              performant APIs and quality user experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
            {[
              { name: "React", icon: "⚛️", bg: "bg-cyan-100" },
              { name: "Next.js", icon: "▲", bg: "bg-gray-100" },
              { name: "Figma", icon: "🎨", bg: "bg-purple-100" },
              { name: "Python", icon: "🐍", bg: "bg-amber-100" },
            ].map((tech) => (
              <div
                key={tech.name}
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${tech.bg} flex items-center justify-center text-2xl sm:text-3xl shadow-md hover:scale-105 active:scale-100 transition-transform touch-manipulation`}
                title={tech.name}
              >
                {tech.icon}
              </div>
            ))}
            </div>
            </div>
          </div>
        </section>

        <section id="services" className={`${sectionPadding} bg-white`}>
          <div className={containerClass}>
            <header className={`section-reveal text-center mb-10 sm:mb-12 ${revealedSections.has("services") ? "revealed" : ""}`}>
              <h2 className={sectionTitleClass}>Services</h2>
              <p className={`${sectionDescClass} mt-4 text-center`}>
                I offer end-to-end support: design, development, deployment and maintenance
                for websites and web applications that meet your goals.
              </p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { title: "Responsive websites", description: "Websites that work on all screens (mobile, tablet, desktop) for a smooth experience.", icon: "📱" },
              { title: "Single-page applications", description: "Reactive web apps (SPA) with smooth navigation and instant updates.", icon: "📄" },
              { title: "Website maintenance", description: "Ongoing support, updates and fixes to keep your site performant and up to date.", icon: "🔧" },
              { title: "UI / UX", description: "Clear, intuitive interfaces designed for the user and accessibility.", icon: "✨" },
              { title: "Static sites", description: "Fast, secure sites (SSG) that are easy to deploy and evolve.", icon: "⚡" },
              { title: "Server-side rendering", description: "Apps with SSR for better SEO and optimized load times.", icon: "🖥️" },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`section-reveal ${REVEAL_DELAY_CLASSES[i] ?? ""} ${revealedSections.has("services") ? "revealed" : ""}`}
              >
                <Card title={item.title} description={item.description} icon={<span className="text-2xl">{item.icon}</span>} />
              </div>
            ))}
            </div>
          </div>
        </section>

        <section id="projects" className={`${sectionPadding} bg-[var(--color-hero-bg)]`}>
          <div className={containerClass}>
            <header className={`section-reveal text-center mb-10 sm:mb-12 ${revealedSections.has("projects") ? "revealed" : ""}`}>
              <h2 className={sectionTitleClass}>My projects</h2>
              <p className={`${sectionDescClass} mt-4 text-center`}>
                A selection of recent work: web apps, landing pages and tools
                built with React, Next.js and modern development best practices.
              </p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Todo List", color: "bg-emerald-200" },
              { title: "Landing Page", color: "bg-blue-200" },
              { title: "Countdown timer", color: "bg-slate-300" },
            ].map((project, i) => (
              <div
                key={project.title}
                className={`section-reveal ${REVEAL_DELAY_CLASSES[i] ?? ""} ${revealedSections.has("projects") ? "revealed" : ""}`}
              >
              <a
                href="#"
                className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`aspect-video ${project.color} flex items-center justify-center`}>
                  {project.title === "Countdown timer" ? (
                    <span className="font-mono text-lg sm:text-2xl font-bold text-[var(--color-primary)]">
                      08 23 55 41
                    </span>
                  ) : (
                    <span className="text-3xl sm:text-4xl opacity-50">📋</span>
                  )}
                </div>
                <h3 className="p-3 sm:p-4 font-bold text-sm sm:text-base text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
                  {project.title}
                </h3>
              </a>
              </div>
            ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[var(--color-primary)] text-white">
        <div className={`${containerClass} py-16 sm:py-20`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-14">
            <div className="lg:col-span-2">
              <a href="#home" className="flex items-center gap-2 mb-4">
                <LogoIcon />
                <span className="font-bold text-xl text-white">Djenidi</span>
              </a>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                Full stack developer passionate about creating quality digital experiences.
                Let&apos;s build your next web project together.
              </p>
              <div className="flex gap-3 mt-6">
                <SocialIcon href="https://facebook.com">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </SocialIcon>
                <SocialIcon href="https://github.com">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </SocialIcon>
                <SocialIcon href="https://x.com">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </SocialIcon>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/80 hover:text-white text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li>
                  <a href="mailto:djenidigauss@gmail.com" className="hover:text-white transition-colors">
                    djenidigauss@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Send a message
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 sm:pt-10 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-white/70 text-sm order-2 sm:order-1">
              &copy; {year} Djenidi. All rights reserved.
            </p>
            <p className="text-white/60 text-xs order-1 sm:order-2">
              Built with Next.js & React
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
