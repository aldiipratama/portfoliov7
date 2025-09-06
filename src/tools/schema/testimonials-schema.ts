import z from "zod";

export const testimonialsSchema = z.object({
  opening: z.string(),
  testimonials: z.array(
    z.object({
      author_name: z.string(),
      author_testimonial: z.string(),
      author_position: z.string().optional(),
      author_company: z.string().optional(),
      author_instragram: z.string().optional(),
      author_linkedin: z.string().optional(),
      author_github: z.string().optional(),
      author_website: z.string().optional(),
      author_avatar: z.string().optional(),
      author_rating: z.number().min(1).max(5),
    })
  ),
  closing: z.string(),
});
