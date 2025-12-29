"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export function AboutImage() {
  return (
    <motion.div variants={fadeIn("right")}>
      <div className="relative w-[clamp(300px,40vw,500px)] aspect-square overflow-hidden rounded-3xl bg-none">
        <Image
          src="/images/Caleb svg.svg"
          alt="Caleb Caz"
          fill
          className="object-cover scale-110 dark:opacity-80"
          priority
        />
     
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-bg to-transparent pointer-events-none z-10 "  />
      </div>
    </motion.div>
  );
}




// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeIn } from "@/lib/animations";

// export function AboutImage() {
//   return (
//     <motion.div variants={fadeIn("right")}>
//       <div className="relative w-[clamp(300px,80vw,500px)] md:w-[clamp(350px,35vw,500px)] lg:w-[clamp(400px,40vw,500px)] aspect-square overflow-hidden rounded-3xl bg-none">
//         <Image
//           src="/images/Caleb svg.svg"
//           alt="Caleb Caz"
//           fill
//           className="object-cover scale-110 dark:opacity-80"
//           priority
//         />
     
//         <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-bg to-transparent pointer-events-none z-10 "  />
//       </div>
//     </motion.div>
//   );
// }

