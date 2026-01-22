"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

export function ThemeToggle() {
  const mounted = useMounted();
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="size-9 flex items-center justify-center hover:bg-bg-dark transition-all border border-text-muted rounded-full text-text cursor-pointer relative overflow-hidden active:scale-95"
      aria-label="Toggle theme"
    >
      {!mounted ? (
        <span className="size-5" aria-hidden="true" />
      ) : (
        <span className="relative size-5" aria-hidden="true">
          <motion.span
            initial={false}
            animate={{
              rotate: isDark ? 0 : 90,
              scale: isDark ? 1 : 0,
              opacity: isDark ? 1 : 0,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="size-5" />
          </motion.span>

          <motion.span
            initial={false}
            animate={{
              rotate: isDark ? -90 : 0,
              scale: isDark ? 0 : 1,
              opacity: isDark ? 0 : 1,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="size-5" />
          </motion.span>
        </span>
      )}
    </button>
  );
}
