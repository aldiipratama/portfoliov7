"use client";

import { useChatContext } from "@/context/chat-context";
import { homeNavItem, navigationItems } from "@/lib/navigation-config";
import { useChatStore } from "@/stores/chat-store";
import { ChevronRight, Trash } from "lucide-react";
import { Button } from "../ui/button";

export const Navigation = () => {
  const {
    activeChatId,
    getOrCreateThread,
    setActiveChatId,
    clearActiveChat,
    setShowConversation,
  } = useChatStore();
  const { setMessages, sendMessage } = useChatContext();

  const handleNavClick = (threadId: string, initialPrompt: string) => {
    const thread = getOrCreateThread(threadId);

    setActiveChatId(threadId);

    if (thread.messages.length === 0) {
      sendMessage({ text: initialPrompt });
      setShowConversation(true);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    clearActiveChat();
  };

  return (
    <div className="flex flex-col justify-between h-full p-4">
      <div className="flex flex-col gap-4">
        <Button
          key={homeNavItem.id}
          variant={activeChatId === homeNavItem.id ? "secondary" : "outline"}
          className="justify-between"
          onClick={() => setActiveChatId(homeNavItem.id)}
        >
          <div className="flex gap-2">
            <homeNavItem.icon />
            {homeNavItem.label}
          </div>
          <ChevronRight />
        </Button>

        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeChatId === item.id ? "secondary" : "outline"}
              className="justify-between"
              onClick={() => handleNavClick(item.id, item.initialPrompt)}
            >
              <div className="flex gap-2">
                <Icon />
                {item.label}
              </div>
              <ChevronRight />
            </Button>
          );
        })}
      </div>

      <Button variant={"destructive"} onClick={handleClearChat}>
        <Trash />
        Hapus Percakapan
      </Button>
    </div>
  );
};
