"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LottieAndSVG } from "@/components/ui/lottie-and-svg";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Headphones, Mic2Icon, Music4Icon } from "lucide-react";

export function AboutInfo() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center gap-8 w-full md:items-start"
    >
      <motion.div 
        variants={itemVariants}
        className="relative overflow-hidden w-full max-w-[300px] h-[100px] md:max-w-full md:h-[120px] aspect-5/2 flex items-center justify-center"
      >
        <LottieAndSVG
          lottieSrc="/animations/Caleblogofile.lottie"
          svgSrc="/images/Caleb logo round.svg"
          alt="Caleb Caz Logo"
          className="w-full h-full scale-200 left-4 bottom-2 md:origin-right md:left-40 md:bottom-0"
        />
      </motion.div>

      <motion.div
  variants={itemVariants}
  className="w-full text-xs md:text-base font-semibold text-primary"
>
  <div className="flex items-center justify-center md:justify-start gap-4 whitespace-nowrap">
    <span className="inline-flex items-center gap-2">
      <Mic2Icon className="size-4 shrink-0" />
      <span>Voice Actor</span>
    </span>

    <span className="inline-flex items-center gap-2">
      <Headphones className="size-4 shrink-0" />
      <span>Sound Designer</span>
    </span>

    <span className="inline-flex items-center gap-2">
      <Music4Icon className="size-4 shrink-0" />
      <span>Singer</span>
    </span>
  </div>
</motion.div>


      <motion.div 
        variants={itemVariants}
        className="flex flex-col gap-6 text-base leading-loose text-text-muted text-center md:text-left w-full tracking-wide"
      >
        <p>
          Caleb Caz is a New York–based voice actor specializing in 
          <span className="text-text font-semibold"> audiobooks, commercials, and video games</span>. 
          Beyond the mic, he crafts original music jingles, immersive soundscapes, and foley that breathe life into every project.
          Collaborations include industry names like <span className="font-medium text-text">Sling TV</span>, 
          <span className="font-medium text-text"> Comical Realm Animations</span>, and 
          <span className="font-medium text-text"> Slug Films</span>, alongside viral creators such as Jaimz Art and 360 Animations.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button
          className="px-10 py-6 rounded-full font-semibold"
          variant="btn-caleb"
          size="lg"
        >
          Contact Me
        </Button>
      </motion.div>



      {/* <div className="caleb-card">
  <h3>Testing the Effect</h3>
  <p>Hover over me to see the light hit the top border!</p>
</div> */}
    </motion.div>
  );
}
