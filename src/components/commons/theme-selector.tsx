"use client";

import { Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useTheme } from "@/hooks/use-theme";
import { getCssVariableValue } from "@/lib/utils";
import { DiagonalPattern } from "./diagonal-pattern";
import { Separator } from "../ui/separator";
import Link from "next/link";

export const ThemeSelector = () => {
  const { themes, setTheme, resolvedTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Palette /> <span className="hidden lg:block">Pilih Tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-80 mr-10 grid grid-cols-[20px_minmax(0,_1fr)_20px] grid-rows-[minmax(auto,_30px)_1px_minmax(0,_1fr)_1px_minmax(auto,_30px)] p-0 overflow-hidden">
        <div className="col-start-1 row-span-5 row-start-1">
          <DiagonalPattern className="border-r" />
        </div>
        <div className="col-start-3 row-span-5 row-start-1">
          <DiagonalPattern className="border-l" />
        </div>

        <div className="col-start-2 row-start-1">
          <DropdownMenuLabel>Pilih Tema</DropdownMenuLabel>
        </div>

        <div className="col-span-3 col-start-1 row-start-2">
          <Separator />
        </div>

        <div className="h-full col-start-2 row-start-3">
          <div className="flex flex-col h-full overflow-y-auto">
            {Object.entries(themes)
              .sort()
              .map(([key, theme]) => (
                <DropdownMenuItem
                  key={key}
                  className="justify-between cursor-pointer"
                  onClick={() => setTheme(key as keyof typeof themes)}
                >
                  <div className="flex items-center gap-2">
                    <div className="grid grid-cols-2 gap-px p-1 border rounded-md bg-background">
                      <div
                        className="rounded-full size-2"
                        style={{
                          backgroundColor: getCssVariableValue(
                            theme.cssVariable.light,
                            "--primary"
                          ),
                        }}
                      />
                      <div
                        className="rounded-full size-2"
                        style={{
                          backgroundColor: getCssVariableValue(
                            theme.cssVariable.light,
                            "--secondary"
                          ),
                        }}
                      />
                      <div
                        className="rounded-full size-2"
                        style={{
                          backgroundColor: getCssVariableValue(
                            theme.cssVariable.light,
                            "--accent"
                          ),
                        }}
                      />
                      <div
                        className="rounded-full size-2"
                        style={{
                          backgroundColor: getCssVariableValue(
                            theme.cssVariable.light,
                            "--destructive"
                          ),
                        }}
                      />
                    </div>
                    {theme.name}
                  </div>
                  <span>{resolvedTheme === key && "✓"}</span>
                </DropdownMenuItem>
              ))}
          </div>
        </div>

        <div className="col-span-3 col-start-1 row-start-4">
          <Separator />
        </div>

        <div className="col-start-2 row-start-5">
          <span className="pl-2 text-xs text-muted-foreground">
            by
            <Button variant="link" size="sm" className="p-0 pl-1" asChild>
              <Link href={"https://tweakcn.com/"}>tweakcn</Link>
            </Button>
          </span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
