"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Menu, Trash } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren, useEffect, useState } from "react";
import { ChatInput } from "../chat/chat-input";
import { DiagonalPattern } from "../commons/diagonal-pattern";
import { LookingForTalent } from "../commons/looking-for-talent";
import { ModeToggle } from "../commons/mode-toggle";
import { useChatContext } from "../providers/chat-provider";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const PageLayout = ({
  className,
  ...props
}: PropsWithChildren & {
  className?: string;
}) => {
  return <LayoutPattern className={className} {...props} />;
};

const LayoutPattern = ({
  className,
  children,
}: PropsWithChildren & { className?: string }) => {
  const { clearChat } = useChatContext();
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "grid grid-rows-[60px_1px_minmax(0,1fr)_1px_min-content_1px_40px] w-screen h-screen overflow-hidden",
        "grid-cols-[20px_minmax(0,_1fr)_20px]", // mobile
        "lg:grid-cols-[20px_minmax(auto,250px)_20px_minmax(0,1fr)_20px_minmax(auto,250px)_20px]" // desktop
      )}
    >
      <DiagonalLayout />
      <SeparatorLayout />

      <AsideLeft>
        <AsideItem row={1} side="left">
          <div className="flex items-center justify-center">
            <LookingForTalent />
          </div>
        </AsideItem>
        <AsideItem row={2} side="left">
          <div className="flex flex-col justify-end py-4">
            <Button
              variant={"destructive"}
              onClick={clearChat}
              className="w-full justify-between"
            >
              Clear Chat
              <Trash />
            </Button>
          </div>
        </AsideItem>
      </AsideLeft>
      <AsideRight>
        <AsideItem row={1} side="right">
          <div className="flex items-center justify-center">
            <ModeToggle />
          </div>
        </AsideItem>
      </AsideRight>

      {isMounted && isMobile && (
        <header className="col-start-2 row-start-1 lg:col-start-4">
          <div className="flex items-center justify-between h-full p-4">
            <LookingForTalent />
            <ModeToggle />
          </div>
        </header>
      )}

      <Main className={cn("relative", className)}>
        {children}
        {isMounted && isMobile && (
          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant={"outline"}
                  className="rounded-full"
                  size={"sm"}
                >
                  <Menu />
                  <span className="text-xs text-muted-foreground uppercase">
                    Menu
                  </span>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                    This action cannot be undone.
                  </DrawerDescription>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>

            <Button
              variant={"destructive"}
              onClick={clearChat}
              size={"sm"}
              className="rounded-full"
            >
              <Trash /> Clear Chat
            </Button>
          </div>
        )}
      </Main>

      <footer className="col-start-2 row-start-7 lg:col-start-4">
        <div className="flex items-center justify-center h-full">
          <p className="text-xs text-center leading-px lg:text-sm text-muted-foreground">
            Hak cipta&copy; {new Date().getFullYear()} oleh
            <Link
              href="https://github.com/aldiipratama"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="link" className="p-0 px-1 text-xs lg:text-sm">
                Aldi Pratama
              </Button>
            </Link>
          </p>
        </div>
      </footer>

      <div className="col-start-2 row-start-5 lg:col-start-4">
        <ChatInput />
      </div>
    </div>
  );
};
LayoutPattern.displayName = "LayoutPattern";

const DiagonalLayout = () => {
  return (
    <>
      <div className={cn("row-start-1 row-span-7 col-start-1")}>
        <DiagonalPattern className="border-r" />
      </div>
      <div className={cn("row-start-1 row-span-7 col-start-3")}>
        <DiagonalPattern className="border-x" />
      </div>
      <div className={cn("hidden lg:block row-start-1 row-span-7 col-start-5")}>
        <DiagonalPattern className="border-x" />
      </div>
      <div className={cn("hidden lg:block row-start-1 row-span-7 col-start-7")}>
        <DiagonalPattern className="border-l" />
      </div>
    </>
  );
};
DiagonalLayout.displayName = "DiagonalLayout";

const SeparatorLayout = () => {
  return (
    <>
      <div className={cn("col-start-1 col-span-7 row-start-2")}>
        <Separator />
      </div>
      <div className={cn("col-start-1 col-span-7 row-start-4")}>
        <Separator />
      </div>
      <div className={cn("col-start-1 col-span-7 row-start-6")}>
        <Separator />
      </div>
    </>
  );
};
SeparatorLayout.displayName = "SeparatorLayout";

const AsideLeft = ({
  className,
  ...props
}: PropsWithChildren & { className?: string }) => {
  return (
    <aside
      className={cn(
        "hidden lg:grid grid-rows-subgrid row-start-1 row-span-7 col-start-2 px-4",
        className
      )}
      {...props}
    />
  );
};
AsideLeft.displayName = "AsideLeft";

const AsideRight = ({
  className,
  ...props
}: PropsWithChildren & { className?: string }) => {
  return (
    <aside
      className={cn(
        "hidden lg:grid grid-rows-subgrid row-start-1 row-span-7 col-start-6 px-4",
        className
      )}
      {...props}
    />
  );
};
AsideRight.displayName = "AsideRight";

const AsideItem = ({
  className,
  row = 1,
  side,
  ...props
}: PropsWithChildren & {
  className?: string;
  row?: number;
  side: "left" | "right";
}) => {
  const rowStart =
    ["row-start-1", "row-start-3", "row-start-5", "row-start-7"][row - 1] ||
    "row-start-1";
  return <div className={cn("*:h-full", rowStart, className)} {...props} />;
};
AsideItem.displayName = "AsideItem";

const Main = ({
  className,
  ...props
}: PropsWithChildren & { className?: string }) => {
  return (
    <main
      className={cn(
        "row-start-3 col-start-2 lg:col-start-4 overflow-hidden",
        className
      )}
      {...props}
    />
  );
};
Main.displayName = "Main";
