import { generateObject, tool, ToolSet } from "ai";
import { z } from "zod/v4";
import { assemblePrompt } from "./prompt-assembler";

const showAboutMeCard = tool({
  description: "Tampilkan kartu ringkasan 'About Me' kepada user.",
  inputSchema: z.object({
    userInput: z.string().describe("Input dari user."),
  }),
  execute: async ({ userInput }) => {
    const response = await generateObject({
      model: "",
      system: assemblePrompt(),
      schema: z.object({
        opening: z.string().describe("Pembuka percakapan yang ramah."),
        closing: z.string().describe("Penutup percakapan yang mengundang."),
      }),
      prompt: userInput,
    });

    return response.toJsonResponse();
  },
});

const showProjectsCard = tool({
  description: "Tampilkan kartu ringkasan 'Projects' kepada user.",
  inputSchema: z.object({
    projects: z
      .string()
      .describe(
        "Daftar proyek utama yang pernah dikerjakan, dengan deskripsi singkat masing-masing."
      ),
  }),
});

const showSkillsCard = tool({
  description: "Tampilkan kartu ringkasan 'Skills' kepada user.",
  inputSchema: z.object({
    skills: z
      .string()
      .describe(
        "Daftar keterampilan yang dimiliki, baik teknis maupun non-teknis."
      ),
  }),
});

const showContactCard = tool({
  description: "Tampilkan kartu ringkasan 'Contact' kepada user.",
  inputSchema: z.object({
    email: z.email().describe("Alamat email yang dapat dihubungi."),
    social: z.string().describe("Akun media sosial yang dapat dihubungi."),
  }),
});

const showFunFactsCard = tool({
  description: "Tampilkan kartu ringkasan 'Fun Fact' kepada user.",
  inputSchema: z.object({
    funFact: z.string().describe("Fakta menarik tentang Aldi."),
  }),
});

const showTestimonialsCard = tool({
  description: "Tampilkan kartu ringkasan 'Testimonial' kepada user.",
  inputSchema: z.object({
    testimonial: z
      .string()
      .describe(
        "Testimonial dari orang-orang yang pernah bekerja sama dengan Aldi."
      ),
  }),
});

export const tools: ToolSet = {
  // showAboutMeCard,
  // showProjectsCard,
  // showSkillsCard,
  // showContactCard,
  // showFunFactsCard,
  // showTestimonialsCard,
} satisfies ToolSet;
