import Image from "next/image";
import Hero from "@/components/Hero";
import Projects from "../components/Projects.jsx";
import Stacks from "../components/Stacks.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e1111] text-[#FAFAFA] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:30px_30px]">
      <section className="relative z-50 max-w-7xl mx-auto px-6 py-20">
        <Hero />
        <Stacks />
        <Projects />
        <Contact />
      </section>
    </div>
  );


}
