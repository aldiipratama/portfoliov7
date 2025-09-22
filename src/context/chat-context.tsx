// context/chat-context.tsx
"use client";

import { UseChatHelpers } from "@ai-sdk/react";
import { UIMessage } from "ai";
import { createContext, useContext } from "react";

type ChatContextType = UseChatHelpers<UIMessage>;

const ChatContext = createContext<ChatContextType | null>(null);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider = ChatContext.Provider;
