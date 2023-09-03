"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-400 cursor-pointer my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20 hover:scale-110 transition-transform"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      whileHover={{ scale: 1.1 }}
    ></motion.div>
  );
}

// cursor-pointer hover:scale-110 transition-transform