"use client";

import { useChatContext } from "@/context/chat-context";
import { MessageCircleDashed } from "lucide-react";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "../ai-elements/conversation";
import { Loader } from "../ai-elements/loader";
import { Message, MessageContent } from "../ai-elements/message";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "../ai-elements/reasoning";
import { Response } from "../ai-elements/response";

export const ChatConversation = () => {
  const { messages, status } = useChatContext();

  return (
    <Conversation className="h-full">
      <ConversationContent>
        {messages.length === 0 ? (
          <ConversationEmptyState
            icon={<MessageCircleDashed />}
            title="Belum ada pesan"
            description="Mulailah percakapan untuk melihat pesan di sini"
          />
        ) : (
          messages.map((msg, msgIdx) => (
            <Message key={`${msg.id}-${msgIdx}`} from={msg.role}>
              <MessageContent>
                {msg.parts.map((part, idx) => {
                  switch (part.type) {
                    case "text":
                      return (
                        <Response key={`${msg.id}-${msgIdx}-${idx}`}>
                          {part.text}
                        </Response>
                      );
                    case "reasoning":
                      return (
                        <Reasoning
                          key={`${msg.id}-${msgIdx}-${idx}`}
                          isStreaming={
                            status === "streaming" &&
                            idx === msg.parts.length - 1 &&
                            msg.id === messages.at(-1)?.id
                          }
                        >
                          <ReasoningTrigger />
                          <ReasoningContent>{part.text}</ReasoningContent>
                        </Reasoning>
                      );
                    default:
                      return null;
                  }
                })}
              </MessageContent>
            </Message>
          ))
        )}
        {status === "submitted" && <Loader />}
      </ConversationContent>
      <ConversationScrollButton />
    </Conversation>
  );
};
