"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { AboutImage } from "./about-image";
import { AboutInfo } from "./about-info";
import { Stroke } from "@/components/ui/stroke";
import { Strokee } from "@/components/ui/strokke";

export default function About() {
  return (
    <section id="about" className="w-full pt-0 md:py-20 px-6  ">
      <motion.div
        variants={staggerContainer(0.4)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row items-center md:items-start   justify-evenly "
      >
        <AboutImage />

        {/* Mobile overlay width master */}
        <div className="flex justify-center items-center relative -mt-20 md:mt-0 md:static z-20 p-7        xs:w-[clamp(100%,90vw,600px)]  max-w-[500px] md:max-w-[600px] transition-all duration-500 ease-in-out">
          <AboutInfo />
        </div>
      </motion.div>
    </section>
  );
}
