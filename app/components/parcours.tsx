import { ArrowUpRight } from "./icons";

const EXPERIENCES = [
  {
    period: "2025 – 2026",
    title: "Création de Rogo",
    description:
      "Conception et développement de Rogo, une application web accessible en ligne.",
    linkLabel: "Voir Rogo",
    href: "http://200.141.3.80:3000/",
  },
  {
    period: "2024 – 2025",
    title: "Création de linked-brain",
    description:
      "Création de la plateforme éducative de l'association Linked-Brain : cours, exercices et quiz gratuits, conformes au programme malgache, pour aider les lycéens à réviser en mathématiques, physique-chimie, SVT, français et histoire-géographie. Le site fonctionne sur téléphone et les cours se consultent sans inscription.",
    linkLabel: "Voir linked-brain.com",
    href: "https://linked-brain.com/",
  },
];

const CERTIFICATES = [
  {
    title: "Monétisation d'applications et services digitaux",
    description:
      "Attestation de fin de formation délivrée par Orange Digital Center Madagascar : stratégies pour créer de la valeur et générer des revenus avec des applications et services numériques.",
    tags: ["Orange Digital Center", "5 au 8 mai 2026"],
    href: "https://drive.google.com/file/d/1VJYpdgegAgDhtazrVW4NHv1sX0iR64Ve/view?usp=sharing",
    image: "/src/certificat-monetisation.jpg",
    alt: "Attestation de fin de formation Orange Digital Center, Monétisation d'applications et services digitaux",
  },
  {
    title: "Responsive Web Design",
    description:
      "Certification de développeur freeCodeCamp en conception de sites web adaptatifs, représentant environ 300 heures de travail.",
    tags: ["freeCodeCamp", "6 juillet 2026", "≈ 300 h"],
    href: "https://www.freecodecamp.org/certification/djenidisimple/responsive-web-design-v9",
    image: "/src/certificat-responsive-web-design.jpg",
    alt: "Certification freeCodeCamp Responsive Web Design",
  },
];

export function Parcours() {
  return (
    <section
      id="parcours"
      className="wrap"
      style={{ paddingTop: 130, paddingBottom: 20 }}
    >
      <div className="eyebrow" style={{ marginBottom: 16 }}>
        Parcours
      </div>
      <h2 className="h2" style={{ maxWidth: 640, marginBottom: 56 }}>
        Des projets lancés, des compétences validées.
      </h2>

      <div className="path">
        <div>
          <h3 className="ph">Expériences</h3>
          <ol className="xp">
            {EXPERIENCES.map((experience) => (
              <li key={experience.title}>
                <span className="mono yr">{experience.period}</span>
                <span className="xt">{experience.title}</span>
                <p className="xd">{experience.description}</p>
                <a
                  className="xl"
                  href={experience.href}
                  target="_blank"
                  rel="noopener"
                >
                  {experience.linkLabel} <ArrowUpRight />
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="ph">Certificats</h3>
          <div className="certs">
            {CERTIFICATES.map((certificate) => (
              <a
                key={certificate.title}
                className="card"
                href={certificate.href}
                target="_blank"
                rel="noopener"
              >
                <div className="cimg">
                  <img
                    src={certificate.image}
                    alt={certificate.alt}
                    loading="lazy"
                  />
                </div>
                <div className="cbody">
                  <div>
                    <h3
                      style={{
                        margin: "0 0 8px",
                        fontSize: 22,
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {certificate.title}
                    </h3>
                    <p
                      style={{
                        margin: "0 0 18px",
                        color: "var(--mut)",
                        fontSize: 16,
                        lineHeight: 1.6,
                      }}
                    >
                      {certificate.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {certificate.tags.map((tag) => (
                        <span key={tag} className="pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="go">
                    <ArrowUpRight />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
