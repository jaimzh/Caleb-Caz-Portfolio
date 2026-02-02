import About from "@/components/sections/about";
import Demos from "@/components/sections/demos";
import Collaborations from "@/components/sections/collaborations";
import Representation from "@/components/sections/representation";
import Equipment from "@/components/sections/equipment";
import Contact from "@/components/sections/contact";
import { SectionDivider } from "@/components/ui/section-divider";
import { Footer } from "@/components/ui/footer";
import React from "react";
import { ContactProvider } from "@/components/providers/contact-provider";
import { client } from "@/sanity/lib/client";

export default async function Page() {
  const contactQuery = `*[_type == "contactInfo"][0] {
      email,
      phoneNumber,
      socialMedia
    }`;

  let contactData = await client
    .fetch(contactQuery, {}, { cache: "no-store" })
    .catch(() => null);

  if (!contactData) {
    contactData = {
      email: "calebcazvo@gmail.com",
      phoneNumber: "315-480-2245",
      socialMedia: {
        youtube: "https://www.youtube.com/c/CalebCaz",
        instagram: "https://www.instagram.com/calebcaz/",
        tiktok: "https://www.tiktok.com/@jinglesunchained?lang=en",
        facebook: "https://www.facebook.com/JinglesUnchained",
      },
    };
  }

  return (
    <ContactProvider data={contactData}>
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
    </ContactProvider>
  );
}
