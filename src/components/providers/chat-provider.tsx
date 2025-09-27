"use client";

import { ChatMessage } from "@/app/api/chat/route";
import { Chat, useChat, UseChatHelpers } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { v4 } from "uuid";
import { toast } from "sonner";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

interface ChatContextValue extends UseChatHelpers<ChatMessage> {
  clearChat: () => void;
  remainingSessionQuota: number;
  remainingDailyQuota: number | null;
  dailyQuotaLimit: number | null;
}

const ChatContext = createContext<ChatContextValue | null>(null);

const getSessionId = () => {
  if (typeof window !== "undefined") {
    let sessionId = sessionStorage.getItem("chat_sessionId");
    if (!sessionId) {
      sessionId = v4();
      sessionStorage.setItem("chat_sessionId", sessionId);
    }
    return sessionId;
  }
  return null;
};

function createChat(sessionId?: string | null, visitorId?: string | null) {
  return new Chat<ChatMessage>({
    transport: new DefaultChatTransport({
      api: "/api/chat",
      headers: {
        "x-session-id": sessionId || "",
        "x-visitor-id": visitorId || "",
      },
    }),
  });
}

const SESSION_QUOTA = 20;

export function ChatProvider({ children }: PropsWithChildren) {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [visitorId, setVisitorId] = useState<string | null>(null);
  const [remainingDailyQuota, setRemainingDailyQuota] = useState<number | null>(
    null
  );
  const [dailyQuotaLimit, setDailyQuotaLimit] = useState<number | null>(null);
  const [chat, setChat] = useState(() => createChat());

  const chatHelpers = useChat({ chat });

  const userMessageCount = chatHelpers.messages.filter(
    (msg) => msg.role === "user"
  ).length;
  const remainingSessionQuota = Math.max(0, SESSION_QUOTA - userMessageCount);

  useEffect(() => {
    const getVisitorId = async () => {
      let visitorId = localStorage.getItem("visitor_id");
      if (!visitorId) {
        try {
          const fp = await FingerprintJS.load();
          const result = await fp.get();
          visitorId = result.visitorId;
          localStorage.setItem("visitor_id", visitorId);
        } catch (error) {
          console.error("Failed to get visitor ID:", error);
          visitorId = "fingerprint-error";
        }
      }
      setVisitorId(visitorId);
      setSessionId(getSessionId());
    };

    getVisitorId();
  }, []);

  useEffect(() => {
    if (sessionId && visitorId) {
      setChat(createChat(sessionId, visitorId));

      const fetchQuota = async () => {
        try {
          const response = await fetch("/api/quota", {
            headers: { "x-visitor-id": visitorId },
          });
          if (!response.ok) return;
          const data = await response.json();
          setRemainingDailyQuota(data.remaining);
          setDailyQuotaLimit(data.limit);
        } catch (error) {
          console.error("Failed to fetch quota:", error);
        }
      };
      fetchQuota();
    }
  }, [sessionId, visitorId]);

  const clearChat = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("chat_sessionId");
    }
    const newSessionId = getSessionId();
    setSessionId(newSessionId);
    chatHelpers.setMessages([]);
  }, [chatHelpers.setMessages]);

  useEffect(() => {
    if (remainingSessionQuota === 0 && userMessageCount > 0) {
      toast.warning("Anda telah mencapai batas pesan untuk sesi ini.", {
        description:
          "Segarkan halaman untuk memulai percakapan baru atau klik tombol disamping untuk membuat sesi baru.",
        action: {
          label: "Clear Chat",
          onClick: () => {
            clearChat();
          },
        },
        duration: 10000,
      });
    }
  }, [remainingSessionQuota, userMessageCount, clearChat]);

  useEffect(() => {
    if (remainingDailyQuota !== null && remainingDailyQuota <= 0) {
      toast.error("Batas Penggunaan Harian Tercapai", {
        description:
          "Anda telah mencapai batas maksimal penggunaan untuk hari ini. Silakan kembali besok.",
        duration: 10000,
      });
    }
  }, [remainingDailyQuota]);

  const contextValue = useMemo(
    () => ({
      ...chatHelpers,
      clearChat,
      remainingSessionQuota,
      remainingDailyQuota,
      dailyQuotaLimit,
    }),
    [
      chatHelpers.messages,
      chatHelpers.setMessages,
      chatHelpers,
      clearChat,
      remainingSessionQuota,
      remainingDailyQuota,
      dailyQuotaLimit,
    ]
  );

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
}
