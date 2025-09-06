import { gateway } from "@ai-sdk/gateway";
import { generateObject, tool } from "ai";
import z from "zod";
import { localeSchema as locale, contactSchema as schema } from "./schema";
import { promptTemplate } from "./prompt";
import contactData from "@/data/contact.json";

export const getContact = tool({
  inputSchema: z.object({
    locale,
  }),
  execute: async ({ locale }) => {
    const { object } = await generateObject({
      model: gateway("openai/gpt-4o-mini"),
      schema,
      prompt: promptTemplate<z.infer<typeof schema>>("prompt-contact", {
        locale,
        data: contactData,
      }),
    });

    return object;
  },
});
