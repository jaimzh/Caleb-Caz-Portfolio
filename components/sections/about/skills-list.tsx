"use client"; // Add this if you are using Next.js App Router

import React, { useEffect, useState } from "react";
import { Mic2Icon, Headphones, Music4Icon } from "lucide-react";
import Marquee from "react-fast-marquee";

const roles = [
  { label: "Voice Actor", icon: Mic2Icon },
  { label: "Sound Designer", icon: Headphones },
  { label: "Singer", icon: Music4Icon },
];

export function SkillsList() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkTheme();

    const handleMutation = (mutations: MutationRecord[]) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkTheme();
        }
      });
    };

    const observer = new MutationObserver(handleMutation);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const gradientColor = isDarkMode ? "rgb(13, 13, 13)" : "rgb(242, 242, 242)";

  if (!isMounted) return null;

  return (
    <div className="w-[clamp(16rem,60vw,20rem)] bg-red-400">
      <Marquee
        pauseOnHover={true}
        speed={40}
        gradient={true}
        gradientColor={gradientColor}
        autoFill={true}
      >
        {roles.map((role, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 mx-4 whitespace-nowrap"
          >
            <role.icon className="size-4 shrink-0" />
            <p>{role.label}</p>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
