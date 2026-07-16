"use client";

import { useEffect, useRef } from "react";

export function useSlideReveal(revealKeys: string[]) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    revealKeys.forEach((key) => {
      el.querySelectorAll(`[data-reveal="${key}"]`).forEach((child, i) => {
        const c = child as HTMLElement;
        c.style.opacity = "0";
        c.style.transform = "translateY(26px)";
        c.style.transition = "opacity .6s ease, transform .6s ease";
        c.style.transitionDelay = `${i * 0.08}s`;
      });
    });

    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity .7s ease, transform .7s ease";

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slide = entry.target as HTMLElement;
            slide.style.opacity = "1";
            slide.style.transform = "translateY(0)";

            revealKeys.forEach((key) => {
              slide.querySelectorAll(`[data-reveal="${key}"]`).forEach((child) => {
                (child as HTMLElement).style.opacity = "1";
                (child as HTMLElement).style.transform = "translateY(0)";
              });
            });

            io.unobserve(slide);
          }
        });
      },
      { threshold: 0.12 },
    );

    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
