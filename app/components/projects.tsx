"use client";

import { PROJECTS } from "../data/projects";
import { ProjectThumb } from "./project-thumb";

export function Projects() {
  return (
    <section className="w-full min-h-screen ml-28 pt-12">
      <h2 className="text-2xl sm:text-3xl md:text-8xl font-semibold color-{#222222} uppercase">Projects</h2>

      <div className="flex flex-wrap gap-8 mt-8">
        {PROJECTS.map((p, i) => (
          <div
            key={p.title}
            className="w-64 bg-[#222222] rounded-lg overflow-hidden group cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="relative w-full overflow-hidden">
              <ProjectThumb type={p.img} />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                {
                  p.url.startsWith("https://github.com/") ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-xs font-semibold text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
                      View on GitHub →
                    </a>
                  ) : (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[10px] sm:text-xs font-semibold text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
                      View Project →
                    </a>
                  )
                }
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
          </div>
        ))}
      </div>
    </section>
  );
}
