"use client";

import { useEffect, useRef } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const SKILLS = ["React", "Next.js", "MongoDB", "PostgreSQL", "Node.js", "TypeScript"];

const SKILL_ICONS: Record<string, string> = {
  React: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47m-6.37.76c.08.27.2.55.31.83l.3-.5-.61-.33zm6.37 3.22c.29-.45.59-.92.88-1.44l.3.5c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.28.5-1.49-2.57v-2.98l-1.29-2.23C12.83 9 12.42 9 12 9c-.42 0-.83 0-1.21.03L9.5 11.26v2.98l-1.49 2.57-.28-.5c-.11.29-.22.58-.29.86.27.06.57.11.88.16l.3-.5c.29.52.59.99.88 1.44.35.54.73 1.04 1.11 1.5.35-.02.71-.03 1.08-.03.37 0 .73.01 1.08.03.38-.46.76-.96 1.11-1.5m2.29-3.22l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m1.61-3.48c-.48.67-.99 1.31-1.51 1.9 1.59 1.5 2.97 2.08 3.6 1.7.63-.35.82-1.82.31-3.96-.74.12-1.57.21-2.4.36M6.09 8c-.63-.38-2.01.2-3.6 1.7.52.59 1.03 1.23 1.51 1.9.83-.15 1.66-.24 2.4-.36.51-2.14.32-3.61-.31-3.96m-.71 5.74l.3.51.3-.5c-.31-.06-.61-.11-.88-.16l.28-.51-.3-.5-.29.51c.11-.29.22-.57.29-.86zm9.19-3.22l.28.51c.11-.29.22-.57.29-.86a22.7 22.7 0 00-.88-.16l.31.51m1.34-1.9c.48-.67.99-1.31 1.51-1.9-1.59-1.5-2.97-2.08-3.6-1.7-.63.35-.82 1.82-.31 3.96.74-.12 1.57-.21 2.4-.36m-1.45 1.5c.29.47.59.94.88 1.44l.3-.5-.62.32.3-.51-.3-.5-.56-.25z"/></svg>`,
  "Next.js": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.53 13.93L11.4 8.41v7.52H9.73V6h1.5l4.47 6.5V6h1.67v9.93h-1.84z"/></svg>`,
  MongoDB: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 4.5c.1-.13.2-.19.5-.19.3 0 .4.06.5.19.5.56 1.5 2.25 2 4 .1.38.2.75.3 1.13-1.2-.63-2.3-1.5-3.3-2.5V6.5zm2.8 9.5c-1.2.5-2.5.8-3.8.8s-2.6-.3-3.8-.8c.6-1.5 1.8-3.5 3.8-3.5s3.2 2 3.8 3.5z"/></svg>`,
  PostgreSQL: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 3c.8 0 1.5.7 1.5 1.5S13.3 8 12.5 8 11 7.3 11 6.5 11.7 5 12.5 5zm3 1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zm-7 0c0 .8-.7 1.5-1.5 1.5S5.5 7.3 5.5 6.5 6.2 5 7 5s1.5.7 1.5 1.5zM5 12c0-.8.7-1.5 1.5-1.5S8 11.2 8 12s-.7 1.5-1.5 1.5S5 12.8 5 12zm7 5.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/></svg>`,
  "Node.js": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 01-.12-.22V7.71c0-.09.04-.17.12-.22l7.44-4.29c.07-.04.16-.04.23 0l7.44 4.29c.08.05.12.13.12.22v8.58c0 .08-.04.16-.12.21l-7.44 4.3c-.07.04-.16.04-.23 0L9.62 19.65c-.08-.04-.16-.04-.23 0-.63.35-.76.4-1.36.57.14.06.29.13.44.22l2.08 1.2c.23.13.5.2.78.2s.54-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.5-.2-.78-.2z"/></svg>`,
  TypeScript: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7.5 14.5h1.5c0 .75.75 1.25 1.75 1.25S12.5 15.25 12.5 14.5c0-.5-.25-.75-1.25-1.25L10 12.75C8.75 12.25 8 11.5 8 10.25 8 8.75 9.25 7.75 11 7.75s2.75 1 2.75 2.5h-1.5c0-.75-.5-1.25-1.25-1.25S9.5 9.5 9.5 10.25c0 .5.25.75 1.25 1.25l1.25.5c1.25.5 1.75 1.25 1.75 2.5C13.75 16 12.5 17 10.75 17S7.5 16 7.5 14.5zm8.5-6.5h1.5V14c0 1.5-.75 3-3 3-.75 0-1.25-.25-1.75-.5l.75-1.25c.25.25.5.25.75.25.75 0 1.25-.5 1.25-1.5V8z"/></svg>`,
};

const PROJECTS = [
  {
    title: "Fullstack Portfolio",
    desc: "Personal portfolio built with Next.js and TailwindCSS, showcasing my skills and projects.",
    color: "#22d3ee",
    img: "portfolio",
    url: "https://github.com/djenidisimple/portfolio",
  },
  {
    title: "REST API with Node.js",
    desc: "Complete RESTful API with JWT authentication, MongoDB, and data validation.",
    color: "#4ade80",
    img: "api",
    url: "https://github.com/djenidisimple/node-api",
  },
  {
    title: "Analytics Dashboard",
    desc: "Interactive dashboard with React and Recharts for real-time data visualization.",
    color: "#f59e0b",
    img: "dashboard",
    url: "https://github.com/djenidisimple/dashboard",
  },
  {
    title: "Next.js E-commerce",
    desc: "E-commerce website with Next.js, Stripe integration, and real-time cart management.",
    color: "#f97316",
    img: "ecommerce",
    url: "https://github.com/djenidisimple/ecommerce",
  },
  {
    title: "Fullstack Task Manager",
    desc: "Task management application with React, Node.js, and PostgreSQL.",
    color: "#e879f9",
    img: "tasks",
    url: "https://github.com/djenidisimple/task-manager",
  },
  {
    title: "Blog with CMS",
    desc: "Blog built with Next.js and Sanity.io as a headless CMS.",
    color: "#f472b6",
    img: "blog",
    url: "https://github.com/djenidisimple/blog-cms",
  },
];

const SERVICES = [
  {
    label: "Frontend Development",
    sub: "React, Next.js, TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M7 21h10M12 17v4" />
      </svg>
    ),
    color: "#a78bfa",
  },
  {
    label: "Backend Development",
    sub: "Node.js, REST API, GraphQL",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M4 6h16M4 10h16M4 14h10M4 18h6" />
        <rect x="14" y="12" width="7" height="7" rx="1" />
      </svg>
    ),
    color: "#fbbf24",
  },
  {
    label: "Database",
    sub: "MongoDB, PostgreSQL, Prisma",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M2 12h4m12 0h4M12 2v4m0 12v4" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    color: "#4ade80",
  },
];

const CONTACTS = [
  {
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 8h-5a3 3 0 000 6h1v3l3-3h1a3 3 0 000-6z" />
      </svg>
    ),
    url: "https://linkedin.com/in/djenidi-djaomananjara",
  },
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
    url: "https://instagram.com/djenidisimple",
  },
  {
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    url: "https://github.com/djenidisimple",
  },
  {
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
    url: "mailto:djenidi@example.com",
  },
];

// ─── PROJECT MOCK THUMBNAILS (SVG placeholders) ──────────────────────────────

function ProjectThumb({ type, color }: { type: string; color: string }) {
  const palettes: Record<string, string[]> = {
    portfolio: ["#22d3ee", "#0ea5e9", "#6366f1"],
    api: ["#4ade80", "#22c55e", "#16a34a"],
    dashboard: ["#f59e0b", "#f97316", "#ea580c"],
    ecommerce: ["#f97316", "#7c3aed", "#1e1b4b"],
    tasks: ["#e879f9", "#a855f7", "#7c3aed"],
    blog: ["#f472b6", "#ec4899", "#db2777"],
  };
  const cols = palettes[type] || ["#6366f1", "#a78bfa", "#818cf8"];

  return (
    <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={`g-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cols[0]} />
          <stop offset="100%" stopColor={cols[1]} />
        </linearGradient>
      </defs>
      <rect width="280" height="160" fill={`url(#g-${type})`} />
      {/* Browser bar mockup */}
      <rect width="280" height="20" fill="rgba(0,0,0,0.35)" />
      <circle cx="12" cy="10" r="4" fill="#ff5f56" />
      <circle cx="24" cy="10" r="4" fill="#ffbd2e" />
      <circle cx="36" cy="10" r="4" fill="#27c93f" />
      <rect x="50" y="5" width="180" height="10" rx="5" fill="rgba(255,255,255,0.2)" />
      {/* Content mockup */}
      <rect x="10" y="30" width="120" height="10" rx="2" fill="rgba(255,255,255,0.6)" />
      <rect x="10" y="46" width="80" height="6" rx="2" fill="rgba(255,255,255,0.35)" />
      <rect x="10" y="60" width="100" height="6" rx="2" fill="rgba(255,255,255,0.35)" />
      <rect x="150" y="28" width="118" height="90" rx="4" fill={cols[2]} opacity="0.4" />
      <rect x="10" y="80" width="120" height="60" rx="4" fill="rgba(0,0,0,0.2)" />
    </svg>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-fade]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');
        body { background: #0d1117; margin: 0; }
        * { box-sizing: border-box; }
        .font-display { font-family: 'Syne', sans-serif; }
        .font-body { font-family: 'Space Grotesk', sans-serif; }
        .skill-pill:hover { background: rgba(255,255,255,0.12); }
        .project-card:hover .project-overlay { opacity: 1; }
        .contact-row:hover { background: rgba(255,255,255,0.05); }
        .contact-row:hover .arrow-icon { transform: translate(2px,-2px); }
        .arrow-icon { transition: transform 0.2s ease; }
        @keyframes bounce-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        .bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        @keyframes fadeIn { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        .hero-animate { animation: fadeIn 0.8s ease forwards; }
        .hero-animate-2 { animation: fadeIn 0.8s 0.2s ease both; }
        .hero-animate-3 { animation: fadeIn 0.8s 0.4s ease both; }
        .hero-animate-4 { animation: fadeIn 0.8s 0.6s ease both; }
        .hero-animate-5 { animation: fadeIn 0.8s 0.8s ease both; }
      `}</style>

      <div className="font-body min-h-screen bg-[#0d1117] text-white relative overflow-x-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-6">

          {/* ── HERO ─────────────────────────────────────────────────────── */}
          <section ref={heroRef} className="pt-20 pb-16 text-center flex flex-col items-center gap-4">
            {/* Avatar */}
            <div className="hero-animate relative w-20 h-20 rounded-full border-2 border-[#22d3ee] overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.25)]">
              {/* <span className="text-[#22d3ee] font-mono text-2xl font-bold">DJ</span> */}
              <img src="./profile.jpg"/>
            </div>

            {/* Tagline */}
            <p className="hero-animate-2 text-sm text-gray-400 tracking-wide">
              Hello World! I'm{" "}
              <span className="text-[#f472b6] font-medium">DJAOMANANJARA Djenidi</span> and I'm a
            </p>

            {/* Heading */}
            <h1 className="font-display hero-animate-3 text-4xl sm:text-5xl font-extrabold leading-tight">
              Fullstack Developer
            </h1>

            {/* Bio */}
            <p className="hero-animate-4 text-sm text-gray-400 max-w-lg leading-relaxed">
              I transform ideas into complete and performant web solutions. 
              Specialized in the JavaScript/TypeScript ecosystem, I master both 
              frontend development with React and Next.js, and backend with Node.js, 
              MongoDB, and PostgreSQL.
            </p>

            {/* Skills pills */}
            <div className="hero-animate-5 flex flex-wrap justify-center gap-2 mt-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="skill-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-xs text-gray-300 bg-white/5 cursor-default transition-colors duration-200 select-none"
                >
                  <span
                    className="w-4 h-4 text-white/70 flex-shrink-0"
                    dangerouslySetInnerHTML={{ __html: SKILL_ICONS[s] }}
                  />
                  {s}
                </span>
              ))}
            </div>

            {/* Scroll caret */}
            <div className="mt-8 bounce-slow text-gray-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M7 10l5 5 5-5" />
                <path d="M7 14l5 5 5-5" />
              </svg>
            </div>
          </section>

          {/* ── PROJECTS ─────────────────────────────────────────────────── */}
          <section className="py-16">
            <div data-fade className="text-center mb-10">
              <p className="text-[#22d3ee] text-xs font-semibold tracking-widest uppercase mb-2">
                My Work
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                Featured Projects
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {PROJECTS.map((p, i) => (
                <a
                  key={p.title}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-fade
                  className="project-card group rounded-xl overflow-hidden bg-[#161b22] border border-white/5 hover:border-white/15 transition-all duration-300 cursor-pointer"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full h-36 overflow-hidden">
                    <ProjectThumb type={p.img} color={p.color} />
                    <div
                      className="project-overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300"
                      style={{ background: "rgba(0,0,0,0.5)" }}
                    >
                      <span className="text-xs font-semibold text-white bg-white/10 px-3 py-1 rounded-full border border-white/20">
                        View on GitHub →
                      </span>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-3">
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ color: p.color }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{p.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* ── SERVICES ─────────────────────────────────────────────────── */}
          <section className="py-16">
            <div data-fade className="text-center mb-12">
              <p className="text-[#22d3ee] text-xs font-semibold tracking-widest uppercase mb-2">
                My Services
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                How I Can Help You
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {SERVICES.map((s, i) => (
                <div
                  key={s.label}
                  data-fade
                  className="flex flex-col items-center text-center gap-3"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div style={{ color: s.color }}>{s.icon}</div>
                  <h3 className="text-sm font-semibold text-white">{s.label}</h3>
                  <p className="text-xs text-gray-500">{s.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CONTACT ──────────────────────────────────────────────────── */}
          <section className="py-16 pb-24">
            <div data-fade className="text-center mb-10">
              <p className="text-[#22d3ee] text-xs font-semibold tracking-widest uppercase mb-2">
                Contact
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                Interested in My Profile?
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                Contact me or follow me on social media!
              </p>
            </div>

            <div data-fade className="flex flex-col gap-3 max-w-sm mx-auto">
              {CONTACTS.map((c) => (
                <a
                  key={c.label}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-row flex items-center justify-between px-4 py-3 rounded-lg border border-white/10 bg-[#161b22] hover:border-white/20 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-gray-400">{c.icon}</span>
                    <span className="text-sm font-medium">{c.label}</span>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="arrow-icon w-4 h-4 text-[#22d3ee]"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}