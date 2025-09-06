import { useChatStore } from "@/store/chat-store";
import { useState } from "react";
import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from "../ai-elements/prompt-input";
import { MoreMenuDrawer, MoreMenuDropdown, QuickMenuList } from "../menu";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const ChatInputForm = () => {
  const [input, setInput] = useState<string>("");
  const { chat } = useChatStore();
  const { sendMessage, status } = useChat({ chat });
  const isMobile = useMediaQuery("(max-width: 768px)").isMatch;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("page.chatPage");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (pathname === "/" || pathname !== "/chat") {
      router.push(`/chat?message=${encodeURIComponent(input.trim())}`);
    } else {
      sendMessage({ parts: [{ type: "text", text: input }] });
    }
    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="space-y-2.5 items-center w-full sm:w-4xl mx-auto"
    >
      <PromptInput onSubmit={handleSubmit} className="w-full">
        <PromptInputTextarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={t("inputPrompt")}
        />
        <PromptInputToolbar>
          <PromptInputTools>
            {!isMobile && <QuickMenuList />}
            {isMobile ? <MoreMenuDrawer /> : <MoreMenuDropdown />}
          </PromptInputTools>
          <PromptInputSubmit disabled={!input.trim()} status={status} />
        </PromptInputToolbar>
      </PromptInput>
    </motion.div>
  );
};

export default ChatInputForm;
