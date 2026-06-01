"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Completed", value: 30, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 20, suffix: "+" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = to / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span
      ref={ref}
      className="text-2xl sm:text-3xl font-display font-extrabold bg-gradient-to-r from-[#22d3ee] to-[#f472b6] bg-clip-text text-transparent"
    >
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-12 sm:py-16">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center gap-1 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
          >
            <Counter to={stat.value} suffix={stat.suffix} />
            <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
