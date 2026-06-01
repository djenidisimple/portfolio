"use client";

import { EXPERIENCE } from "../data/experience";

export function Experience() {
  return (
    <section className="w-full min-h-screen ml-28 mt-12">
      <h2 className="text-2xl sm:text-3xl md:text-8xl font-semibold color-{#222222} uppercase">Experience</h2>
      <div className="mx-auto">
        {EXPERIENCE.map((experience, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold text-[#222222]">{experience.role} at {experience.company}</h3>
            <p className="text-sm text-gray-500">{experience.period}</p>
            <p>{experience.role}</p>
          </div>
        ))}
      </div>
      <img src="/src/experience.png" alt="Experience" className="fixed top-10 right-25"/>
    </section>
  );
}
