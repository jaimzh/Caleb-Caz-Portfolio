"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 border-t border-border/40 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright Section */}
        <div className="text-text-muted text-sm text-center md:text-left">
          <p>© {currentYear} Caleb Caz. All rights reserved.</p>
        </div>

        {/* Attribution Section */}
        <div className="flex items-center gap-2 text-text-muted text-sm font-medium group">
          <span>Made by</span>
        
          
          <a 
            href="#" 
            className="text-text hover:text-primary transition-colors flex items-center gap-1.5"
          >
            Jaimz 🦖
            <Github size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}
