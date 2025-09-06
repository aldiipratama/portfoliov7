import { getMoreMenuList } from "@/data/menu-list";
import { useChatStore } from "@/store/chat-store";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useChat } from "@ai-sdk/react";

export const MoreMenuDropdown = () => {
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
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <span className="icon-[solar--menu-dots-bold]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top">
        {moreMenuList.map((list, idx) => {
          return (
            <DropdownMenuSub key={idx}>
              <DropdownMenuSubTrigger className="font-bold">
                <span className={`${list.icon} text-xl`} />
                <span className="pt-1.5 ml-1">{list.label}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="flex flex-col">
                  {list.subMenu.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      {isChatPage ? (
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
                          variant={item.active ? "default" : "ghost"}
                          className="justify-start"
                          asChild
                        >
                          <Link
                            href={`/chat?message=${encodeURIComponent(
                              item.link!
                            )}`}
                          >
                            {item.active && (
                              <span className="icon-[mdi--sparkles-outline]" />
                            )}
                            {item.label}
                          </Link>
                        </Button>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
