"use client";

import { useChatContext } from "@/context/chat-context";
import { memo, useState } from "react";
import {
  PromptInput,
  PromptInputBody,
  PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from "../ai-elements/prompt-input";
import { useChatStore } from "@/stores/chat-store";

export const ChatInput = memo(function ChatInput() {
  const [input, setInput] = useState<string>("");
  const { setShowConversation } = useChatStore();
  const { sendMessage, status } = useChatContext();

  const handleSubmit = (message: PromptInputMessage) => {
    sendMessage({ text: message.text! });
    setShowConversation(true);
    setInput("");
  };

  return (
    <PromptInput onSubmit={handleSubmit}>
      <PromptInputBody>
        <PromptInputTextarea
          placeholder="Tanyakan apapun tentang saya..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </PromptInputBody>
      <PromptInputToolbar>
        <PromptInputTools></PromptInputTools>
        <PromptInputSubmit
          disabled={!input.trim() && status === "streaming"}
          status={status}
        />
      </PromptInputToolbar>
    </PromptInput>
  );
});
