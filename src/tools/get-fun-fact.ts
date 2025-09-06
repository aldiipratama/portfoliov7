import { gateway } from "@ai-sdk/gateway";
import { generateObject, tool } from "ai";
import z from "zod";
import { localeSchema as locale, funFactSchema as schema } from "./schema";
import { promptTemplate } from "./prompt";

export const getFunFact = tool({
  inputSchema: z.object({
    locale,
  }),
  execute: async ({ locale }) => {
    const { object } = await generateObject({
      model: gateway("openai/gpt-4o-mini"),
      system: promptTemplate("prompt-persona", { locale }),
      schema,
      prompt: promptTemplate<z.infer<typeof schema>>("prompt-fun-fact", {
        locale,
      }),
    });

    return object;
  },
});
