import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Experience } from "./components/experience";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";

export default function PortfolioPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#E9E9E9]">
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Experience /> */}
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}
