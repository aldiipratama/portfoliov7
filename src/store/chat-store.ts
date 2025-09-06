import { ChatMessage } from "@/app/[locale]/api/chat/route";
import { Chat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Fungsi buat bikin chat instance baru
function createChat() {
  return new Chat<ChatMessage>({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });
}

interface ChatState {
  chat: Chat<ChatMessage>;
  isLoading: boolean;
  isTyping: boolean;
  sessionId: string | null;
  conversationCount: number;
  clearChat: () => void;
  setLoading: (loading: boolean) => void;
  setTyping: (typing: boolean) => void;
  setSessionId: (id: string) => void;
  incrementConversation: () => void;
  resetStore: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      chat: createChat(),
      isLoading: false,
      isTyping: false,
      sessionId: null,
      conversationCount: 0,
      clearChat: () => {
        set({
          chat: createChat(),
          isLoading: false,
          isTyping: false,
        });
      },
      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },
      setTyping: (typing: boolean) => {
        set({ isTyping: typing });
      },
      setSessionId: (id: string) => {
        set({ sessionId: id });
      },
      incrementConversation: () => {
        set({ conversationCount: get().conversationCount + 1 });
      },
      resetStore: () => {
        set({
          chat: createChat(),
          isLoading: false,
          isTyping: false,
          sessionId: null,
          conversationCount: 0,
        });
      },
    }),
    {
      name: "chat-storage",
      partialize: (state) => ({
        sessionId: state.sessionId,
        conversationCount: state.conversationCount,
      }),
    }
  )
);
