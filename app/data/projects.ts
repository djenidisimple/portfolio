export interface Project {
  title: string;
  desc: string;
  color: string;
  img: string;
  url: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Fullstack Portfolio",
    desc: "Personal portfolio built with Next.js and TailwindCSS, showcasing my skills and projects.",
    color: "#22d3ee",
    img: "portfolio",
    url: "https://github.com/djenidisimple/portfolio",
  },
  {
    title: "REST API with Node.js",
    desc: "Complete RESTful API with JWT authentication, MongoDB, and data validation.",
    color: "#4ade80",
    img: "api",
    url: "https://github.com/djenidisimple/node-api",
  },
  {
    title: "Analytics Dashboard",
    desc: "Interactive dashboard with React and Recharts for real-time data visualization.",
    color: "#f59e0b",
    img: "dashboard",
    url: "https://github.com/djenidisimple/dashboard",
  },
  {
    title: "Next.js E-commerce",
    desc: "E-commerce website with Next.js, Stripe integration, and real-time cart management.",
    color: "#f97316",
    img: "ecommerce",
    url: "https://github.com/djenidisimple/ecommerce",
  },
  {
    title: "Fullstack Task Manager",
    desc: "Task management application with React, Node.js, and PostgreSQL.",
    color: "#e879f9",
    img: "tasks",
    url: "https://github.com/djenidisimple/task-manager",
  },
  {
    title: "Blog with CMS",
    desc: "Blog built with Next.js and Sanity.io as a headless CMS.",
    color: "#f472b6",
    img: "blog",
    url: "https://github.com/djenidisimple/blog-cms",
  },
];
