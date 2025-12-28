"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { AboutImage } from "./about-image";
import { AboutInfo } from "./about-info";


export default function About() {
  return (
    <section id="about" className="bg-none">
      <motion.div 
        variants={staggerContainer(0.4)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10 justify-around bg-none"
      >

        
        <AboutImage />
        <AboutInfo />
      </motion.div>
    </section>
  );
}
