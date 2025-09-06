import { gateway } from "@ai-sdk/gateway";
import { generateObject, tool } from "ai";
import z from "zod";
import { promptTemplate } from "./prompt";
import { localeSchema as locale, projectsSchema as schema } from "./schema";
import projectsData from "@/data/projects.json";

export const getProjects = tool({
  inputSchema: z.object({
    locale,
  }),
  execute: async ({ locale }) => {
    const { object } = await generateObject({
      model: gateway("openai/gpt-4o-mini"),
      system: promptTemplate("prompt-persona", {
        locale,
      }),
      schema,
      prompt: promptTemplate<z.infer<typeof schema.shape.projects>>(
        "prompt-projects",
        {
          locale,
          data: projectsData,
        }
      ),
    });

    return object;
  },
});
