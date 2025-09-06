"use client";

import ChatConversation from "@/components/chat/chat-conversation";
import ChatHeader from "@/components/chat/chat-header";
import ChatInputForm from "@/components/chat/chat-input-form";
import { useChatStore } from "@/store/chat-store";
import { useChat } from "@ai-sdk/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ChatPage() {
  const { chat } = useChatStore();
  const { sendMessage } = useChat({ chat });
  const initializeSendMessageRef = useRef(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const messageQuery = searchParams.get("message");

    if (messageQuery && !initializeSendMessageRef.current) {
      sendMessage({ parts: [{ type: "text", text: messageQuery }] });
      initializeSendMessageRef.current = true;
      router.replace("/chat", { scroll: false });
    }
  }, [sendMessage, searchParams, router]);

  return (
    <main className="md:container px-4 sm:px-0 mx-auto overflow-hidden h-screen flex flex-col justify-between pb-5">
      <ChatHeader />
      <ChatConversation />
      <ChatInputForm />
    </main>
  );
}
