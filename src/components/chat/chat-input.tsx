"use client";

import { useState } from "react";
import {
  PromptInput,
  PromptInputBody,
  PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from "../ai-elements/prompt-input";
import { useChatContext } from "../providers/chat-provider";

export const ChatInput = () => {
  const [input, setInput] = useState<string>("");
  const { sendMessage, status } = useChatContext();

  const handleSubmit = (message: PromptInputMessage) => {
    if (!message.text) return;

    sendMessage({ text: message.text });
    setInput("");
  };

  return (
    <PromptInput onSubmit={handleSubmit} className="border-none">
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
          disabled={!input.trim() && !status}
          status={status}
        />
      </PromptInputToolbar>
    </PromptInput>
  );
};
