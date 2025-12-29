"use client";

import React from "react";
import { motion } from "framer-motion";

interface BentoPlayerProps {
  videoUrl: string;
  title: string;
  onClose: () => void;
}

export const BentoPlayer = ({ videoUrl, title, onClose }: BentoPlayerProps) => {
  return (
    <motion.div
      key="player"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-black z-30 relative"
    >
      <iframe
        src={videoUrl}
        title={title}
        className="w-full h-full absolute inset-0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      {/* Close button for iframe overlay */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-40 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </motion.div>
  );
};
