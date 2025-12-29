"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { COLLAB_DATA } from './data';
import BentoCard from './bento-card';
import { Button } from "@/components/ui/button";

export default function BentoCollabs() {
  return (
    <div className="w-full  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[320px]">
        {COLLAB_DATA.map((item) => (
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
             href="https://youtube.com" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center gap-2"
           >
              Explore more on my channels 
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-y-[-2px]" />
           </a>
         </Button>
      </motion.div>
    </div>
  );
}
