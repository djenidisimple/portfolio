"use client";

import { useEffect, useRef } from "react";

const TAGS = ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const solidRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const accentWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const splitChars = (el: HTMLDivElement, baseDelay = 0, lastIsAccent = false) => {
      const text = el.textContent || "";
      const chars = lastIsAccent ? text.slice(0, -1) : text;
      const lastCh = lastIsAccent ? text.slice(-1) : "";
      el.textContent = "";
      [...chars].forEach((ch, i) => {
        const span = document.createElement("span");
        span.className = "inline-block";
        span.textContent = ch === " " ? "\u00A0" : ch;
        span.style.transitionDelay = `${(i + baseDelay) * 28}ms`;
        span.style.opacity = "0";
        span.style.transform = "translateY(48px)";
        span.style.transition =
          "opacity .6s cubic-bezier(.2,.8,.2,1), transform .6s cubic-bezier(.2,.8,.2,1)";
        el.appendChild(span);
      });
      if (lastCh) {
        const span = document.createElement("span");
        span.className = "inline-block";
        span.textContent = lastCh;
        span.style.color = "var(--color-accent, #6fd6ff)";
        span.style.transitionDelay = `${(chars.length + baseDelay) * 28}ms`;
        span.style.opacity = "0";
        span.style.transform = "translateY(48px)";
        span.style.transition =
          "opacity .6s cubic-bezier(.2,.8,.2,1), transform .6s cubic-bezier(.2,.8,.2,1)";
        el.appendChild(span);
      }
    };

    if (outlineRef.current) splitChars(outlineRef.current);
    if (solidRef.current) splitChars(solidRef.current, outlineRef.current?.textContent?.length ?? 0, true);

    const staggerSelectors = [
      "[data-hero-name]",
      "[data-accent-wrap]",
      "[data-hero-blurb]",
      "[data-tag-row]",
      "[data-scroll-cue]",
    ];

    staggerSelectors.forEach((sel, i) => {
      const el = sectionRef.current?.querySelector(sel) as HTMLElement | null;
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition = `opacity .6s ease ${0.15 + i * 0.09}s, transform .6s ease ${0.15 + i * 0.09}s`;
    });

    const reveal = () => {
      requestAnimationFrame(() => {
        outlineRef.current?.querySelectorAll(".inline-block").forEach((c) => {
          (c as HTMLElement).style.opacity = "1";
          (c as HTMLElement).style.transform = "translateY(0)";
        });
        solidRef.current?.querySelectorAll(".inline-block").forEach((c) => {
          (c as HTMLElement).style.opacity = "1";
          (c as HTMLElement).style.transform = "translateY(0)";
        });
        staggerSelectors.forEach((sel) => {
          const el = sectionRef.current?.querySelector(sel) as HTMLElement | null;
          if (el) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      });
    };

    if (document.readyState === "complete") {
      reveal();
    } else {
      window.addEventListener("load", reveal);
      return () => window.removeEventListener("load", reveal);
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const center = centerRef.current;
    if (!section || !center) return;
    center.style.transition = "transform .3s ease-out";

    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      center.style.transform = `translate(${px * 10}px, ${py * 10}px)`;
    };

    const onLeave = () => {
      center.style.transform = "translate(0,0)";
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;

    let visible = false;
    const onEnter = () => { visible = true; glow.style.opacity = "1"; };
    const onLeave = () => { visible = false; glow.style.opacity = "0"; };
    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      glow.style.left = `${e.clientX - r.left}px`;
      glow.style.top = `${e.clientY - r.top}px`;
    };

    section.addEventListener("mouseenter", onEnter);
    section.addEventListener("mouseleave", onLeave);
    section.addEventListener("mousemove", onMove);
    return () => {
      section.removeEventListener("mouseenter", onEnter);
      section.removeEventListener("mouseleave", onLeave);
      section.removeEventListener("mousemove", onMove);
    };
  }, []);

  useEffect(() => {
    const wrap = accentWrapRef.current;
    if (!wrap) return;

    const onScroll = () => {
      wrap.style.transform = `rotate(${window.scrollY * 0.15}deg)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen bg-blue flex flex-col justify-between px-[5vw] py-[100px] pb-[60px] rounded-[6px] overflow-hidden mb-3.5 max-md:py-[88px] max-md:px-[6vw] max-md:pb-10 max-md:min-h-[100svh]"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(245,246,255,0.18) 0 1px, transparent 1px 12.5%), repeating-linear-gradient(0deg, rgba(245,246,255,0.18) 0 1px, transparent 1px 20%)",
        }}
      />

      <div
        ref={glowRef}
        className="absolute w-[420px] h-[420px] rounded-full pointer-events-none z-1 opacity-0 transition-opacity duration-400"
        style={{
          background: "radial-gradient(circle, rgba(111,214,255,0.25), transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative flex justify-between items-start">
        <span
          data-hero-name
          className="font-mono text-[14px] tracking-[0.1em] uppercase"
        >
          Djaomananjara&nbsp;Djenidi
        </span>
        <div ref={accentWrapRef} className="w-16 h-16 shrink-0" style={{ willChange: "transform" }}>
          <div
            className="w-16 h-16"
            style={{
              background: "var(--color-accent, #6fd6ff)",
              clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0% 100%)",
              animation: "float 5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <div ref={centerRef} className="relative my-auto">
        <div
          ref={outlineRef}
          className="font-display text-[clamp(38px,11vw,148px)] leading-[0.92] tracking-[-0.02em] inline-block max-[380px]:text-[34px]"
          style={{ color: "transparent", WebkitTextStroke: "2px rgba(245,246,255,0.55)" }}
        >
          Fullstack
        </div>
        <div
          ref={solidRef}
          className="font-display text-[clamp(42px,12vw,160px)] leading-[0.92] tracking-[-0.02em] text-white inline-block max-[380px]:text-[38px]"
        >
          Developer.
        </div>
      </div>

      <div className="relative flex justify-between items-end gap-10 flex-wrap">
        <p
          data-hero-blurb
          className="max-w-[440px] text-[15px] leading-[1.6] text-white/85 max-md:text-[14px]"
        >
          Hello World! I&apos;m Djenidi. I transform ideas into complete,
          performant web solutions — comfortable across the whole JavaScript /
          TypeScript stack, from interface to database.
        </p>
        <div data-tag-row className="flex flex-wrap gap-[10px] max-w-[420px]">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] tracking-[0.06em] px-3 py-[7px] border border-[rgba(245,246,255,0.18)] rounded-full uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        data-scroll-cue
        className="absolute bottom-[22px] left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.1em] flex flex-col items-center gap-2 opacity-70"
      >
        <span>Scroll</span>
        <div className="w-px h-9 relative overflow-hidden bg-[rgba(245,246,255,0.18)]">
          <div
            className="absolute top-[-40%] left-0 w-full h-[40%]"
            style={{
              background: "var(--color-accent, #6fd6ff)",
              animation: "scrollLine 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
