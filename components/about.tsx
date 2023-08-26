"use client";

import React, {useState} from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function About() {
  const { ref } = useSectionInView("About");

  const [showSecondParagraph, setShowSecondParagraph] = useState(false);

  const toggleSecondParagraph = () => {
    setShowSecondParagraph(!showSecondParagraph)
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      {showSecondParagraph ? (
        <motion.p
          initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.9 }}
        >
        <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
        </motion.p>
      ): null}
      <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            toggleSecondParagraph();
          }}
          className="group justify-center bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          {showSecondParagraph ? "Read less" : "Read more"}{" "}
        </Link>
    </motion.section>
  );
}
