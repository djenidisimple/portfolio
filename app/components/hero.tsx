"use client";

import { motion } from "framer-motion";
import { SKILLS, SKILL_ICONS } from "../data/skills";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 text-center flex flex-col items-center gap-4 sm:gap-5"
    >
      {/* Avatar */}
      <motion.div
        variants={item}
        className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center ring-2 ring-[#22d3ee]/60 shadow-[0_0_40px_rgba(34,211,238,0.2)]"
      >
        <span className="text-[#22d3ee] font-mono text-2xl sm:text-3xl font-bold">DJ</span>
      </motion.div>

      {/* Tagline */}
      <motion.p variants={item} className="text-xs sm:text-sm text-gray-400 tracking-wide">
        Hello World! I&apos;m{" "}
        <span className="text-[#f472b6] font-medium">DJAOMANANJARA Djenidi</span> and I&apos;m a
      </motion.p>

      {/* Heading */}
      <motion.h1
        variants={item}
        className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
      >
        <span className="bg-gradient-to-r from-[#22d3ee] via-[#22d3ee] to-[#f472b6] bg-clip-text text-transparent">
          Fullstack Developer
        </span>
      </motion.h1>

      {/* Bio */}
      <motion.p
        variants={item}
        className="text-xs sm:text-sm text-gray-400 max-w-lg leading-relaxed px-4"
      >
        I transform ideas into complete and performant web solutions.
        Specialized in the JavaScript/TypeScript ecosystem, I master both
        frontend development with React and Next.js, and backend with Node.js,
        MongoDB, and PostgreSQL.
      </motion.p>

      {/* Skills */}
      <motion.div
        variants={item}
        className="flex flex-wrap justify-center gap-2 px-4 mt-2"
      >
        {SKILLS.map((s) => (
          <span
            key={s}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-xs text-gray-300 bg-white/[0.03] backdrop-blur-sm cursor-default select-none transition-colors duration-200 hover:bg-white/[0.08] hover:border-white/20"
          >
            <span
              className="w-3.5 h-3.5 text-white/60 flex-shrink-0"
              dangerouslySetInnerHTML={{ __html: SKILL_ICONS[s] }}
            />
            {s}
          </span>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={item}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-8 text-gray-500"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
          <path d="M7 10l5 5 5-5" />
          <path d="M7 14l5 5 5-5" />
        </svg>
      </motion.div>
    </motion.section>
  );
}
