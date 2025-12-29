"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants, premiumCard, fadeIn, itemVariants } from "@/lib/animations";

import { AudioCard } from "@/components/sections/demos/audio-card";

export default function Demos() {
  const sampleAudio = "https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3";

  return (
    <section id="demos" className="w-full px-6  py-6  ">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto flex flex-col items-center gap-12"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >


    

          
          <h2>Demos</h2>
          <p className="max-w-2xl">
            Explore my latest voice over and sound design samples across various genres.
          </p>
        </motion.div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-4xl">
            <motion.div variants={itemVariants}>
              <AudioCard 
                title="Commercial Demo" 
                audioSrc={sampleAudio} 
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <AudioCard 
                title="Animation Demo" 
                audioSrc={sampleAudio} 
              />
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
