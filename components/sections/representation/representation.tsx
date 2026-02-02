import React from "react";
import { client } from "@/sanity/lib/client";
import { AGENCIES, Agency } from "./data";
import { RepresentationClient } from "./representation-client";
import { urlFor } from "@/sanity/lib/image";

export default async function Representation() {
  let agencies: Agency[] = [];

  try {
    const query = `*[_type == "representation"] | order(order asc) {
      _id,
      agencyName,
      location,
      phoneNumber,
      agentName,
      websiteUrl,
      logo
    }`;

    // Opt out of caching based on your preference or use next: { revalidate: 60 }
    const data = await client.fetch(query, {}, { cache: "no-store" });

    if (data && data.length > 0) {
      agencies = data.map((item: any, index: number) => ({
        id: index + 1,
        name: item.agencyName,
        location: item.location,
        phone: item.phoneNumber,
        agent: item.agentName,
        url: item.websiteUrl,
        logo: item.logo ? urlFor(item.logo).url() : "",
      }));
    } else {
      agencies = AGENCIES;
    }
  } catch (error) {
    console.error("Failed to fetch representation:", error);
    agencies = AGENCIES;
  }

  return <RepresentationClient agencies={agencies} />;
}
