"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LottieAndSVG } from "@/components/ui/lottie-and-svg";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Headphones, Mic2Icon, Music4Icon, Signature } from "lucide-react";
import { RolesList } from "./roles-list";
import { SkillsList } from "./skills-list";
import { CalebSignatureStroke } from "./caleb-signature";
import { useScrollTo } from "@/hooks/useScrollTo";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { AboutInfoClient } from "./about-info-client";

export function AboutInfo() {
  const { scrollToId } = useScrollTo();

  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchAboutInfo = async () => {
      const query = `*[_type == "aboutInfo"][0]{description}`;

      const data = await client.fetch(query);

      if (data?.description) {
        setDescription(data.description);
      }
    };

    fetchAboutInfo();
  }, []);

  return (
   <AboutInfoClient description={description} />
  );
}
