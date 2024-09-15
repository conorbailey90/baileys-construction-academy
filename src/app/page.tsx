import Image from "next/image";
import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/ui/mode-toggle";
import About from "@/components/About";
import FeaturedHighlights from "@/components/FeaturedHighlights";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  
  return (
  <main>
    <Hero />
    <About />
    <FeaturedHighlights />
    <Courses />
    <Testimonials />
    {/* <ModeToggle /> */}
  </main>
  );
}
