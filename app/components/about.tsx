"use client";

import { useSlideReveal } from "./use-slide-reveal";

export function About() {
  const ref = useSlideReveal(["about-hello", "about-copy", "illo", "skills-tools"]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative bg-blue-deep px-[5vw] py-20 rounded-[6px] overflow-hidden mb-3.5 max-md:px-[6vw] max-md:py-16"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.5,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(245,246,255,0.15) 1px, transparent 1.4px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative flex justify-between font-mono text-[12px] tracking-[0.1em] uppercase opacity-75 mb-15">
        <span>2020 — 2026</span>
        <span>My Work</span>
      </div>

      <div className="relative grid grid-cols-[1.3fr_0.9fr] gap-15 items-start max-md:grid-cols-1">
        <div>
          <h1
            data-reveal="about-hello"
            className="font-display text-[clamp(38px,6vw,72px)] leading-[1.02] tracking-[-0.01em] mb-6 max-[380px]:text-[34px]"
          >
            Hello!<br />I&apos;m <span className="text-accent">Djenidi.</span>
          </h1>
          <p
            data-reveal="about-copy"
            className="text-[15.5px] leading-[1.7] text-white/85 max-w-[520px] mb-9"
          >
            I&apos;m not gifted at guessing what a project needs — I&apos;m
            gifted at building it once it&apos;s clear. Give me a rough idea and
            I&apos;ll turn it into a working interface, a solid API, and a
            database schema that holds up. Frontend with React and Next.js,
            backend with Node.js, data with MongoDB and PostgreSQL — I move
            across the whole stack without losing the details.
          </p>
        </div>

        <svg
          data-reveal="illo"
          className="w-full max-w-[340px] aspect-square"
          viewBox="0 0 320 320"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="10"
            y="10"
            width="300"
            height="300"
            rx="8"
            stroke="#6fd6ff"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            opacity="0.5"
          />
          <circle cx="160" cy="130" r="70" fill="#6fd6ff" opacity="0.9" />
          <rect x="70" y="190" width="180" height="90" rx="10" fill="#f5f6ff" />
          <rect x="95" y="215" width="130" height="10" rx="5" fill="#1e2bf0" />
          <rect x="95" y="235" width="90" height="10" rx="5" fill="#1e2bf0" opacity="0.6" />
          <rect x="95" y="255" width="60" height="10" rx="5" fill="#1e2bf0" opacity="0.35" />
          <path
            d="M130 110 L150 130 L190 90"
            stroke="#0a0e5e"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        data-reveal="skills-tools"
        className="relative mt-14 grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-7"
      >
        <div>
          <h4 className="font-mono text-[11px] tracking-[0.12em] uppercase opacity-60 mb-3.5 border-b border-[rgba(245,246,255,0.18)] pb-2">
            Skills
          </h4>
          <ul className="text-[13.5px] text-white/90 space-y-1.5">
            <li className="py-1.5">Frontend Architecture</li>
            <li className="py-1.5">REST &amp; API Design</li>
            <li className="py-1.5">Database Modeling</li>
            <li className="py-1.5">Authentication &amp; Security</li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[11px] tracking-[0.12em] uppercase opacity-60 mb-3.5 border-b border-[rgba(245,246,255,0.18)] pb-2">
            Tools
          </h4>
          <ul className="text-[13.5px] text-white/90 space-y-1.5">
            <li className="py-1.5">React · Next.js</li>
            <li className="py-1.5">Node.js · Express</li>
            <li className="py-1.5">MongoDB · PostgreSQL</li>
            <li className="py-1.5">TypeScript · Prisma</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
