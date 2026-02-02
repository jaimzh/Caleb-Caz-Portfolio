"use client";

import React from "react";
import { motion } from "framer-motion";
import { Agency } from "./data";
import { RepresentationCard } from "./representation-card";
import { containerVariants, itemVariants } from "@/lib/animations";
import { AnimatedHeading } from "@/components/ui/animated-heading";

interface RepresentationClientProps {
  agencies: Agency[];
}

export function RepresentationClient({ agencies }: RepresentationClientProps) {
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
            <AnimatedHeading heading="Representation" />
            <p className="max-w-2xl">
              Details on my professional representation and the agencies that
              handle bookings and enquiries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {agencies.length > 0 ? (
              agencies.map((agency, index) => (
                <motion.div key={agency.id} variants={itemVariants}>
                  <RepresentationCard
                    agency={agency}
                    // Apply specific styling based on index/known agency (optional, mimicking original hardcoded styles if possible)
                    // Original had scale-140 for 1st, invert for 2nd. We can try to match loosely or just leave uniform.
                    // For perfectly matching the original hardcoded visuals, we'd need metadata in Sanity or just checking name.
                    classname={
                      index === 0
                        ? "scale-140"
                        : index === 1
                          ? "invert dark:invert-0"
                          : ""
                    }
                  />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                No representation info found.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
