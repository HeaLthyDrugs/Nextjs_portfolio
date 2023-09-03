import React, { useState } from "react";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  livePreview,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      className="group mb-3 sm:mb-8 last:mb-0 relative"
    >
      <motion.section
        className={`bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] transition ${
          isHovered
            ? "hover:bg-gray-200 sm:group-even:pl-8"
            : "sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute top-8 w-[28.25rem] rounded-2xl shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:right-[initial]"
        />

        {isHovered && (
       <motion.div
       initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
       animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
       className="absolute top-0 left-0 w-full h-full bg-gray-200 bg-opacity-60 backdrop-blur-md rounded-lg flex flex-col items-center justify-center text-white"
     >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 mt-6 text-gray-700 px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 ease-in-out"
            >
              View {' '}
              {livePreview}
            </motion.button>
            <motion.div
              className="text-3xl mt-9 text-gray-800 bg-opacity-80 rounded-full shadow-2xl p-4 mt-2 font-semibold"
            >
              {title}
            </motion.div>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
}
