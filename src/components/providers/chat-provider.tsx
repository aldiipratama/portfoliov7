"use client";

import { ChatMessage } from "@/app/api/chat/route";
import { Chat, useChat, UseChatHelpers } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { createContext, ReactNode, useContext, useState } from "react";

interface ChatContextValue extends UseChatHelpers<ChatMessage> {
  clearChat: () => void;
}

const ChatContext = createContext<ChatContextValue | null>(null);

function createChat() {
  return new Chat<ChatMessage>({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const [chat, setChat] = useState(() => createChat());
  const chatHelpers = useChat({ chat });

  const clearChat = () => {
    setChat(createChat());
  };

  return (
    <ChatContext.Provider value={{ ...chatHelpers, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
}
