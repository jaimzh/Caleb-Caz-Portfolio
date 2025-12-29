"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { BentoItem } from "./data";

interface BentoCoverProps {
  item: BentoItem;
  onPlay: () => void;
}

export const BentoCover = ({ item, onPlay }: BentoCoverProps) => {
  return (
    <motion.div
      key="cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full relative"
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />

      {/* Theme-aware Overlays */}
      {/* Light Mode: Light gradient, dark text eventually but usually bento cards look better with readable text. 
          User requested: "dark overlay on top [in dark mode] and light mode we have light overlay"
      */}
      {/* Dynamic Dark Overlays for High Contrast Text */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent dark:from-black/95 dark:via-black/50 dark:to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        {/* Bottom Section: Text and Play */}
        <div className="space-y-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPlay();
            }}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-all shadow-xl"
          >
            <Play size={20} fill="currentColor" className="ml-1" />
          </button>

          <div className="text-white">
            <h3
              className={`font-bold leading-tight ${
                item.size === "large" ? "text-2xl mb-2" : "text-lg mb-1"
              }`}
            >
              {item.title}
            </h3>
            <p className="text-sm text-white/70 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              {item.desc}
            </p>
            <div className="flex items-center gap-2 mt-3 opacity-60 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/10 border border-white/10">
                {item.stats}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
