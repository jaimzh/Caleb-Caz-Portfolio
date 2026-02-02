"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { AudioCard } from "@/components/sections/demos/audio-card";
import { AnimatedHeading } from "@/components/ui/animated-heading";

interface Demo {
  _id: string;
  title: string;
  audioFile: {
    asset: {
      url: string;
    };
  };
}

interface DemosClientProps {
  demos: Demo[];
}

export function DemosClient({ demos }: DemosClientProps) {
  return (
    <section id="demos" className="w-full px-6 py-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto flex flex-col items-center gap-12"
      >
        <motion.div variants={itemVariants} className="text-center">
          <AnimatedHeading heading="Demos" />
          <p className="max-w-2xl">
            Explore my latest voice over and sound design samples across various
            genres.
          </p>
        </motion.div>

        <div className="grid items-center justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-4xl">
          {demos.length > 0 ? (
            demos.map((demo) => (
              <motion.div key={demo._id} variants={itemVariants}>
                <AudioCard
                  title={demo.title}
                  audioSrc={demo.audioFile.asset.url}
                />
              </motion.div>
            ))
          ) : (
            <motion.div variants={itemVariants}>
              <p className="text-text-muted">No demos available yet.</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}