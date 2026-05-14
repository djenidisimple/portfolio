"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { ProjectThumb } from "./project-thumb";
import { SectionHeader } from "./section-header";

export function Projects() {
  return (
    <section className="py-16 sm:py-20">
      <SectionHeader label="My Work" title="Featured Projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
          >
            {/* Thumbnail */}
            <div className="relative w-full aspect-[7/4] overflow-hidden">
              <ProjectThumb type={p.img} />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                <span className="text-[10px] sm:text-xs font-semibold text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
                  View on GitHub →
                </span>
              </div>
            </div>
            {/* Info */}
            <div className="p-3 sm:p-4">
              <h3 className="text-xs sm:text-sm font-semibold mb-1" style={{ color: p.color }}>
                {p.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed line-clamp-2">
                {p.desc}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
