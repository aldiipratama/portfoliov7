"use client";

import { ChatConversation } from "@/components/chat/chat-conversation";
import { Maintenance } from "@/components/commons/maintenance";
import { PercentageLoader } from "@/components/commons/percentage-loader";
import { Main, PageLayout } from "@/components/layouts/page-layout";
import { WelcomeBoard } from "@/components/onboarding/welcome-board";
import { ChatProvider } from "@/components/providers/chat-provider";
import { useChatStore } from "@/stores/chat-store";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const { showConversation } = useChatStore();
  const [showMaintenance, setShowMaintenance] = useState(false);

  useEffect(() => {
    const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
    setShowMaintenance(maintenanceMode);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!showContent ? (
        <PercentageLoader
          key="loader"
          onComplete={() => setShowContent(true)}
        />
      ) : (
        <ChatProvider>
          <Maintenance
            open={showMaintenance}
            onOpenChange={setShowMaintenance}
          />
          <PageLayout key="content">
            <Main className="overflow-y-auto">
              {!showConversation ? <WelcomeBoard /> : <ChatConversation />}
            </Main>
          </PageLayout>
        </ChatProvider>
      )}
    </AnimatePresence>
  );
}
