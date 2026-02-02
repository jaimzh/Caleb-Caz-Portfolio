import React from "react";
import { client } from "@/sanity/lib/client";
import { AboutInfoClient } from "./about-info-client";

export async function AboutInfo() {
  let description =
    "Caleb Caz is a New York–based voice actor with a focus in audiobooks, commercials video games, animations and more. Beyond the mic, he crafts original music jingles, immersive soundscapes, and foley. Collaborations include media companies Sling TV, Genshin Impact as well as YouTubers Comical Realm Animations and Slug Films alongside creators such as Jaimz Art, JollyShow and 360 Animations.";

  try {
    const query = `*[_type == "aboutInfo"][0]{description}`;
    const data = await client.fetch(query, {}, { cache: "no-store" });

    if (data?.description) {
      description = data.description;
    }
  } catch (error) {
    console.error("Failed to fetch About Info:", error);
    // Keep default fallback description
  }

  return <AboutInfoClient description={description} />;
}
