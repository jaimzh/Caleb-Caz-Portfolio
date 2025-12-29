"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LottieAndSVG } from "@/components/ui/lottie-and-svg";
import { containerVariants, itemVariants } from "@/lib/animations";

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
          className="w-full h-full scale-200 left-4 bottom-2"
        />
      </motion.div>

      <motion.p 
        variants={itemVariants}
        className="text-center md:text-left font-semibold text-primary whitespace-pre-wrap w-full"
      >
        Voice Actor  ●  Sound Designer  ●  Singer 
      </motion.p>

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
          variant="caleb-slide-reverse"
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
