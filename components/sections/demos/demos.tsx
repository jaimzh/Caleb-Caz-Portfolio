import { client } from "@/sanity/lib/client";
import { DemosClient } from "./demos-client";

interface Demo {
  _id: string;
  title: string;
  audioFile: {
    asset: {
      url: string;
    };
  };
}


export default async function Demos() {
  
  const query = `*[_type == "demo"]{
    _id,
    title,
    "audioFile": {
      "asset": {
        "url": audioFile.asset->url
      }
    }
  }`;

  const demos: Demo[] = await client.fetch(query);

 
  return <DemosClient demos={demos} />;
}