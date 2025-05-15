import Hero from "./Hero";
import Skills from "@/components/Skills";
import About from "./About";
import Contact from "./Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import Projects from "./Projects";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        <Hero />
        <About />
        
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      
      </main>
    </>
  );
}
