"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";
import { DateTime } from "../commons/datetime";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { memo } from "react";
import { cn } from "@/lib/utils";
import { LookingForTalent } from "../commons/looking-for-talent";
import { ModeToggle } from "../commons/mode-toggle";
import { ThemeSelector } from "../commons/theme-selector";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Navigation } from "./navigation";

export const Header = memo(function Header({
  className,
}: {
  className?: string;
}) {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <div
      className={cn("row-start-1 col-start-2 lg:col-start-4 px-4", className)}
    >
      <div className="flex items-center justify-between h-full">
        {!isMobile ? (
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  {pathname === "/"
                    ? "Home"
                    : pathname.replace("/", "").charAt(0).toUpperCase() +
                      pathname.replace("/", "").slice(1)}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ) : (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle>
                  <LookingForTalent />
                </SheetTitle>
              </SheetHeader>
              <Navigation />
            </SheetContent>
          </Sheet>
        )}

        {!isMobile ? (
          <DateTime />
        ) : (
          <div className="flex items-center gap-2">
            <ModeToggle />
            <ThemeSelector />
          </div>
        )}
      </div>
    </div>
  );
});
