"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export function AboutImage() {
  return (
    <motion.div variants={fadeIn("right")}>
      <div className="relative w-[300px] max-w-[500px] md:w-[500px] aspect-square overflow-hidden rounded-3xl bg-none">
        <Image
          src="/images/Caleb svg.svg"
          alt="Caleb Caz"
          fill
          className="object-cover scale-110"
          priority
        />
     
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-bg to-transparent pointer-events-none z-10 "  />
      </div>
    </motion.div>
  );
}
