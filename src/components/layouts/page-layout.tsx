"use client";

import { cn } from "@/lib/utils";
import { memo, PropsWithChildren } from "react";
import { ChatInput } from "../chat/chat-input";
import { DiagonalPattern } from "../commons/diagonal-pattern";
import { LookingForTalent } from "../commons/looking-for-talent";
import { ModeToggle } from "../commons/mode-toggle";
import { ThemeSelector } from "../commons/theme-selector";
import { Separator } from "../ui/separator";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navigation } from "./navigation";

export const PageLayout = memo(function PageLayout({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <LayoutPattern className={className}>
      <DiagonalLayout />
      <SeparatorLayout />

      <AsideLeft>
        <AsideItem side="left" className="flex items-center justify-center">
          <LookingForTalent />
        </AsideItem>
        <AsideItem row={2} side="left">
          <Navigation />
        </AsideItem>
      </AsideLeft>

      <Header />

      {children}

      <div className="col-start-2 row-start-5 lg:col-start-4">
        <ChatInput />
      </div>

      <Footer />

      <AsideRight>
        <AsideItem side="right">
          <div className="flex items-center justify-center h-full gap-2">
            <ModeToggle />
            <ThemeSelector />
          </div>
        </AsideItem>
      </AsideRight>
    </LayoutPattern>
  );
});

const AsideLeft = memo(function AsideLeft({
  className,
  ...props
}: PropsWithChildren & { className?: string }) {
  return (
    <div
      className={cn(
        "hidden lg:grid grid-rows-subgrid row-start-1 row-span-7 col-start-2",
        className
      )}
      {...props}
    />
  );
});

const AsideRight = memo(function AsideRight({
  className,
  ...props
}: PropsWithChildren & { className?: string }) {
  return (
    <div
      className={cn(
        "hidden lg:grid grid-rows-subgrid row-start-1 row-span-7 col-start-6",
        className
      )}
      {...props}
    />
  );
});

export const Main = memo(function Main({
  className,
  ...props
}: PropsWithChildren & { className?: string }) {
  return (
    <main
      className={cn(
        "row-start-3 col-start-2 lg:col-start-4 overflow-hidden",
        className
      )}
      {...props}
    />
  );
});
Main.displayName = "Main";

const AsideItem = memo(function AsideItem({
  className,
  row = 1,
  side,
  ...props
}: PropsWithChildren & {
  className?: string;
  row?: number;
  side: "left" | "right";
}) {
  const rowStart =
    ["row-start-1", "row-start-3", "row-start-5", "row-start-7"][row - 1] ||
    "row-start-1";
  return <div className={cn(rowStart, className)} {...props} />;
});

const LayoutPattern = memo(function LayoutPattern({
  className,
  ...props
}: PropsWithChildren & {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-rows-[60px_1px_minmax(0,1fr)_1px_130px_1px_40px] w-screen h-screen overflow-hidden",
        "grid-cols-[20px_minmax(0,_1fr)_20px]", // mobile
        "lg:grid-cols-[20px_minmax(auto,250px)_20px_minmax(0,1fr)_20px_minmax(auto,250px)_20px]", // desktop
        className
      )}
      {...props}
    />
  );
});

const DiagonalLayout = memo(function DiagonalLayout() {
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
});

const SeparatorLayout = memo(function SeparatorLayout() {
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
});
