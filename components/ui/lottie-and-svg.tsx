"use client";

import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

interface LottieAndSVGProps {
  lottieSrc: string;
  svgSrc: string;
  alt: string;

  className?: string;
}

export function LottieAndSVG({
  lottieSrc,
  svgSrc,
  alt,
  
  className = "",
}: LottieAndSVGProps) {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const [dotLottie, setDotLottie] = React.useState<any>(null);

  React.useEffect(() => {
    if (dotLottie) {
      const onComplete = () => {
        setIsAnimationFinished(true);
      };
      dotLottie.addEventListener("complete", onComplete);
      return () => {
        dotLottie.removeEventListener("complete", onComplete);
      };
    }
  }, [dotLottie]);

  return (
    <div className={`relative flex items-center justify-center dark:invert ${className}`}>
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isAnimationFinished ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <DotLottieReact
          src={lottieSrc}
          autoplay
          loop={false}
          dotLottieRefCallback={setDotLottie}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-200 ease-in-out ${
          isAnimationFinished ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={svgSrc}
          alt={alt}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  );
}
