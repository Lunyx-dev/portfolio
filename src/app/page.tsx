import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Looking from "@/components/Looking";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-off">
      <Navbar />
      <Hero />
      <About />
      <Looking />
      <Projects />
      <Skills />
      <Contact />
      <footer className="flex items-center justify-between px-9 py-3.5 text-[11px] text-muted2 tracking-wide border-t border-off3">
        <span>Lunyx · Développeur Web Fullstack · Remote-first · 2025</span>
        <span>lunyx.dev@outlook.fr</span>
      </footer>
    </main>
  );
}
