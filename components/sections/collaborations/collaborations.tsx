"use client";

import React from 'react'
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import BentoCollabs from "./bento-collabs";

function Collaborations() {
  return (
    <section id="collaborations" className=" w-full py-6   ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto flex flex-col items-center gap-12"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center flex flex-col items-center"
        >
          <h2>Collaborations</h2>
          <p className="max-w-2xl">
            A glimpse into the incredible projects and partners I&apos;ve had the pleasure of working with.
          </p>
        </motion.div>

        {/* Bento Grid Section */}
        
          <BentoCollabs />
       
      </motion.div>
    </section>
  )
}

export default Collaborations