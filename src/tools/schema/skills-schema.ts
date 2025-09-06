import z from "zod";

export const skillsSchema = z.object({
  opening: z.string(),
  technicalSkills: z.array(
    z.object({
      title: z.string(),
      icon: z.string().optional(),
    })
  ),
  softSkills: z.array(
    z.object({
      title: z.string(),
      icon: z.string().optional(),
    })
  ),
  closing: z.string(),
});
