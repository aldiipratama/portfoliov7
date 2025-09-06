import z from "zod";

export const funFactSchema = z.object({
  opening: z.string(),
  funFact: z.array(z.string()),
  closing: z.string(),
});
