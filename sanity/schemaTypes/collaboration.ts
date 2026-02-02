import { defineField, defineType } from "sanity";

export const collaborationType = defineType({
  name: "collaboration",
  title: "Collaboration",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "videoUrl",
      title: "YouTube Video URL",
      description:
        "The full YouTube video link (e.g., https://www.youtube.com/watch?v=...)",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "size",
      title: "Card Size",
      type: "string",
      options: {
        list: [
          { title: "Normal (1x1)", value: "normal" },
          { title: "Large (2x2)", value: "large" },
          { title: "Wide (2x1)", value: "wide" },
        ],
      },
      initialValue: "normal",
    }),
    defineField({
      name: "stats",
      title: "Stats / Category",
      description: "e.g., 'Commercial', 'Animation', 'Sound Design'",
      type: "string",
    }),
    defineField({
      name: "animationDirection",
      title: "Animation Direction",
      type: "string",
      options: {
        list: [
          { title: "From Left", value: "from-left" },
          { title: "From Right", value: "from-right" },
          { title: "From Top", value: "from-top" },
          { title: "From Bottom", value: "from-bottom" },
        ],
      },
      initialValue: "from-bottom",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Order to display items (1, 2, 3...)",
    }),
  ],
  orderings: [
    {
      title: "Manual Order",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
