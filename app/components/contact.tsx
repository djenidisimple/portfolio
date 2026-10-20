import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "./icons";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/djenidisimple",
    icon: <GithubIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/djenidi-djaomananjara-55b5753a4/",
    icon: <LinkedinIcon />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/djenidisimple",
    icon: <InstagramIcon />,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="wrap"
      style={{ paddingTop: 130, paddingBottom: 40 }}
    >
      <div
        className="box"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--tint)",
          border: "1px solid var(--line)",
          borderRadius: 24,
          padding: "96px 48px",
          textAlign: "center",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: -200,
            width: 800,
            height: 500,
            marginLeft: -400,
            background: "radial-gradient(closest-side, var(--tint2), transparent)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative" }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>
            Contact
          </div>
          <h2
            style={{
              margin: "0 auto",
              maxWidth: 720,
              fontSize: "clamp(34px, 4.6vw, 62px)",
              lineHeight: 1.06,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            Un projet en tête ? Parlons-en.
          </h2>
          <p
            style={{
              margin: "22px auto 0",
              maxWidth: 480,
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--mut)",
            }}
          >
            Décrivez-moi votre besoin, je reviens vers vous rapidement.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
              marginTop: 38,
            }}
          >
            <a
              className="btn btn-d"
              href="mailto:djenidigauss@gmail.com"
              style={{ height: 58, padding: "0 32px", fontSize: 17 }}
            >
              <MailIcon />
              djenidigauss@gmail.com
            </a>
            <div style={{ display: "flex", gap: 12 }}>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  className="soc"
                  href={social.href}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
