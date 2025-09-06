"use client";

import { getQuickMenuList } from "@/data/menu-list";
import { useChatStore } from "@/store/chat-store";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PromptInputButton } from "../ai-elements/prompt-input";
import { useChat } from "@ai-sdk/react";

export const QuickMenuList = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const quickMenuList = getQuickMenuList(t);
  const { chat } = useChatStore();
  const { sendMessage } = useChat({ chat });
  const isChatPage = pathname.includes("/chat") && sendMessage;

  const handleSendMessage = (message: string) => {
    sendMessage({ parts: [{ type: "text", text: message }] });
  };

  return quickMenuList.map((item) =>
    isChatPage ? (
      <PromptInputButton
        type="button"
        variant={"outline"}
        className="bg-background"
        key={item.label}
        onClick={() => handleSendMessage(item.link!)}
      >
        <span className={item.icon + " text-xl"} />
        <span className="text-sm">{item.label}</span>
      </PromptInputButton>
    ) : (
      <Link
        key={item.label}
        href={`/chat?message=${encodeURIComponent(item.link!)}`}
      >
        <PromptInputButton className="bg-background" variant={"outline"}>
          <span className={item.icon + " text-xl"} />
          <span className="text-sm">{item.label}</span>
        </PromptInputButton>
      </Link>
    )
  );
};
