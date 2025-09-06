import { gateway } from "@ai-sdk/gateway";
import { generateObject, tool } from "ai";
import z from "zod";
import { localeSchema as locale, testimonialsSchema as schema } from "./schema";
import { promptTemplate } from "./prompt";
import { prisma } from "@/lib/prisma";

export const getTestimonials = tool({
  description:
    "Tampilkan semua testimonial dari client dan kolega. Gunakan tool ini saat user menanyakan tentang testimonial, feedback, review, atau pengalaman orang lain yang bekerja dengan saya. Contoh trigger: 'testimonial', 'review', 'feedback', 'pengalaman client', 'kata orang tentang kamu', atau 'referensi'.",
  inputSchema: z.object({
    locale,
  }),
  execute: async ({ locale }) => {
    try {
      // Fetch approved testimonials from database
      const testimonials = await prisma.testimonial.findMany({
        where: { isApproved: true },
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          authorName: true,
          authorTestimonial: true,
          authorPosition: true,
          authorCompany: true,
          authorRating: true,
          authorAvatar: true,
          authorInstagram: true,
          authorLinkedin: true,
          authorGithub: true,
          authorWebsite: true,
          createdAt: true,
        },
      });

      // Transform to match the expected format
      const testimonialsData = {
        opening: "",
        testimonials: testimonials.map((t) => ({
          author_name: t.authorName,
          author_testimonial: t.authorTestimonial,
          author_position: t.authorPosition || undefined,
          author_company: t.authorCompany || undefined,
          author_rating: t.authorRating,
          author_avatar: t.authorAvatar || undefined,
          author_instragram: t.authorInstagram || undefined, // Note: typo in schema
          author_linkedin: t.authorLinkedin || undefined,
          author_github: t.authorGithub || undefined,
          author_website: t.authorWebsite || undefined,
        })),
        closing: "",
      };

      const { object } = await generateObject({
        model: gateway("openai/gpt-4o-mini"),
        system: promptTemplate("prompt-persona", { locale }),
        schema,
        prompt: promptTemplate<z.infer<typeof schema>>("prompt-testimonials", {
          locale,
          data: testimonialsData,
        }),
      });

      return object;
    } catch (error) {
      console.error("Error fetching testimonials:", error);

      // Fallback to empty testimonials if database fails
      const fallbackData = {
        opening: "",
        testimonials: [],
        closing: "",
      };

      const { object } = await generateObject({
        model: gateway("openai/gpt-4o-mini"),
        system: promptTemplate("prompt-persona", { locale }),
        schema,
        prompt: promptTemplate<z.infer<typeof schema>>("prompt-testimonials", {
          locale,
          data: fallbackData,
        }),
      });

      return object;
    }
  },
});
