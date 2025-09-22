import { promptTemplate } from "@/lib/prompt-template";
import { tools } from "@/tools/prompts/tool-invocation";
import { groq } from "@ai-sdk/groq";
import { convertToModelMessages, streamText, UIMessage } from "ai";
import { NextRequest } from "next/server";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const response = streamText({
      model: groq("meta-llama/llama-4-maverick-17b-128e-instruct"),
      system: promptTemplate("prompt-persona"),
      messages: convertToModelMessages(messages),
    });

    return response.toUIMessageStreamResponse({
      sendReasoning: true,
    });
  } catch (error) {
    console.error("Error in AI API Chat:", error);
  }
}
