import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { About } from "./components/about";
import { Parcours } from "./components/parcours";
import { Services } from "./components/services";
import { Contact } from "./components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Parcours />
      <Services />
      <Contact />
      <footer
        className="wrap"
        style={{
          paddingTop: 28,
          paddingBottom: 44,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 12,
          fontSize: 14,
          color: "var(--mut)",
        }}
      >
        <span>2026 Djenidi Djaomananjara</span>
        <span>Développeur Fullstack - Madagascar</span>
      </footer>
    </>
  );
}
