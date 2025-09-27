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
import { Badge } from "../ui/badge";
import { Zap } from "lucide-react";

export const ChatInput = () => {
  const [input, setInput] = useState<string>("");
  const { sendMessage, status, remainingSessionQuota, remainingDailyQuota } =
    useChatContext();

  const handleSubmit = (message: PromptInputMessage) => {
    if (!message.text) return;

    sendMessage({ text: message.text });
    setInput("");
  };

  const isDailyQuotaReached =
    remainingDailyQuota !== null && remainingDailyQuota <= 0;
  const isSessionQuotaReached = remainingSessionQuota <= 0;
  const isInputDisabled =
    !status || isSessionQuotaReached || isDailyQuotaReached;

  const getPlaceholderText = () => {
    if (isDailyQuotaReached) {
      return "Batas penggunaan harian tercapai. Silakan kembali besok.";
    }
    if (isSessionQuotaReached) {
      return "Batas sesi tercapai. Mulai sesi baru untuk melanjutkan.";
    }
    return "Tanyakan apapun tentang saya...";
  };

  return (
    <PromptInput onSubmit={handleSubmit} className="border-none">
      <PromptInputBody>
        <PromptInputTextarea
          placeholder={getPlaceholderText()}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isInputDisabled}
        />
      </PromptInputBody>
      <PromptInputToolbar>
        <PromptInputTools>
          {remainingDailyQuota !== null && !isDailyQuotaReached && (
            <>
              <Badge variant="secondary" className="text-xs">
                <Zap />
                Sesi tersisa: {remainingSessionQuota ?? 0}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                <Zap />
                Quota Harian tersisa: {remainingDailyQuota ?? 0}
              </Badge>
            </>
          )}
        </PromptInputTools>
        <PromptInputSubmit
          disabled={!input.trim() && isInputDisabled}
          status={status}
        />
      </PromptInputToolbar>
    </PromptInput>
  );
};
