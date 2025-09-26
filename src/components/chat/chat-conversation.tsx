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
import { Button } from "../ui/button";

const suggestions = [
  {
    text: "Ceritakan tentangmu!",
  },
  {
    text: "Apa keahlianmu?",
  },
  {
    text: "Apa pengalaman kerjamu?",
  },
  {
    text: "Apa proyek terakhirmu?",
  },
];

export const ChatConversation = () => {
  const { messages, status, sendMessage } = useChatContext();

  const handleSuggestionClick = (text: string) => {
    sendMessage({ text });
  };

  return (
    <ScrollArea mode="stick-to-bottom">
      <Conversation className="h-full">
        <ConversationContent>
          {messages.length === 0 ? (
            <div className="flex flex-col items-center">
              <ConversationEmptyState
                icon={<MessageCircleDashed />}
                title="Belum ada pesan"
                description="Mulailah percakapan untuk melihat pesan di sini"
                className="pb-0"
              />
              <p className="text-sm text-muted-foreground">
                atau klik salah satu contoh pertanyaan di bawah ini
              </p>
              <div className="flex flex-col gap-2 mt-4">
                {suggestions.map((suggestion, suggestIdx) => (
                  <Button
                    key={suggestIdx}
                    variant="outline"
                    size="sm"
                    className="text-muted-foreground"
                    onClick={() => handleSuggestionClick(suggestion.text)}
                  >
                    {suggestion.text}
                  </Button>
                ))}
              </div>
            </div>
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
