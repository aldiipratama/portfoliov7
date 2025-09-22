"use client";

import { useChat } from "@ai-sdk/react";
import { ReactNode, useEffect, useRef } from "react";
import { ChatProvider as ContextProvider } from "@/context/chat-context";
import { useChatStore } from "@/stores/chat-store";

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const { activeChatId, chats, updateMessages } = useChatStore();

  const chatHelpers = useChat();

  const isHydrated = useRef(false);

  useEffect(() => {
    const persistedMessages = activeChatId
      ? chats[activeChatId]?.messages ?? []
      : [];

    if (
      JSON.stringify(chatHelpers.messages) !== JSON.stringify(persistedMessages)
    ) {
      console.log(`Syncing Zustand to useChat for thread: ${activeChatId}`);
      chatHelpers.setMessages(persistedMessages);
      isHydrated.current = true;
    }
  }, [activeChatId]);

  useEffect(() => {
    if (!activeChatId) return;
    if (chatHelpers.status === "streaming") return;
    if (!isHydrated.current) return;

    updateMessages(activeChatId, chatHelpers.messages);
  }, [chatHelpers.status, chatHelpers.messages]);

  return <ContextProvider value={chatHelpers}>{children}</ContextProvider>;
};
