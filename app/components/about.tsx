export function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-start gap-6 pl-38 pt-12">
      <h2 className="text-2xl sm:text-3xl md:text-8xl font-semibold color-{#222222} uppercase">About Me</h2>
      <div className="flex flex-col gap-4 w-xl">
        <span>
          Passionate Full Stack Developer focused on building scalable, performant, and beautiful web applications.
          I love clean architecture, intuitive UI, and transforming ideas into impactful digital solutions.
          Let's collaborate and bring your vision to life!
        </span>
        <ul className="list-disc list-inside">
          <li>Proficient in JavaScript, TypeScript, React, Node.js, and modern web technologies.</li>
          <li>Experienced in building responsive, user-friendly interfaces and RESTful APIs.</li>
          <li>Strong problem solver with a passion for learning and staying up-to-date with industry trends.</li>  
        </ul>
        <img src="/src/about.png" alt="About Me" className="fixed top-10 right-25"/>
      </div>
      <div className="flex gap-4">
        <a href="#" className="px-12 py-2 bg-[#222222] border-2 border-[#222222] text-white rounded-md hover:bg-[#E9E9E9] hover:text-[#222222] transition duration-300">Download CV</a>
        <a href="#" className="px-12 py-2 border-2 border-[#222222] text-[#222222] rounded-md hover:bg-[#E9E9E9] hover:text-[#222222] transition duration-300">Contact Me</a>
      </div>
    </div>
  );  
}