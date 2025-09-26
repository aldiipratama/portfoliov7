"use client";

import { MessageCircleDashed } from "lucide-react";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
} from "../ai-elements/conversation";
import { Loader } from "../ai-elements/loader";
import { Message, MessageContent } from "../ai-elements/message";
import { Response } from "../ai-elements/response";
import { useChatContext } from "../providers/chat-provider";
import { ScrollArea, ScrollButton } from "../ui/scroll-area";

export const ChatConversation = () => {
  const { messages, status } = useChatContext();

  return (
    <ScrollArea mode="stick-to-bottom">
      <Conversation className="h-full">
        <ConversationContent>
          {messages.length === 0 ? (
            <ConversationEmptyState
              icon={<MessageCircleDashed />}
              title="Belum ada pesan"
              description="Mulailah percakapan untuk melihat pesan di sini"
            />
          ) : (
            messages.map((message, msgIdx) => (
              <Message key={msgIdx} from={message.role}>
                <MessageContent>
                  {message.parts.map((part, partIdx) => {
                    switch (part.type) {
                      case "text":
                        return <Response key={partIdx}>{part.text}</Response>;
                    }
                  })}
                </MessageContent>
              </Message>
            ))
          )}
          {status === "submitted" && <Loader />}
        </ConversationContent>
      </Conversation>
      <ScrollButton />
    </ScrollArea>
  );
};
