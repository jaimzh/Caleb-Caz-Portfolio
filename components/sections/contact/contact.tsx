import React from "react";
import { client } from "@/sanity/lib/client";
import ContactClient, { ContactData } from "./contact-client";

export default async function Contact() {
  let contactData: ContactData = {};

  try {
    const query = `*[_type == "contactInfo"][0] {
      email,
      phoneNumber,
      socialMedia
    }`;

    const data = await client.fetch(query, {}, { cache: "no-store" });

    if (data) {
      contactData = data;
    } else {
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
  } catch (error) {
    console.error("Failed to fetch contact info:", error);

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

  return <ContactClient data={contactData} />;
}
