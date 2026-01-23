import About from "@/components/sections/about";
import Demos from "@/components/sections/demos";
import Collaborations from "@/components/sections/collaborations";
import Representation from "@/components/sections/representation";
import Equipment from "@/components/sections/equipment";
import Contact from "@/components/sections/contact";
import { SectionDivider } from "@/components/ui/section-divider";
import { Footer } from "@/components/ui/footer";
import React from "react";

function page() {
  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden">
      <About />
      <SectionDivider />
      <Demos />
      <SectionDivider />
      <Collaborations />
      <SectionDivider />
      <Representation />
      <SectionDivider />
      <Equipment />
      <SectionDivider />
      <Contact />
      <Footer />
    </div>
  );
}

export default page;
