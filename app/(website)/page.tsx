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

  const aboutQuery = `*[_type == "aboutInfo"][0]{description}`;

  const [contactDataRes, aboutDataRes] = await Promise.all([
    client.fetch(contactQuery, {}, { cache: "no-store" }).catch(() => null),
    client.fetch(aboutQuery, {}, { cache: "no-store" }).catch(() => null),
  ]);

  let contactData = contactDataRes;
  const aboutDescription =
    aboutDataRes?.description ||
    "Caleb Casemento is a New York–based voice actor with a focus in audiobooks, commercials video games, animations and more. Beyond the mic, he crafts original music jingles, immersive soundscapes, and foley. Collaborations include media companies Sling TV, Genshin Impact as well as YouTubers Comical Realm Animations and Slug Films alongside creators such as Jaimz Art, JollyShow and 360 Animations.";

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
        <About description={aboutDescription} />
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
