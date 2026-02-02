"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { AboutImage } from "./about-image";
import { AboutInfoClient } from "./about-info-client";
import { Stroke } from "@/components/ui/stroke";
import { Strokee } from "@/components/ui/strokke";

interface AboutProps {
  description: string;
}

export default function About({ description }: AboutProps) {
  return (
    <section id="about" className="w-full pt-0 md:py-20 px-6  ">
      {/* this is stroke 
      <Stroke className="text-green-500"/>
      this is strokkeeee
      <Strokee className="text-red-500"/>  */}
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
          <AboutInfoClient description={description} />
        </div>
      </motion.div>
    </section>
  );
}
