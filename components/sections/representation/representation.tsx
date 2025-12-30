"use client";

import React from "react";
import { motion } from "framer-motion";
import { AGENCIES } from "./data";
import { RepresentationCard } from "./representation-card";
import { staggerContainer, fadeIn, containerVariants, itemVariants } from "@/lib/animations";

export default function Representation() {
  return (
    <section id="representation" className="w-full py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={containerVariants}
         initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
          
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="">Representation</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <motion.div variants={itemVariants}>
              <RepresentationCard 
                agency={AGENCIES[0]} 
                classname=" scale-140"
               
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <RepresentationCard 
                agency={AGENCIES[1]} 
                classname="invert dark:invert-0"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <RepresentationCard 
                agency={AGENCIES[2]} 
               
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
