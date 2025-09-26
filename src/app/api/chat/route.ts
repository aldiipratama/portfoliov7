import { assemblePrompt } from "@/lib/prompt-assembler";
import { tools } from "@/lib/tool-invocations";
import { groq } from "@ai-sdk/groq";
import {
  convertToModelMessages,
  InferUITools,
  streamText,
  UIDataTypes,
  UIMessage,
} from "ai";
import { NextRequest } from "next/server";

export const maxDuration = 30;

export type ChatTools = InferUITools<typeof tools>;

export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;

export async function POST(req: NextRequest) {
  try {
    const {
      messages,
    }: {
      messages: ChatMessage[];
    } = await req.json();

    const response = streamText({
      model: groq("openai/gpt-oss-20b"),
      system: assemblePrompt(),
      messages: convertToModelMessages(messages),
      tools,
      toolChoice: "required",
    });

    return response.toUIMessageStreamResponse({
      sendReasoning: true,
    });
  } catch (error) {
    console.error("Error in AI API Chat:", error);
  }
}
