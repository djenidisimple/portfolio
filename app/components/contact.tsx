"use client";

import { motion } from "framer-motion";
import { CONTACTS } from "../data/contacts";
import { SectionHeader } from "./section-header";

export function Contact() {
  return (
    <section className="py-16 sm:py-20 pb-24 sm:pb-32">
      <SectionHeader
        label="Contact"
        title="Interested in My Profile?"
        description="Contact me or follow me on social media!"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-3 max-w-sm mx-auto px-4"
      >
        {CONTACTS.map((c) => (
          <motion.a
            key={c.label}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="flex items-center justify-between px-4 py-3 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-200 group"
          >
            <div className="flex items-center gap-3 text-gray-300">
              <span
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0"
                dangerouslySetInnerHTML={{ __html: c.icon }}
              />
              <span className="text-xs sm:text-sm font-medium">{c.label}</span>
            </div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-3 h-3 sm:w-4 sm:h-4 text-[#22d3ee] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
