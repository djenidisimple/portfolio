"use client";

import { useSlideReveal } from "./use-slide-reveal";

const SERVICES = [
  {
    period: "Layer 01",
    title: "Frontend Development",
    role: "React · Next.js · TypeScript",
    desc: "Interfaces that feel fast and hold together — component architecture, state management, and pixel-level polish.",
  },
  {
    period: "Layer 02",
    title: "Backend Development",
    role: "Node.js · REST API · GraphQL",
    desc: "APIs that are easy to reason about — clear routes, validation, and authentication done properly.",
  },
  {
    period: "Layer 03",
    title: "Database",
    role: "MongoDB · PostgreSQL · Prisma",
    desc: "Schemas designed for the queries you'll actually run, not just the ones that look good in a diagram.",
  },
];

export function Services() {
  const ref = useSlideReveal(["services-head", "service-col"]);

  return (
    <section
      ref={ref}
      id="services"
      className="relative bg-paper text-ink px-[5vw] py-[70px] pb-20 rounded-[6px] overflow-hidden mb-3.5 max-md:px-[6vw] max-md:py-14 max-md:pb-16"
    >
      <div data-reveal="services-head" className="flex justify-between items-end gap-5 mb-11 flex-wrap max-md:flex-col max-md:items-start max-md:gap-3.5">
        <div>
          <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-blue-deep opacity-100">
            How I Can Help
          </span>
          <h2 className="font-display text-[clamp(26px,3.4vw,40px)] tracking-[-0.01em] mt-1">
            My Services
          </h2>
        </div>
        <div className="font-mono text-[12px] leading-[1.6] opacity-70 text-right max-md:text-left">
          Djaomananjara Djenidi<br />
          Fullstack Developer
        </div>
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 border-t-[1.5px] border-ink">
        {SERVICES.map((s, i) => (
          <div
            key={s.period}
            data-reveal="service-col"
            className={`py-[26px] px-0 pr-[22px] max-md:border-b-[1.5px] max-md:border-[rgba(8,9,26,0.15)] max-md:pr-0 ${
              i < SERVICES.length - 1
                ? "border-r-[1.5px] border-[rgba(8,9,26,0.15)] max-md:border-r-0"
                : ""
            }`}
          >
            <span className="font-mono text-[11px] tracking-[0.08em] text-blue mb-2.5 block">
              {s.period}
            </span>
            <h3 className="font-bold text-[19px] mb-1.5">{s.title}</h3>
            <div className="text-[12.5px] text-[rgba(8,9,26,0.55)] mb-3.5">{s.role}</div>
            <p className="text-[13.5px] leading-[1.65] text-[rgba(8,9,26,0.72)]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
