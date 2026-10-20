import { CodeIcon, DatabaseIcon, ServerIcon } from "./icons";

const SERVICES = [
  {
    icon: <CodeIcon />,
    title: "Frontend",
    description: "Des interfaces rapides, accessibles et soignées.",
    stack: "React · Next.js · TypeScript",
  },
  {
    icon: <ServerIcon />,
    title: "Backend",
    description: "Des APIs robustes et sécurisées.",
    stack: "ASP.NET Core · Spring Boot · Node.js",
  },
  {
    icon: <DatabaseIcon />,
    title: "Base de données",
    description: "Une modélisation claire et des requêtes fiables.",
    stack: "PostgreSQL · MongoDB · Prisma",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="wrap"
      style={{ paddingTop: 130, paddingBottom: 20 }}
    >
      <div style={{ maxWidth: 640, marginBottom: 56 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          Services
        </div>
        <h2 className="h2">Ce que je peux construire pour vous.</h2>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        {SERVICES.map((service) => (
          <div
            key={service.title}
            style={{
              flex: "1 1 280px",
              minWidth: 0,
              padding: "34px 30px 36px",
              border: "1px solid var(--line)",
              borderRadius: 16,
              background: "var(--soft)",
            }}
          >
            <span className="ic">{service.icon}</span>
            <h3
              style={{
                margin: "28px 0 10px",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                margin: "0 0 20px",
                color: "var(--mut)",
                fontSize: 16,
                lineHeight: 1.6,
              }}
            >
              {service.description}
            </p>
            <div className="mono" style={{ fontSize: 13, color: "var(--ink)" }}>
              {service.stack}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
