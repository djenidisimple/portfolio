"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 sm:mb-16"
    >
      <p className="text-[#22d3ee] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3">
        {label}
      </p>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-md mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
