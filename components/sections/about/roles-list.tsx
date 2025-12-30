import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { Mic2Icon, Headphones, Music4Icon } from "lucide-react";



const roles = [
  {
    label: "Voice Actor",
    icon: Mic2Icon,
  },
  {
    label: "Sound Designer",
    icon: Headphones,
  },
  {
    label: "Singer",
    icon: Music4Icon,
  },
  // Add more roles here if needed
]; 






export function RolesList() {


    const slides = [...roles, ...roles ,...roles];

 return (
    <motion.div
      variants={itemVariants}
className="w-full text-xs md:text-base font-semibold text-primary  no-theme-transition"
    >

      <div className=" no-theme-transition roles-container relative flex items-center w-[clamp(16rem,60vw,20rem)] mx-auto overflow-hidden">
        <div className="roles-track flex items-center gap-6  w-max whitespace-nowrap">
          {slides.map((role, index) => (
            <span key={index} className="inline-flex items-center gap-2">
              <role.icon className="size-4 shrink-0" />
              <span className="whitespace-nowrap">{role.label}</span>
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}