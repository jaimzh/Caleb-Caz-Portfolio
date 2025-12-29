"use client";

import React from "react";
import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-10">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-px w-full max-w-4xl bg-linear-to-r from-transparent via-border to-transparent"
      />
    </div>
  );
}
