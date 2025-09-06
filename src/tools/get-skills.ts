import { generateObject, tool } from "ai";
import z from "zod";
import { localeSchema as locale, skillsSchema as schema } from "./schema";
import { gateway } from "@ai-sdk/gateway";
import { promptTemplate } from "./prompt";
import skillsData from "@/data/skills.json";

export const getSkills = tool({
  inputSchema: z.object({
    locale,
  }),
  execute: async ({ locale }) => {
    const { object } = await generateObject({
      model: gateway("openai/gpt-4o-mini"),
      schema,
      prompt: promptTemplate<z.infer<typeof schema>>("prompt-skills", {
        locale,
        data: skillsData,
      }),
    });

    return object;
  },
});
