"use client";

import React, { useState, useEffect } from "react";
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
  const [isLottieLoaded, setIsLottieLoaded] = useState(false);
  const [dotLottie, setDotLottie] = useState<any>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Aggressive preload: Fetch the Lottie file immediately
  useEffect(() => {
    const preloadLottie = async () => {
      try {
        const response = await fetch(lottieSrc, {
          priority: "high",
          cache: "force-cache",
        } as RequestInit);
        
        if (response.ok) {
          // Store in cache for instant replay
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setIsLottieLoaded(true);
        }
      } catch (error) {
        console.warn("Lottie preload failed, falling back to default loading:", error);
        setIsLottieLoaded(true); // Continue anyway
      }
    };

    preloadLottie();
  }, [lottieSrc]);

  // Handle animation completion
  useEffect(() => {
    if (dotLottie) {
      const onComplete = () => {
        setIsAnimationFinished(true);
      };
      
      const onLoad = () => {
        setIsLottieLoaded(true);
      };

      dotLottie.addEventListener("complete", onComplete);
      dotLottie.addEventListener("load", onLoad);
      
      return () => {
        dotLottie.removeEventListener("complete", onComplete);
        dotLottie.removeEventListener("load", onLoad);
      };
    }
  }, [dotLottie]);

  // Skip animation if user prefers reduced motion
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsAnimationFinished(true);
    }
  }, [prefersReducedMotion]);

  return (
    <div className={`relative flex items-center justify-center dark:invert ${className}`}>
      {/* Lottie Animation Layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isAnimationFinished ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ willChange: "opacity" }}
      >
        {isLottieLoaded && !prefersReducedMotion && (
          <DotLottieReact
            src={lottieSrc}
            autoplay
            loop={false}
            dotLottieRefCallback={setDotLottie}
            style={{ width: "100%", height: "100%", willChange: "transform" }}
          />
        )}
      </div>

      {/* Static SVG Fallback Layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-200 ease-in-out ${
          isAnimationFinished ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "opacity" }}
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
