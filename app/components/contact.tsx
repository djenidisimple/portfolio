"use client";

import { useEffect, useRef } from "react";
import { useSlideReveal } from "./use-slide-reveal";

const CONTACT_LINKS = [
  { label: "LinkedIn", idx: "01", url: "https://linkedin.com/in/djenidi-djaomananjara" },
  { label: "Instagram", idx: "02", url: "https://instagram.com/djenidisimple" },
  { label: "GitHub", idx: "03", url: "https://github.com/djenidisimple" },
  { label: "Email", idx: "04", url: "mailto:djenidi@example.com" },
];

function MagneticLink({ link }: { link: (typeof CONTACT_LINKS)[number] }) {
  const labelRef = useRef<HTMLSpanElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const label = labelRef.current;
    const el = linkRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!label || !el || reduceMotion) return;
    label.style.transition = "transform .3s ease-out";

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      label.style.transform = `translateX(${px * 14}px)`;
    };

    const onLeave = () => {
      label.style.transform = "translateX(0)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a
      ref={linkRef}
      href={link.url}
      target="_blank"
      rel="noopener"
      data-reveal="contact-link"
      className="flex justify-between items-center py-[22px] px-1 border-b border-[rgba(245,246,255,0.18)] font-bold text-[clamp(18px,3vw,28px)] transition-[padding-left,color,opacity,transform] duration-[0.25s,0.25s,0.6s,0.6s] hover:pl-4 hover:text-accent max-md:text-[20px] max-md:py-[18px] max-md:px-0.5"
    >
      <span ref={labelRef} className="inline-block" style={{ willChange: "transform" }}>
        {link.label}
      </span>
      <span className="font-mono text-[12px] opacity-60">{link.idx}</span>
    </a>
  );
}

export function Contact() {
  const ref = useSlideReveal(["contact-head", "contact-link", "foot"]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-blue px-[5vw] pt-25 pb-15 rounded-[6px] overflow-hidden max-md:px-[6vw] max-md:pt-[72px] max-md:pb-10"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(245,246,255,0.18) 0 1px, transparent 1px 12.5%)",
        }}
      />

      <div data-reveal="contact-head" className="relative mb-15">
        <span className="font-mono text-[12px] tracking-[0.14em] uppercase opacity-75 mb-4 block">
          Get In Touch
        </span>
        <h2 className="font-display text-[clamp(32px,7vw,84px)] leading-[1.02] tracking-[-0.01em] max-w-[820px]">
          Interested in
          <br />
          my profile?
        </h2>
      </div>

      <div className="relative border-t border-[rgba(245,246,255,0.18)]">
        {CONTACT_LINKS.map((link) => (
          <MagneticLink key={link.idx} link={link} />
        ))}
      </div>

      <div
        data-reveal="foot"
        className="relative flex justify-between pt-10 font-mono text-[11px] tracking-[0.06em] opacity-70 flex-wrap gap-2.5"
      >
        <span>© 2026 Djaomananjara Djenidi</span>
        <span>Built with HTML · CSS · JS</span>
      </div>
    </section>
  );
}
