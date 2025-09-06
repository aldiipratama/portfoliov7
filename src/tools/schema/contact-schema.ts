import z from "zod";

export const contactSchema = z.object({
  opening: z.string(),
  contact: z.array(
    z.object({
      icon: z.string(),
      title: z.string(),
      link: z.url(),
    })
  ),
  closing: z.string(),
});
