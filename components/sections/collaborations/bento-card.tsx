"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { BentoItem } from "./data";
import { BentoPlayer } from "./bento-player";
import { BentoCover } from "./bento-cover";

export const BentoCard = ({ item }: { item: BentoItem }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const gridClasses = {
    large: "md:col-span-2 md:row-span-2",
    wide: "md:col-span-2 md:row-span-1",
    normal: "col-span-1 row-span-1",
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x:
        item.animationDirection === "from-left"
          ? -50
          : item.animationDirection === "from-right"
          ? 50
          : 0,
      y:
        item.animationDirection === "from-top"
          ? -50
          : item.animationDirection === "from-bottom"
          ? 50
          : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: item.id * 0.2, // Staggered delay
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`relative group overflow-hidden rounded-3xl bg-bg-light border border-border shadow-sm ${
        gridClasses[item.size] || "col-span-1"
      } h-full min-h-[300px] hover:shadow-xl hover:border-highlight/30 transition-colors duration-500`}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <BentoPlayer
            videoUrl={item.videoUrl}
            title={item.title}
            onClose={() => setIsPlaying(false)}
          />
        ) : (
          <BentoCover item={item} onPlay={() => setIsPlaying(true)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BentoCard;
