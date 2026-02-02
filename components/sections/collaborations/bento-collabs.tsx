"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BentoItem } from "./data";
import BentoCard from "./bento-card";
import { Button } from "@/components/ui/button";

import { useContactInfo } from "@/components/providers/contact-provider";

interface BentoCollabsProps {
  items: BentoItem[];
}

export default function BentoCollabs({ items }: BentoCollabsProps) {
  const { socialMedia } = useContactInfo();

  return (
    <div className="w-full  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[320px]">
        {items.map((item) => (
          <BentoCard key={item.id} item={item} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center "
      >
        <Button
          variant="outline"
          asChild
          className="rounded-full px-6 py-2.5 h-auto border-border/40 text-text-muted hover:text-text hover:bg-bg-light transition-all duration-300 font-semibold text-sm group"
        >
          <a
            href={socialMedia?.youtube || "https://www.youtube.com/c/CalebCaz"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Explore more on my channel
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-y-[-2px]"
            />
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
