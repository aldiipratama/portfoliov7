"use client";

import { ChatConversation } from "@/components/chat/chat-conversation";
import { Maintenance } from "@/components/commons/maintenance";
import { PageLayout } from "@/components/layouts/page-layout";
import { useEffect, useState } from "react";

export default function Home() {
  const [showMaintenance, setShowMaintenance] = useState<boolean>(false);

  useEffect(() => {
    setShowMaintenance(process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true");
  }, []);

  return (
    <>
      <Maintenance open={showMaintenance} onOpenChange={setShowMaintenance} />
      <PageLayout>
        <ChatConversation />
      </PageLayout>
    </>
  );
}
