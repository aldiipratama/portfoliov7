"use client";

import ChatInputForm from "@/components/chat/chat-input-form";
import HeaderHome from "@/components/header-home";
import HeroHome from "@/components/hero-home";
import { useChatStore } from "@/store/chat-store";
import { useEffect } from "react";

export default function Home() {
  const { clearChat } = useChatStore();

  useEffect(() => {
    clearChat();
  }, [clearChat]);

  return (
    <main className="md:container px-4 sm:px-0 mx-auto overflow-hidden h-screen flex flex-col justify-between pb-5">
      <HeaderHome />
      <HeroHome />
      <ChatInputForm />
    </main>
  );
}
