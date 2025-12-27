"use client";

import React from "react";
import { Button } from "../ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full aspect-square max-w-[500px] overflow-hidden rounded-3xl bg-primary/5 border border-primary/10 shadow-2xl">
           {/* we'll put an animated hero here  */}
            <div className="absolute inset-0 bg-linear-to-t from-bg/20 to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <div className="space-y-2">
            <DotLottieReact src="/animations/Caleblogofile.lottie" 
            loop
      autoplay/>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text">
              Caleb Caz
            </h1>
            <p className="text-xl font-medium text-primary">
              Voice Actor · Narrator · Character Voices
            </p>
          </div>
          
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
              className="px-10 py-6 rounded-full text-xl font-semibold shadow-lg hover:shadow-primary/20 transition-all"
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
