import { defineField, defineType } from "sanity";

export const aboutInfoType = defineType({
  name: "aboutInfo",
  title: "About Info",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
