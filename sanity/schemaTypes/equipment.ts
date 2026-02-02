import { defineField, defineType } from "sanity";

export const equipmentType = defineType({
  name: "equipmentInfo",
  title: "Equipment Info",
  type: "document",
  fields: [
    defineField({
      name: "microphone",
      title: "Microphone",
      type: "string",
    }),
    defineField({
      name: "interface",
      title: "Interface",
      type: "string",
    }),
    
    defineField({
      name: "software",
      title: "Software",
      type: "string",
    }),
    defineField({
      name: "setup",
      title: "Set Up",
      type: "string",
    }),
  ],
});
