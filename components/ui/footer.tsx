"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import { ArrowUpFromDotIcon, Github, Heart, Mail } from "lucide-react";
import { useScrollTo } from "@/hooks/useScrollTo";
import { off } from "process";

export function Footer() {
  const scrollToTop = useScrollTo();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-6 border-t border-border/40 mt-auto  flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright Section */}
        <div className="text-text-muted text-sm text-center md:text-left">
          <p>© {currentYear} Caleb Caz. All rights reserved.</p>
        </div>

        {/* Attribution Section */}
        <div className="flex items-center gap-2 text-text-muted text-sm font-medium group">
          <span>Made by</span>

          <a
          // href to mmy email is jaimz@jaimz.dev
            href="mailto:jaimzh03@gmail.com"
            className="text-text hover:text-primary transition-colors flex items-center gap-1.5"
          >
            Jaimz 🦖
            <Mail
              size={14}
              className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
            />
          </a>
        </div>
      </div>
      <span
        onClick={() => scrollToTop.scrollToId("top", 0)}
        className="   group  mt-6
    inline-flex
    items-center
    cursor-pointer
    text-text-muted
    hover:text-primary
    transition-colors
  "
      >
        <span
          className="
      overflow-hidden
      max-w-0
      opacity-0
      whitespace-nowrap
      transition-all
      duration-300
      ease-out
      group-hover:max-w-30
      group-hover:opacity-100
      mr-0
      group-hover:mr-2
    "
        >
          Back to top
        </span>

        <ArrowUpFromDotIcon
          className="
      h-4
      w-4
      text-current
      transition-transform
      duration-300
      ease-out
      group-hover:-translate-y-[1px]
    "
        />
      </span>
    </footer>
  );
}
