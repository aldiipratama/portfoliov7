import { gateway } from "@ai-sdk/gateway";
import { generateObject, tool } from "ai";
import z from "zod";
import { promptTemplate } from "./prompt";
import { localeSchema as locale, aboutMeSchema as schema } from "./schema";

export const getAboutMe = tool({
  inputSchema: z.object({
    locale,
  }),
  execute: async ({ locale }) => {
    const result = await generateObject({
      model: gateway("openai/gpt-4o-mini"),
      system: promptTemplate("prompt-persona", { locale }),
      schema,
      prompt: promptTemplate("prompt-about-me", { locale }),
    });
    return result.object;
  },
});
