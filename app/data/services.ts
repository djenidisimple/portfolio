export interface Service {
  label: string;
  sub: string;
  color: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    label: "Frontend Development",
    sub: "React, Next.js, TypeScript",
    color: "#a78bfa",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M7 21h10M12 17v4"/></svg>`,
  },
  {
    label: "Backend Development",
    sub: "Node.js, REST API, GraphQL",
    color: "#fbbf24",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6h16M4 10h16M4 14h10M4 18h6"/><rect x="14" y="12" width="7" height="7" rx="1"/></svg>`,
  },
  {
    label: "Database",
    sub: "MongoDB, PostgreSQL, Prisma",
    color: "#4ade80",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M2 12h4m12 0h4M12 2v4m0 12v4"/><circle cx="12" cy="12" r="3"/></svg>`,
  },
];
