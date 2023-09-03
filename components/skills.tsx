"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  // const { ref } = useSectionInView("Background");

  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Technologies</SectionHeading>
      <ul className="grid grid-cols-3 gap-10 items-center justify-center text-lg text-gray-800">
        {skillsData.map((link) => (
          <motion.li
          key={link.hash}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          className="mt-3 ml-3 text-3xl h-10 w-10 rounded-full dark:text-white/80 hover:animate-ping cursor-pointer "
            viewport={{
              once: true,
            }}
            // custom={index}
          >
              <Link
                className="justify-center"
                href={link.hash}
              >
                {link.icon}
              </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
