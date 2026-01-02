"use client";

import React, { useEffect } from "react";

export const ParticleEffect = () => {
  useEffect(() => {
    const styleId = "particle-effect-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        .particle-container {
          position: fixed;
          pointer-events: none;
          z-index: 9999; 
        }
        
        .particle-line {
          position: absolute;
          background: currentColor; 
          transform-origin: 0 50%;
        }

        @keyframes expandLine {
          0% {
          transform: rotate(var(--angle)) translateX(var(--offset));
            width: 0;
            opacity: 1;
          }
            
          100% {
          transform: rotate(var(--angle)) translateX(var(--offset));
            width: var(--particle-length);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    const createParticle = (x: number, y: number) => {
      const container = document.createElement("div");
      container.className = "particle-container";
      container.style.left = `${x}px`;
      container.style.top = `${y}px`;

      container.style.color = "var(--text, #000)";

      const randomRotation = Math.random() * (Math.PI / 3);
      const angles = [
        0,
        Math.PI / 3,
        (2 * Math.PI) / 3,
        Math.PI,
        (4 * Math.PI) / 3,
        (5 * Math.PI) / 3,
      ];

      for (let i = 0; i < angles.length; i++) {
        const line = document.createElement("div");
        line.className = "particle-line";

        const angle = angles[i] + randomRotation;
        const length = 20 + Math.random() * 15;
        const thickness = 1.5;
        const offset = 10;
        line.style.height = `${thickness}px`;
        line.style.transform = `rotate(${angle}rad)`;


        line.style.setProperty("--angle", `${angle}rad`);
        line.style.setProperty("--offset", `${offset}px`);
        line.style.setProperty("--particle-length", `${length}px`);

        const duration = 350;

        line.style.animation = `expandLine ${duration}ms ease-out forwards`;

        container.appendChild(line);
      }

      document.body.appendChild(container);

      setTimeout(() => {
        container.remove();
      }, 400);
    };

    const handleClick = (e: MouseEvent) => {
      createParticle(e.clientX, e.clientY);
    };

    //  handle touch just in case but it is not necessary
    // const handleTouch = (e: TouchEvent) => {
    //     if(e.touches.length > 0){
    //          createParticle(e.touches[0].clientX, e.touches[0].clientY);
    //     }
    // }

    document.addEventListener("click", handleClick, { capture: true });
    // document.addEventListener("touchstart", handleTouch, {capture: true});

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      //   document.removeEventListener("touchstart", handleTouch, {capture: true});
    };
  }, []);

  return null;
};
