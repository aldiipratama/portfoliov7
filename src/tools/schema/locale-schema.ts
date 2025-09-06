import z from "zod";

export const localeSchema = z
  .string()
  .describe("The language detected from the user's message.");
