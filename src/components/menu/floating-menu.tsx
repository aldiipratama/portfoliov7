"use client";

import { getQuickMenuList } from "@/data/menu-list";
import { useChatStore } from "@/store/chat-store";
import { Plus, X } from "lucide-react";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { MoreMenuDrawer } from "./more-menu-drawer";
import { useChat } from "@ai-sdk/react";

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const quickMenuList = getQuickMenuList(t);
  const { chat } = useChatStore();
  const { sendMessage } = useChat({ chat });
  const pathname = usePathname();
  const isChatPage = pathname.includes("/chat") && sendMessage;

  const handleSendMessage = (message: string) => {
    if (sendMessage) {
      sendMessage({ parts: [{ type: "text", text: message }] });
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24,
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  const mainButtonVariants = {
    open: {
      rotate: 45,
      scale: 1.05,
      transition: { duration: 0.3, ease: easeInOut },
    },
    closed: {
      rotate: 0,
      scale: 1,
      transition: { duration: 0.3, ease: easeInOut },
    },
  };

  return (
    <div className="fixed bottom-40 right-6 z-50">
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute bottom-16 right-0 flex flex-col-reverse gap-2 pb-2"
            >
              <div className="flex items-center justify-end gap-3">
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ delay: 0.1 }}
                  className="bg-background/95 backdrop-blur-sm border rounded-full px-3 py-1.5 shadow-md"
                >
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">
                    More
                  </span>
                </motion.div>
                <MoreMenuDrawer />
              </div>

              {quickMenuList.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="flex items-center justify-end gap-3"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ delay: 0.1 }}
                    className="bg-background/95 backdrop-blur-sm border rounded-full px-3 py-1.5 shadow-md"
                  >
                    <span className="text-xs font-medium text-foreground whitespace-nowrap">
                      {item.label}
                    </span>
                  </motion.div>

                  {isChatPage ? (
                    <Button
                      type="button"
                      variant="default"
                      size="icon"
                      className="w-10 h-10 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                      key={item.label}
                      onClick={() => handleSendMessage(item.link!)}
                    >
                      <span className={item.icon + " text-xl"} />
                    </Button>
                  ) : (
                    <Button
                      size="icon"
                      variant="default"
                      className="w-10 h-10 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                      asChild
                    >
                      <Link
                        href={`/chat?message=${encodeURIComponent(item.link!)}`}
                      >
                        <span className={item.icon + " text-xl"} />
                      </Link>
                    </Button>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          variants={mainButtonVariants}
          animate={isOpen ? "open" : "closed"}
        >
          <Button
            size="icon"
            className="w-10 h-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 border-2 border-background"
            onClick={toggleMenu}
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
