import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Services } from "./components/services";
import { Contact } from "./components/contact";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-x-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <Hero />
        <Projects />
        <Services />
        <Contact />
      </div>
    </div>
  );
}
