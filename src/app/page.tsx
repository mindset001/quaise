import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
