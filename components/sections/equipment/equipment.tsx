import React from "react";
import { client } from "@/sanity/lib/client";
import EquipmentClient, { EquipmentData } from "./equipment-client";

export default async function Equipment() {
  let equipmentData: EquipmentData = {};

  try {
    const query = `*[_type == "equipmentInfo"][0] {
      microphone,
      interface,
      software,
      setup
    }`;

    // Opt out of caching based on your preference or use next: { revalidate: 60 }
    const data = await client.fetch(query, {}, { cache: "no-store" });

    if (data) {
      equipmentData = data;
    } else {
      // Fallback to static data if no CMS data exists
      equipmentData = {
        microphone: "Electro-Voice RE20, AT2020",
        software: "Adobe Audition, Audacity",
        interface: "Scarlett Solo",
        setup: "Source Connect Standard",
      };
    }
  } catch (error) {
    console.error("Failed to fetch equipment:", error);
    // Fallback on error
    equipmentData = {
      microphone: "Electro-Voice RE20, AT2020",
      software: "Adobe Audition, Audacity",
      interface: "Scarlett Solo",
      setup: "Source Connect Standard",
    };
  }

  return <EquipmentClient data={equipmentData} />;
}
