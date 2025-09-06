import z from "zod";

export const projectsSchema = z.object({
  opening: z.string(),
  projects: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      technologies: z.array(
        z.object({
          name: z.string(),
          icon: z.string(),
        })
      ),
      liveLink: z.url().optional(),
      githubLink: z.url().optional(),
      longDescription: z.string().optional(),
      image: z.string().optional(),
    })
  ),
  closing: z.string(),
});
