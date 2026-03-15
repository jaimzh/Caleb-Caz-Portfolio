import { client } from "@/sanity/lib/client";

export default async function JsonLd() {
  const contactQuery = `*[_type == "contactInfo"][0] {
    email,
    phoneNumber,
    socialMedia
  }`;

  const contactData = await client
    .fetch(contactQuery, {}, { cache: "no-store" })
    .catch(() => null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Caleb Casamento",
    url: "https://calebcaz.com",
    jobTitle: "Professional Voice Actor",
    description:
      "Caleb Casamento is a professional voice actor specializing in audiobooks, commercials, video games, and animation.",
    sameAs: [
      contactData?.socialMedia?.instagram ||
        "https://www.instagram.com/calebcaz/",
      contactData?.socialMedia?.youtube || "https://www.youtube.com/c/CalebCaz",
      contactData?.socialMedia?.facebook ||
        "https://www.facebook.com/JinglesUnchained",
      contactData?.socialMedia?.tiktok ||
        "https://www.tiktok.com/@jinglesunchained?lang=en",
    ],
    image: "https://calebcaz.com/images/og-image.png",
    email: contactData?.email || "calebcazvo@gmail.com",
    telephone: contactData?.phoneNumber || "315-480-2245",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
