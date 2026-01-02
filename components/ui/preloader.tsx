"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center w-full h-full bg-bg text-text"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
        >
          <div className=" relative flex flex-col items-center justify-center">
            <Image
              src="/images/CC.svg"
              alt="Loading..."
              width={192}
              height={192}
              className="w-20 h-20 scale-60 object-contain dark:invert motion-safe:animate-bounce "
              priority
            />

            <h1 className="text-sm  text-text font-semi-bold  animate-pulse">
              Click anywhere while the page loads :)
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
