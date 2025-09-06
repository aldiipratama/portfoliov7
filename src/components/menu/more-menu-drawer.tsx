"use client";

import { getMoreMenuList } from "@/data/menu-list";
import { useChatStore } from "@/store/chat-store";
import { useTranslations } from "next-intl";
import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Separator } from "../ui/separator";
import { useChat } from "@ai-sdk/react";

export const MoreMenuDrawer = () => {
  const t = useTranslations();
  const moreMenuList = getMoreMenuList(t);
  const { chat } = useChatStore();
  const { sendMessage } = useChat({ chat });
  const pathname = usePathname();
  const isChatPage = pathname.includes("/chat") && sendMessage;
  const [open, setOpen] = useState(false);

  const handleSendMessage = (message: string) => {
    sendMessage({ parts: [{ type: "text", text: message }] });
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
        >
          <span className="sr-only">More Menu</span>
          <span className={"icon-[solar--menu-dots-bold] text-xl"} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="px-5 flex flex-col gap-10 overflow-auto pb-10">
          {moreMenuList.map((menuList, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <span className={`${menuList.icon} text-xl`} />
                  <DrawerTitle>{menuList.label}</DrawerTitle>
                </div>
                <Separator className="w-full" />
              </div>

              <div className="flex flex-col gap-4">
                {menuList.subMenu.map((item, index) =>
                  isChatPage ? (
                    <Button
                      type="button"
                      variant={item.active ? "default" : "ghost"}
                      className="justify-start"
                      key={item.label}
                      onClick={() => handleSendMessage(item.link!)}
                    >
                      {item.active && (
                        <span className="icon-[mdi--sparkles-outline]" />
                      )}
                      <span className="text-sm">{item.label}</span>
                    </Button>
                  ) : (
                    <Button
                      key={index}
                      variant={item.active ? "default" : "outline"}
                      className="justify-start"
                      asChild
                    >
                      <Link
                        href={`/chat?message=${encodeURIComponent(item.link!)}`}
                      >
                        {item.active && (
                          <span className="icon-[mdi--sparkles-outline]" />
                        )}
                        {item.label}
                      </Link>
                    </Button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
