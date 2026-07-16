import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";

export default function Home() {
  return (
    <div className="p-3.5">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}
