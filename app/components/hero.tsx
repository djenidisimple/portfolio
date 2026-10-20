const STACK = [
  "Next.js",
  "TypeScript",
  "ASP.NET Core",
  "Spring Boot",
  "PostgreSQL",
  "Qt / C++",
];

export function Hero() {
  return (
    <>
      <section style={{ position: "relative" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: -220,
            width: 1100,
            height: 760,
            marginLeft: -550,
            background: "radial-gradient(closest-side, var(--tint2), transparent)",
            opacity: 0.9,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: -160,
            top: 120,
            width: 620,
            height: 520,
            background: "radial-gradient(closest-side, #EAF3F8, transparent)",
            pointerEvents: "none",
          }}
        />

        <div
          id="top"
          className="wrap"
          style={{
            position: "relative",
            paddingTop: 72,
            paddingBottom: 8,
            textAlign: "center",
          }}
        >
          <h1
            className="rise"
            style={{
              margin: "0 auto",
              maxWidth: 880,
              fontSize: "clamp(34px, 6vw, 76px)",
              lineHeight: 1.04,
              fontWeight: 800,
              letterSpacing: "-0.045em",
              animationDelay: ".1s",
            }}
          >
            Des applications web complètes, conçues{" "}
            <span style={{ color: "var(--accent)" }}>avec soin.</span>
          </h1>
          <p
            className="rise"
            style={{
              margin: "26px auto 0",
              maxWidth: 600,
              fontSize: 19,
              lineHeight: 1.6,
              color: "var(--mut)",
              animationDelay: ".2s",
            }}
          >
            Je suis Djenidi Djaomananjara. Je transforme des idées en solutions
            web performantes, de l&apos;interface jusqu&apos;à la base de données.
          </p>
          <div
            className="rise"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 14,
              marginTop: 36,
              animationDelay: ".3s",
            }}
          >
            <a className="btn btn-d" href="#projets">
              Voir mes projets
            </a>
            <a className="btn btn-g" href="#contact">
              Me contacter
            </a>
          </div>
        </div>
      </section>

      <section
        className="wrap"
        style={{ paddingTop: 100, paddingBottom: 20, textAlign: "center" }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--mut)",
            marginBottom: 26,
          }}
        >
          Les outils avec lesquels je travaille
        </div>
        <div
          className="stk"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "14px 44px",
          }}
        >
          {STACK.map((tool) => (
            <span
              key={tool}
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "var(--mut)",
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
