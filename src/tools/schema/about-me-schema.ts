import z from "zod";

export const aboutMeSchema = z.object({
  opening: z.string(),
  profile: z.object({
    fullName: z.string(),
    age: z.string(),
    location: z.string(),
    badges: z.array(z.string()),
  }),
  bio: z.string(),
  closing: z.string(),
});
