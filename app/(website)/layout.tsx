import React from "react";
import Navbar from "@/components/ui/navbar";
import Preloader from "@/components/ui/preloader";
import SmoothScrolling from "@/components/ui/smooth-scrolling";
import { ParticleEffect } from "@/components/ui/particle-effect";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrolling>
      <Preloader />
      <ParticleEffect />
      <Navbar />
      <main className="pt-24">{children}</main>
    </SmoothScrolling>
  );
}
