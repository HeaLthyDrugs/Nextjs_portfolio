"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
  // const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello, Lads👋 I'm <span className="font-bold">Manish Vishwakarma</span>, Self-taught since my younge stage,
        I love learning new things to improve my skills. and During my experiences,I participated in several hackathons organized by my college.These events were intensive periods of one to two weeks during which we had to develop a project meeting the requirements of the client. & now I'm an Independent Developer with intrested in using various technologies to build optimised website with animation.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        Mobile games. and have a Hands on Experience in Sketching, Illustration etc.
      </p>
    </motion.section>
  );
}