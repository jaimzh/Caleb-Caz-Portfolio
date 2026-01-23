"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { AnimatedHeading } from "@/components/ui/animated-heading";
import { Mic2, Laptop, Settings, Disc } from "lucide-react";

const equipmentList = [
  {
    category: "Microphone",
    items: "Electro-Voice RE20, AT2020",
    icon: Mic2,
  },
  {
    category: "DAW",
    items: "Adobe Audition, Audacity",
    icon: Laptop,
  },
  {
    category: "Interface",
    items: "Scarlett Solo",
    icon: Disc,
  },
  {
    category: "Set Up",
    items: "Source Connect Standard",
    icon: Settings,
  },
];

export default function Equipment() {
  return (
    <section id="equipment" className="w-full py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <AnimatedHeading heading="Equipment" />
            <p className="text-text-muted max-w-2xl mx-auto mt-4">
              A list of the professional equipment and software I use for my
              recordings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {equipmentList.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="caleb-card group flex flex-col items-center p-8"
              >
                <div className="mb-4 p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.category}</h3>
                <p className="text-text-muted text-center">{item.items}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
