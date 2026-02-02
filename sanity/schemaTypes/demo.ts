import { defineField, defineType } from "sanity";

export const demoType = defineType({
  name: "demo",
  title: "Demo",
  type: "document",

  fields: [
    defineField({
      name: "title",           
      title: "Demo Title",     
      type: "string",
    }),
    
    defineField({              
      name: "audioFile",
      title: "Audio File",
      type: "file",
    }),
  ],
});