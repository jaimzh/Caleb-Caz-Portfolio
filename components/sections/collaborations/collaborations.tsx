import React from "react";
import { client } from "@/sanity/lib/client";
import { BentoItem, COLLAB_DATA } from "./data";
import { CollaborationsClient } from "./collaborations-client";

export default async function Collaborations() {
  let items: BentoItem[] = [];

  try {
    const query = `*[_type == "collaboration"] | order(order asc) {
      _id,
      title,
      videoUrl,
      description,
      size,
      stats,
      animationDirection
    }`;

    // Opt out of caching for simple real-time updates, or use next: { revalidate: 60 }
    const data = await client.fetch(query, {}, { cache: "no-store" });

    if (data && data.length > 0) {
      items = data.map((item: any, index: number) => {
        const getYouTubeId = (url: string) => {
          if (!url) return "";
          const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
          const match = url.match(regExp);
          return match && match[2].length === 11 ? match[2] : "";
        };

        const videoId = getYouTubeId(item.videoUrl);

        return {
          id: index + 1,
          type: "youtube",
          size: item.size,
          title: item.title,
          desc: item.description,
          thumbnail: videoId
            ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
            : "",
          videoUrl: videoId
            ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
            : item.videoUrl,
          stats: item.stats,
          animationDirection: item.animationDirection || "from-bottom",
        };
      });
    } else {
      // Fallback to static data
      items = COLLAB_DATA;
    }
  } catch (error) {
    console.error("Failed to fetch collaborations:", error);
    items = COLLAB_DATA;
  }

  return <CollaborationsClient items={items} />;
}
