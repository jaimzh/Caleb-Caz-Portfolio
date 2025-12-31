"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Stroke = ({ className = "" }) => {
  const containerRef = useRef(null);
  // This hook returns 'true' only when the element is actually on screen
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  return (
    <div ref={containerRef} className={className} style={{ width: "100%" }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 655 71"
        stroke="currentColor"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="matrix(0.319618, 0, 0, 0.0460826, 0, 0)">
          <g transform="matrix(2.47293, 0.255839, -0.0466641, 21.6978, -370.146, -11083.6)">
            <motion.path
              d="M175.99,548.096C512.701,497.382 876.008,504.937 971.265,514.592C917.91,517.067 823.268,518.436 719.109,522.028C650.164,524.405 577.048,527.757 508.976,533.046C407.233,540.953 316.758,553.19 268.311,572.98C405.101,555.547 626.541,535.463 656.1,539.104"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              
              // 1. Start at 0
              initial={{ pathLength: 0 }}
              
              // 2. Only animate to 1 IF isInView is true
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              
              transition={{
                duration: 1.5,
                delay: 0.2, // This is your "timer" - it waits 0.2s after scroll
                ease: "easeOut",
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};