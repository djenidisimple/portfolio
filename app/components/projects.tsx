"use client";

import { useEffect, useRef } from "react";
import { useSlideReveal } from "./use-slide-reveal";

const PROJECTS = [
  {
    num: "01",
    title: "DevReview AI — Plateforme Intelligente d'Évaluation de Code",
    tagline: "L'évaluation automatisée par IA",
    desc: "Application SaaS qui automatise la revue de code grâce à l'IA : analyse de la qualité, détection de vulnérabilités de sécurité et suggestions d'optimisation en temps réel, servies dans une interface fluide et moderne.",
    stack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL / Supabase", "AI API Integration"],
    url: "https://github.com/djenidisimple/DevReview-AI",
  },
  {
    num: "02",
    title: "Linked Brain — Plateforme d'Entraide Académique & Partage de Ressources",
    tagline: "Le portail académique connecté",
    desc: "Portail éducatif complet facilitant l'accès aux ressources pédagogiques (annales du Baccalauréat) et la mise en relation d'étudiants. Architecture initialement MySQL, entièrement migrée vers PostgreSQL pour une scalabilité maximale et des requêtes plus fluides.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL / Supabase", "Geolocation API"],
    url: "https://github.com/djenidisimple/linked-brain",
  },
  {
    num: "03",
    title: "PySurvival 2.5D — Moteur de Jeu Raycasting Inspiré de Doom",
    tagline: "Le moteur de jeu rétro",
    desc: "Moteur de jeu de survie en fausse 3D (2.5D) construit entièrement from scratch, sans moteur commercial, dans un labyrinthe à thème égyptien. Rendu par raycasting et gestion stricte de la mémoire pour tenir un 60 FPS constant malgré des contraintes matérielles limitées.",
    stack: ["Python", "Pygame", "Raycasting", "Maths vectorielles", "Pixel Art"],
    url: "https://github.com/djenidisimple/py-survival-2.5d",
  },
];

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!card || reduceMotion) return;

    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(600px) rotateX(${py * -6}deg) rotateY(${px * 6}deg) translateY(-2px)`;
    };

    const onLeave = () => {
      card.style.transform = "perspective(600px) rotateX(0) rotateY(0) translateY(0)";
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a
      ref={cardRef}
      href={project.url}
      target="_blank"
      rel="noopener"
      data-reveal="project-card"
      className="group grid grid-cols-[70px_1fr] gap-x-7 gap-y-2 px-1 py-10 border-b border-[rgba(245,246,255,0.18)] transition-[opacity,transform,background] duration-[0.6s,0.4s,0.25s] hover:bg-[rgba(111,214,255,0.05)] max-md:grid-cols-1 max-md:gap-2.5 max-md:py-7.5"
      style={{ transformStyle: "preserve-3d" }}
    >
      <span className="font-mono text-[13px] text-accent opacity-80 pt-1 max-md:pt-0">
        {project.num}
      </span>
      <div className="min-w-0">
        <div className="flex justify-between items-start gap-4 flex-wrap">
          <span className="font-bold text-[clamp(20px,2.6vw,28px)] tracking-[-0.01em]">
            {project.title}
          </span>
          <span className="font-mono text-lg text-accent shrink-0 transition-transform duration-250 group-hover:translate-x-1 group-hover:-translate-y-1 project-arrow">
            ↗
          </span>
        </div>
        <span className="block font-mono text-[11.5px] tracking-[0.06em] uppercase text-white/55 mt-1.5">
          {project.tagline}
        </span>
        <p className="text-[14.5px] leading-[1.7] text-white/75 mt-4 max-w-[640px]">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2 mt-[18px]">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] tracking-[0.06em] px-3 py-[7px] border border-[rgba(245,246,255,0.18)] rounded-full uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export function Projects() {
  const ref = useSlideReveal(["work-head", "project-card"]);

  return (
    <section
      ref={ref}
      id="work"
      className="relative bg-ink px-[5vw] py-[90px] rounded-[6px] overflow-hidden mb-3.5 max-md:px-[6vw] max-md:py-16"
    >
      <div
        data-reveal="work-head"
        className="flex justify-between items-end flex-wrap gap-4 mb-12 max-md:flex-col max-md:items-start"
      >
        <div>
          <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-accent">
            Selected Case Studies
          </span>
          <h2 className="font-display text-[clamp(30px,5vw,60px)] tracking-[-0.01em]">
            My Work
          </h2>
        </div>
        <span className="font-mono text-[12px] opacity-60">
          03 / Featured Repositories
        </span>
      </div>

      <div className="flex flex-col border-t border-[rgba(245,246,255,0.18)]">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
