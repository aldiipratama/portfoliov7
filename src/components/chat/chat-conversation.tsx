import { useChatStore } from "@/store/chat-store";
import { useChat } from "@ai-sdk/react";
import { motion } from "framer-motion";
import { RefreshCcwIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Action, Actions } from "../ai-elements/actions";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "../ai-elements/conversation";
import { Loader } from "../ai-elements/loader";
import { Message, MessageAvatar, MessageContent } from "../ai-elements/message";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "../ai-elements/reasoning";
import { Response } from "../ai-elements/response";
import { TextRipple } from "../ui/text-ripple";
import {
  AboutMeCard,
  ContactCard,
  FunFactCard,
  ProjectsCard,
  SkillsCard,
  TestimonialsCard,
} from "../cards";
import {
  IAboutMeData,
  IContactData,
  IFunFactData,
  IProjectsData,
  ISkillsData,
  ITestimonialsData,
} from "@/types/data";

const ChatConversation = () => {
  const t = useTranslations("page.chatPage");
  const tReason = useTranslations("etc.reasoning");
  const { chat } = useChatStore();
  const { status, messages } = useChat({ chat });
  const isLoading = status === "submitted";

  console.log({ messages });

  return (
    <div className="w-full sm:w-4xl flex-1 place-content-center overflow-hidden mx-auto mt-5">
      {messages.length === 0 ? (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <TextRipple className="text-center text-xl sm:text-3xl md:text-4xl">
              {t("greeting")}
            </TextRipple>
          </motion.div>
          {/* <Suggestions className="mx-auto">
            <Suggestion suggestion="Hello, how can I assist you today?" />
          </Suggestions> */}
        </div>
      ) : (
        <Conversation className="h-full">
          <ConversationContent>
            {messages.map((message, messageIndex) => {
              const isLastMessage = messageIndex === messages.length - 1;
              return (
                <Message from={message.role} key={message.id}>
                  <MessageContent>
                    {message.parts.map((part, idx) => {
                      switch (part.type) {
                        case "text":
                          return (
                            <div key={`${message.id}-${idx}`}>
                              <Response className={`text-sm`}>
                                {part.text}
                              </Response>
                              {message.role === "assistant" &&
                                isLastMessage && (
                                  <Actions className="mt-2">
                                    <Action
                                      onClick={() => chat.regenerate()}
                                      label="Retry"
                                      variant={"outline"}
                                    >
                                      <RefreshCcwIcon className="size-3" />
                                    </Action>
                                  </Actions>
                                )}
                            </div>
                          );
                        case "tool-getAboutMe":
                          if (part.state === "output-available") {
                            return (
                              <div key={`${message.id}-${idx}`}>
                                <AboutMeCard
                                  data={part.output as IAboutMeData}
                                />

                                {message.role === "assistant" &&
                                  isLastMessage && (
                                    <Actions className="mt-2">
                                      <Action
                                        onClick={() => chat.regenerate()}
                                        label="Retry"
                                        variant={"outline"}
                                      >
                                        <RefreshCcwIcon className="size-3" />
                                      </Action>
                                    </Actions>
                                  )}
                              </div>
                            );
                          } else {
                            return (
                              <Reasoning key={`${message.id}-${idx}`}>
                                <ReasoningTrigger>
                                  {tReason("thinking")}
                                </ReasoningTrigger>
                                <ReasoningContent>
                                  {tReason("analyzingProfile")}
                                </ReasoningContent>
                              </Reasoning>
                            );
                          }
                        case "tool-getProjects":
                          if (part.state === "output-available") {
                            return (
                              <div key={`${message.id}-${idx}`}>
                                <ProjectsCard
                                  data={part.output as IProjectsData}
                                />

                                {message.role === "assistant" &&
                                  isLastMessage && (
                                    <Actions className="mt-2">
                                      <Action
                                        onClick={() => chat.regenerate()}
                                        label="Retry"
                                        variant={"outline"}
                                      >
                                        <RefreshCcwIcon className="size-3" />
                                      </Action>
                                    </Actions>
                                  )}
                              </div>
                            );
                          } else {
                            return (
                              <Reasoning key={`${message.id}-${idx}`}>
                                <ReasoningTrigger>
                                  {tReason("thinking")}
                                </ReasoningTrigger>
                                <ReasoningContent>
                                  {tReason("fetchingProjects")}
                                </ReasoningContent>
                              </Reasoning>
                            );
                          }
                        case "tool-getSkills":
                          if (part.state === "output-available") {
                            return (
                              <div key={`${message.id}-${idx}`}>
                                <SkillsCard data={part.output as ISkillsData} />

                                {message.role === "assistant" &&
                                  isLastMessage && (
                                    <Actions className="mt-2">
                                      <Action
                                        onClick={() => chat.regenerate()}
                                        label="Retry"
                                        variant={"outline"}
                                      >
                                        <RefreshCcwIcon className="size-3" />
                                      </Action>
                                    </Actions>
                                  )}
                              </div>
                            );
                          } else {
                            return (
                              <Reasoning key={`${message.id}-${idx}`}>
                                <ReasoningTrigger>
                                  {tReason("thinking")}
                                </ReasoningTrigger>
                                <ReasoningContent>
                                  {tReason("fetchingProjects")}
                                </ReasoningContent>
                              </Reasoning>
                            );
                          }
                        case "tool-getFunFact":
                          if (part.state === "output-available") {
                            return (
                              <div key={`${message.id}-${idx}`}>
                                <FunFactCard
                                  data={part.output as IFunFactData}
                                />

                                {message.role === "assistant" &&
                                  isLastMessage && (
                                    <Actions className="mt-2">
                                      <Action
                                        onClick={() => chat.regenerate()}
                                        label="Retry"
                                        variant={"outline"}
                                      >
                                        <RefreshCcwIcon className="size-3" />
                                      </Action>
                                    </Actions>
                                  )}
                              </div>
                            );
                          } else {
                            return (
                              <Reasoning key={`${message.id}-${idx}`}>
                                <ReasoningTrigger>
                                  {tReason("thinking")}
                                </ReasoningTrigger>
                                <ReasoningContent>
                                  {tReason("collectingData")}
                                </ReasoningContent>
                              </Reasoning>
                            );
                          }
                        case "tool-getContact":
                          if (part.state === "output-available") {
                            return (
                              <div key={`${message.id}-${idx}`}>
                                <ContactCard
                                  data={part.output as IContactData}
                                />

                                {message.role === "assistant" &&
                                  isLastMessage && (
                                    <Actions className="mt-2">
                                      <Action
                                        onClick={() => chat.regenerate()}
                                        label="Retry"
                                        variant={"outline"}
                                      >
                                        <RefreshCcwIcon className="size-3" />
                                      </Action>
                                    </Actions>
                                  )}
                              </div>
                            );
                          } else {
                            return (
                              <Reasoning key={`${message.id}-${idx}`}>
                                <ReasoningTrigger>
                                  {tReason("thinking")}
                                </ReasoningTrigger>
                                <ReasoningContent>
                                  {tReason("collectingData")}
                                </ReasoningContent>
                              </Reasoning>
                            );
                          }
                        case "tool-getTestimonials":
                          if (part.state === "output-available") {
                            return (
                              <div key={`${message.id}-${idx}`}>
                                <TestimonialsCard
                                  data={part.output as ITestimonialsData}
                                />

                                {message.role === "assistant" &&
                                  isLastMessage && (
                                    <Actions className="mt-2">
                                      <Action
                                        onClick={() => chat.regenerate()}
                                        label="Retry"
                                        variant={"outline"}
                                      >
                                        <RefreshCcwIcon className="size-3" />
                                      </Action>
                                    </Actions>
                                  )}
                              </div>
                            );
                          } else {
                            return (
                              <Reasoning key={`${message.id}-${idx}`}>
                                <ReasoningTrigger>
                                  {tReason("thinking")}
                                </ReasoningTrigger>
                                <ReasoningContent>
                                  {tReason("fetchingTestimonials")}
                                </ReasoningContent>
                              </Reasoning>
                            );
                          }
                        case "tool-getThankYouMessage":
                          if (part.state === "output-available") {
                            return (
                              <div key={`${message.id}-${idx}`}>
                                <Response className={`text-sm`}>
                                  {part.output as string}
                                </Response>

                                {message.role === "assistant" &&
                                  isLastMessage && (
                                    <Actions className="mt-2">
                                      <Action
                                        onClick={() => chat.regenerate()}
                                        label="Retry"
                                        variant={"outline"}
                                      >
                                        <RefreshCcwIcon className="size-3" />
                                      </Action>
                                    </Actions>
                                  )}
                              </div>
                            );
                          } else {
                            return (
                              <Reasoning key={`${message.id}-${idx}`}>
                                <ReasoningTrigger>
                                  {tReason("thinking")}
                                </ReasoningTrigger>
                                <ReasoningContent>
                                  {tReason("fetchingTestimonials")}
                                </ReasoningContent>
                              </Reasoning>
                            );
                          }
                        default:
                          break;
                      }
                    })}
                  </MessageContent>
                  {message.role === "assistant" && (
                    <MessageAvatar
                      src={"/img/avatar.png"}
                      className="self-start size-14 -mt-7"
                    />
                  )}
                </Message>
              );
            })}
            {isLoading && <Loader />}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
      )}
    </div>
  );
};

export default ChatConversation;
