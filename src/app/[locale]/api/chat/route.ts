import { tools } from "@/tools";
import { promptTemplate } from "@/tools/prompt";
import { gateway } from "@ai-sdk/gateway";
import {
  convertToModelMessages,
  InferUITools,
  streamText,
  UIDataTypes,
  UIMessage,
} from "ai";

export const maxDuration = 30;

export type ChatTools = InferUITools<typeof tools>;

export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json();

    const response = streamText({
      model: gateway("openai/gpt-4o-mini"),
      system: promptTemplate("prompt-persona"),
      messages: convertToModelMessages(messages),
      tools,
    });

    return response.toUIMessageStreamResponse();
  } catch (error) {
    console.error("❌ Chat API Error:", error);

    if (error instanceof Error) {
      return new Response(`Error: ${error.message}`, { status: 500 });
    }

    return new Response("Terjadi kesalahan pada server", { status: 500 });
  }
}
