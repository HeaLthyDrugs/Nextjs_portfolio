"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { LoadingProvider } from "@/components/LoadingProvider";
import SectionDivider from "@/components/section-divider";



export default function Home() {
  return (
    <LoadingProvider>
      <main className="flex flex-col items-center px-4 snap-center">
        <Intro />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Contact />
      </main>
    </LoadingProvider>
  );
}
