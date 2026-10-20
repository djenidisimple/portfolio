const FACTS = [
  { label: "Spécialité", value: "Développement fullstack" },
  { label: "Basé à", value: "Madagascar" },
  { label: "Frontend", value: "Next.js (App Router), React, TypeScript" },
  { label: "Backend", value: "ASP.NET Core, Spring Boot, Node.js" },
  { label: "Données", value: "PostgreSQL, MongoDB, Prisma" },
];

export function About() {
  return (
    <section
      id="apropos"
      className="wrap"
      style={{ paddingTop: 130, paddingBottom: 20 }}
    >
      <div className="about">
        <figure className="portrait">
          <img
            src="/src/avatar.jpg"
            alt="Portrait illustré de Djenidi Djaomananjara"
            width={400}
            height={400}
            loading="lazy"
          />
        </figure>
        <div className="about-t">
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            À propos
          </div>
          <h2 className="h2" style={{ marginBottom: 24 }}>
            Un seul développeur, toute la chaîne.
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--mut)",
            }}
          >
            Je maîtrise le frontend avec React et Next.js, le backend avec
            ASP.NET Core, Spring Boot et Node.js, et la modélisation des données
            sur PostgreSQL. Mon objectif : des produits fiables, rapides et
            agréables à utiliser, du premier écran à la dernière requête.
          </p>
        </div>
      </div>
      <dl className="facts">
        {FACTS.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
