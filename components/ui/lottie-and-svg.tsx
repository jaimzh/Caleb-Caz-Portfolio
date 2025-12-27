"use client";

import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

interface LottieAndSVGProps {
  lottieSrc: string;
  svgSrc: string;
  alt: string;
  width?: number|string;
  height?: number|string;
  className?: string;
}

export function LottieAndSVG({
  lottieSrc,
  svgSrc,
  alt,
  width = 500,
  height = "auto",
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
    <div
      className={`relative flex items-center justify-center dark:invert ${className}`}
      style={{ width, height }}
    >
      <div
        className={`absolute inset-0  duration-300  fade-in-5 ${
          isAnimationFinished ? "opacity-0" : "opacity-90"
        }`}
      >
        <DotLottieReact
        
          src={lottieSrc}
          autoplay
          loop={false}
          dotLottieRefCallback={setDotLottie}
          
          style={{ width: "100%", height: "100%"  }}
        />
      </div>

      <div className={` ${isAnimationFinished ? "opacity-100" : "opacity-0"}`}>
        <div
          className={`absolute inset-0 transition-all duration-300 ease-in ${
            isAnimationFinished ? "opacity-100" : "opacity-90"
          }`}
        >
          <Image
            src={svgSrc}
            alt={alt}
            fill
            style={{ objectFit: "contain" }}
            className="priority"
          />
        </div>
      </div>
    </div>
  );
}
