import { HOME_THREAD_ID } from "@/lib/navigation-config";
import { UIMessage } from "ai";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ChatSession {
  id: string;
  messages: UIMessage[];
}

interface ChatState {
  chats: Record<string, ChatSession>;
  activeChatId: string;
  setActiveChatId: (id: string) => void;
  getOrCreateThread: (threadId: string) => ChatSession;
  updateMessages: (chatId: string, messages: UIMessage[]) => void;
  showConversation: boolean;
  setShowConversation: (show: boolean) => void;
  clearActiveChat: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      activeChatId: HOME_THREAD_ID,
      chats: {
        [HOME_THREAD_ID]: { id: HOME_THREAD_ID, messages: [] },
      },

      setActiveChatId: (id) => set({ activeChatId: id }),

      getOrCreateThread: (threadId) => {
        const { chats } = get();
        if (chats[threadId]) {
          return chats[threadId];
        }

        const newThread: ChatSession = { id: threadId, messages: [] };
        set((state) => ({
          chats: { ...state.chats, [threadId]: newThread },
        }));
        return newThread;
      },

      updateMessages: (chatId, messages) => {
        set((state) => ({
          chats: {
            ...state.chats,
            [chatId]: { ...state.chats[chatId], messages },
          },
        }));
      },

      showConversation: false,
      setShowConversation: (show) => set({ showConversation: show }),

      clearActiveChat: () => {
        const { activeChatId, chats } = get();
        if (activeChatId) {
          set({
            chats: {
              ...chats,
              [activeChatId]: { ...chats[activeChatId], messages: [] },
            },
          });
        }
      },
    }),
    {
      name: "chat-store",
    }
  )
);
