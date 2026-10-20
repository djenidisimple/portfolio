import { ArrowUpRight, SparkleIcon } from "./icons";

const windowShadow = "0 10px 30px -18px rgba(21,23,31,.3)";

function GSallesVisual() {
  return (
    <div className="vis" style={{ background: "#F2F4FB", padding: 28 }}>
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          padding: 18,
          height: "100%",
          boxSizing: "border-box",
          boxShadow: windowShadow,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "44px repeat(4, minmax(0, 1fr))",
            gap: 7,
            gridTemplateRows: "repeat(4, 1fr)",
            height: "100%",
          }}
        >
          <span />
          <span className="mono" style={{ fontSize: 10, color: "var(--mut)" }}>
            Lun
          </span>
          <span className="mono" style={{ fontSize: 10, color: "var(--mut)" }}>
            Mar
          </span>
          <span className="mono" style={{ fontSize: 10, color: "var(--mut)" }}>
            Mer
          </span>
          <span className="mono" style={{ fontSize: 10, color: "var(--mut)" }}>
            Jeu
          </span>

          <span
            className="mono"
            style={{ fontSize: 10, color: "var(--mut)", alignSelf: "center" }}
          >
            A
          </span>
          <div
            style={{
              gridColumn: "span 2",
              background: "var(--tint3)",
              borderRadius: 9,
            }}
          />
          <div style={{ background: "var(--soft)", borderRadius: 9 }} />
          <div style={{ background: "var(--soft)", borderRadius: 9 }} />

          <span
            className="mono"
            style={{ fontSize: 10, color: "var(--mut)", alignSelf: "center" }}
          >
            B
          </span>
          <div style={{ background: "var(--soft)", borderRadius: 9 }} />
          <div style={{ background: "var(--tint2)", borderRadius: 9 }} />
          <div
            style={{
              gridColumn: "span 2",
              background: "var(--tint3)",
              borderRadius: 9,
            }}
          />

          <span
            className="mono"
            style={{ fontSize: 10, color: "var(--mut)", alignSelf: "center" }}
          >
            C
          </span>
          <div style={{ background: "var(--tint2)", borderRadius: 9 }} />
          <div style={{ background: "var(--soft)", borderRadius: 9 }} />
          <div style={{ background: "var(--soft)", borderRadius: 9 }} />
          <div style={{ background: "var(--tint3)", borderRadius: 9 }} />
        </div>
      </div>
    </div>
  );
}

function LinkedBrainVisual() {
  return (
    <div
      className="vis"
      style={{
        background: "#F5F3FB",
        padding: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          padding: 22,
          width: "100%",
          maxWidth: 360,
          boxSizing: "border-box",
          boxShadow: windowShadow,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            className="mono"
            style={{
              fontSize: 11,
              background: "var(--soft)",
              padding: "4px 10px",
              borderRadius: 8,
              color: "var(--mut)",
            }}
          >
            PDF
          </span>
          <div
            style={{
              width: 90,
              height: 6,
              borderRadius: 3,
              background: "var(--soft)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "62%",
                height: "100%",
                background: "var(--accent)",
              }}
            />
          </div>
        </div>
        <div
          style={{
            height: 10,
            width: "84%",
            borderRadius: 5,
            background: "var(--ink)",
            margin: "4px 0 6px",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            border: "1px solid var(--line)",
            borderRadius: 12,
            padding: "11px 14px",
          }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              border: "2px solid #C9CDD9",
            }}
          />
          <span
            style={{
              height: 7,
              width: "55%",
              borderRadius: 4,
              background: "var(--soft)",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            border: "1px solid var(--accent)",
            background: "var(--tint)",
            borderRadius: 12,
            padding: "11px 14px",
          }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              border: "4px solid var(--accent)",
              boxSizing: "border-box",
            }}
          />
          <span
            style={{
              height: 7,
              width: "66%",
              borderRadius: 4,
              background: "var(--tint3)",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            border: "1px solid var(--line)",
            borderRadius: 12,
            padding: "11px 14px",
          }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              border: "2px solid #C9CDD9",
            }}
          />
          <span
            style={{
              height: 7,
              width: "42%",
              borderRadius: 4,
              background: "var(--soft)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function DevReviewVisual() {
  return (
    <div
      className="vis"
      style={{
        background: "#F1F7F5",
        padding: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 14,
      }}
    >
      <div
        className="mono code"
        style={{
          background: "#fff",
          borderRadius: 8,
          padding: "16px 0",
          fontSize: 12,
          lineHeight: 2,
          boxShadow: windowShadow,
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "0 18px", color: "var(--mut)" }}>
          {"12\u00a0\u00a0\u00a0const total = sum(items)"}
        </div>
        <div style={{ padding: "0 18px", background: "#FDF1EE" }}>
          {"13\u00a0\u00a0-\u00a0return total / n"}
        </div>
        <div style={{ padding: "0 18px", background: "#E8F5EF" }}>
          {"13\u00a0\u00a0+\u00a0return n ? total / n : 0"}
        </div>
      </div>
      <div
        style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
      >
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "var(--accent)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "none",
          }}
        >
          <SparkleIcon />
        </span>
        <div
          style={{
            background: "#fff",
            borderRadius: "4px 14px 14px 14px",
            padding: "11px 15px",
            fontSize: 14,
            lineHeight: 1.5,
            boxShadow: windowShadow,
          }}
        >
          Division par zéro possible si la liste est vide.
        </div>
      </div>
    </div>
  );
}

function EduManageVisual() {
  return (
    <div className="vis" style={{ background: "#FAF4F0", padding: "28px 28px 0" }}>
      <div
        style={{
          background: "#fff",
          borderRadius: "8px 8px 0 0",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: windowShadow,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 6,
            padding: "12px 16px",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#E3E5EC",
            }}
          />
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#E3E5EC",
            }}
          />
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#E3E5EC",
            }}
          />
        </div>
        <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
          <div
            className="vsb"
            style={{
              width: 96,
              borderRight: "1px solid var(--line)",
              padding: 14,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              flex: "none",
            }}
          >
            <div
              style={{
                height: 10,
                borderRadius: 5,
                background: "var(--tint3)",
              }}
            />
            <div
              style={{
                height: 10,
                width: "70%",
                borderRadius: 5,
                background: "var(--soft)",
              }}
            />
            <div
              style={{
                height: 10,
                width: "84%",
                borderRadius: 5,
                background: "var(--soft)",
              }}
            />
          </div>
          <div
            style={{
              flex: 1,
              padding: "16px 18px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              minWidth: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: "var(--tint2)",
                  flex: "none",
                }}
              />
              <span
                style={{
                  height: 7,
                  flex: 1,
                  borderRadius: 4,
                  background: "var(--soft)",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  background: "#E8F5EF",
                  color: "#1F6B4C",
                  padding: "4px 10px",
                  borderRadius: 999,
                }}
              >
                Payé
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: "var(--tint2)",
                  flex: "none",
                }}
              />
              <span
                style={{
                  height: 7,
                  flex: 1,
                  borderRadius: 4,
                  background: "var(--soft)",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  background: "#FDF1E4",
                  color: "#8A4B0F",
                  padding: "4px 10px",
                  borderRadius: 999,
                }}
              >
                En attente
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: "var(--tint2)",
                  flex: "none",
                }}
              />
              <span
                style={{
                  height: 7,
                  flex: 1,
                  borderRadius: 4,
                  background: "var(--soft)",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  background: "#E8F5EF",
                  color: "#1F6B4C",
                  padding: "4px 10px",
                  borderRadius: 999,
                }}
              >
                Payé
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    title: "G-Salles EMIT",
    description:
      "Application de planification et de réservation de salles pour l'EMIT.",
    tags: ["Planning", "Réservation"],
    href: "https://github.com/djenidisimple",
    visual: <GSallesVisual />,
  },
  {
    title: "linked-brain.com",
    description:
      "Plateforme éducative : bibliothèque de PDF, contenus de leçons et système de quiz.",
    tags: ["Éducation", "Quiz"],
    href: "https://linked-brain.com",
    visual: <LinkedBrainVisual />,
  },
  {
    title: "DevReview AI",
    description:
      "Revue de code et mentorat assistés par IA (FullStack Mentor).",
    tags: ["IA", "Code review"],
    href: "https://github.com/djenidisimple",
    visual: <DevReviewVisual />,
  },
  {
    title: "EduManage",
    description:
      "Application de bureau Qt/C++ : élèves, classes, paiements, enseignants et administration.",
    tags: ["Qt / C++", "Desktop"],
    href: "https://github.com/djenidisimple",
    visual: <EduManageVisual />,
  },
];

export function Projects() {
  return (
    <section
      id="projets"
      className="wrap"
      style={{ paddingTop: 120, paddingBottom: 20 }}
    >
      <div style={{ maxWidth: 640, marginBottom: 56 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          Projets
        </div>
        <h2 className="h2">Du concret, pensé pour les utilisateurs.</h2>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            className="card"
            href={project.href}
            style={{ flex: "1 1 460px", minWidth: 0 }}
          >
            {project.visual}
            <div className="cbody">
              <div>
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: 26,
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    margin: "0 0 18px",
                    color: "var(--mut)",
                    fontSize: 16,
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.tags.map((tag) => (
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
    </section>
  );
}
