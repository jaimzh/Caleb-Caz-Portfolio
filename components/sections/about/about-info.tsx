"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LottieAndSVG } from "@/components/ui/lottie-and-svg";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Headphones, Mic2Icon, Music4Icon, Signature } from "lucide-react";
import { RolesList } from "./roles-list";
import { SkillsList } from "./skills-list";
import { SignatureStroke } from "./signature";
import { SignatureStrokeImg } from "./signature-image";

export function AboutInfo() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center gap-4 w-full "
    >
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden w-full max-w-[300px] h-[100px] md:max-w-full md:h-[120px] aspect-5/2 flex items-center justify-center"
      >

<SignatureStroke className="text-primary scale-130" />
        
        <LottieAndSVG
          lottieSrc="/animations/Caleblogofile.lottie"
          svgSrc="/images/Caleb logo round.svg"
          alt="Caleb Caz Logo "
          className="w-full h-full scale-200 left-4  "
        />
        <SignatureStrokeImg className="absolute top-0 left-0 w-full h-full" />
      </motion.div>

      <SkillsList />
      {/* <RolesList /> */}

      <motion.div
        variants={itemVariants}
        className="flex  text-base leading-loose text-text-muted text-center  w-full tracking-wide"
      >
        <p>
          Caleb Caz is a New York–based voice actor specializing in audiobooks,
          commercials, and video games. Beyond the mic, he crafts original music
          jingles, immersive soundscapes, and foley that breathe life into every
          project. Collaborations include industry names like Sling TV, Comical
          Realm Animations, and Slug Films, alongside viral creators such as
          Jaimz Art and 360 Animations.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button
          className="px-10 py-6 rounded-full font-semibold mt-4"
          variant="btn-caleb"
          size="lg"
        >
          Contact Me
        </Button>
      </motion.div>

      {/* <div className="caleb-card">
  <h3>Testing the Effect</h3>
  <p>Hover over me to see the light hit the top border!</p>
</div> */}
    </motion.div>
  );
}
