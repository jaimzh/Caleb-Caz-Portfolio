"use client";

import React from "react";
import { Button } from "../ui/button";
import { LottieAndSVG } from "../ui/lottie-and-svg";
import Image from "next/image";

function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-20 justify-between">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full aspect-square max-w-[600px] overflow-hidden rounded-3xl ">
            {/* we'll put an animated hero here  */}
            {/* first lets do a next image */}
            <Image
              src="/images/Caleb svg.svg"
              alt="Caleb Caz"
              fill
              className="object-cover scale-110"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg/20 to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-6 w-[40%]">
         
            <div className="relative w-[500px] h-[200px] overflow-hidden bg-none">
              <LottieAndSVG
                lottieSrc="/animations/Caleblogofile.lottie"
                svgSrc="/images/Caleb logo round.svg"
                alt="Caleb Caz Logo"
                width={500}
                height={300}
                className="w-full h-full bottom-10 right-14"
              />
            </div>

            <p className="text-xl font-medium text-primary flex gap-2 md: gap-4">
              <span className="font-semibold">Voice Actor </span>●
              <span className="font-semibold">Narrator</span>●
              <span className="font-semibold">Character Voices</span>
            </p>
         

          <p className="text-lg leading-relaxed text-text-muted">
            Caleb Caz is a New York–based voice actor specializing in
            audiobooks, commercials, and video games. Alongside voice work, he
            creates original music jingles, soundscapes, and foley that bring
            stories to life. He has collaborated with brands and creators
            including Sling TV, Comical Realm Animations, Slug Films, and TikTok
            artists such as Jaimz Art, JollyShow, and 360 Animations.
          </p>

          <div className="pt-4">
            <Button
              className="px-10 py-6 rounded-full text-xl font-semibold"
              variant="caleb-slide"
              size="lg"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
