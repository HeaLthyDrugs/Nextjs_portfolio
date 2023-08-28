"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function About() {
  const { ref } = useSectionInView("About");

  const [showSecondParagraph, setShowSecondParagraph] = useState(false);

  const toggleSecondParagraph = () => {
    setShowSecondParagraph(!showSecondParagraph);
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
        <span className="font-bold">I am a Developer, Freelancer, Sketch Artist & A Gamer</span> <br />
        In the summer of 21, I started programming. & I started with ...
      </p>
      {showSecondParagraph ? (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p>
            <span className="font-bold">Python</span> later than most, I dived into the Development stuff and still in there. Now talking about <span className="font-bold">"What I have done so far in this field ?" </span> - I have a 3.5 star rating in HackerRank for Problem solving , Contributor to Cal.com & GitHub CLi , Blogger at Hashnode(Current) , Worked on Hackathon Projects.
          </p>
        </motion.p>
      ) : null}
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
