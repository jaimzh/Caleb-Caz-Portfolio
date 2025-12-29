"use client";

import { motion } from "framer-motion";

export function Spotlight() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden dark:block">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
        className="absolute left-1/2 -top-10 h-[500px] w-[600px] -translate-x-1/2 bg-white/3 blur-[80px]"
        style={{
          clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
        }}
      />
    </div>
  );
}
