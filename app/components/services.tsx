"use client";

import { motion } from "framer-motion";
import { SERVICES } from "../data/services";
import { SectionHeader } from "./section-header";

export function Services() {
  return (
    <section className="py-16 sm:py-20">
      <SectionHeader label="My Services" title="How I Can Help You" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
          >
            <div
              className="w-10 h-10 sm:w-12 sm:h-12"
              style={{ color: s.color }}
              dangerouslySetInnerHTML={{ __html: s.icon }}
            />
            <h3 className="text-sm sm:text-base font-semibold text-white">{s.label}</h3>
            <p className="text-[10px] sm:text-xs text-gray-500">{s.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
