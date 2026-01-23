import { z} from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Invalid email address"),
  projectType: z.enum(["Commercial", "Animation", "Narration", "Other"]),
  message: z.string().trim().min(1, "Message is required"),
  company: z.string().optional().default(""),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;