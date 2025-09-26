"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useStickToBottom } from "use-stick-to-bottom";
import { cva, VariantProps } from "class-variance-authority";
import { ArrowDownIcon } from "lucide-react";

interface ScrollAreaContextType {
  isAtBottom: boolean;
  isNearBottom: boolean;
  scrollToBottom: () => void;
}

const ScrollAreaContext = React.createContext<ScrollAreaContextType | null>(
  null
);

export const useScrollArea = () => {
  const context = React.useContext(ScrollAreaContext);
  if (!context) {
    throw new Error(
      "useScrollArea must be used within a <ScrollArea mode='stick-to-bottom'>"
    );
  }
  return context;
};

interface ScrollAreaProps
  extends React.ComponentProps<typeof ScrollAreaPrimitive.Root> {
  mode?: "default" | "stick-to-bottom";
}

function ScrollArea({
  className,
  children,
  mode = "default",
  ...props
}: ScrollAreaProps) {
  if (mode === "stick-to-bottom") {
    return (
      <ScrollAreaBottomStick className={className} {...props}>
        {children}
      </ScrollAreaBottomStick>
    );
  }

  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

function ScrollAreaBottomStick({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  const {
    scrollRef: libScrollRef,
    contentRef: libContentRef,
    isAtBottom,
    isNearBottom,
    scrollToBottom,
  } = useStickToBottom();

  const localContainerRef = React.useRef<HTMLDivElement | null>(null);

  const mergedScrollRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      localContainerRef.current = node;

      if (!libScrollRef) return;
      if (typeof libScrollRef === "function") libScrollRef(node);
      else
        (libScrollRef as React.RefObject<HTMLDivElement | null>).current = node;
    },
    [libScrollRef]
  );

  const mergedContentRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      if (!libContentRef) return;
      if (typeof libContentRef === "function") libContentRef(node);
      else
        (libContentRef as React.RefObject<HTMLDivElement | null>).current =
          node;
    },
    [libContentRef]
  );

  const values = React.useMemo(() => {
    return {
      isNearBottom,
      isAtBottom,
      scrollToBottom,
    };
  }, [isAtBottom, scrollToBottom, isNearBottom]);

  return (
    <ScrollAreaContext.Provider value={values}>
      <ScrollAreaPrimitive.Root
        className={cn("relative h-full overflow-auto", className)}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport
          ref={mergedScrollRef}
          className="h-full w-full"
        >
          <div ref={mergedContentRef} className="min-h-full">
            {children}
          </div>
        </ScrollAreaPrimitive.Viewport>

        <ScrollBar />
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    </ScrollAreaContext.Provider>
  );
}

const scrollButtonVariants = cva(
  "absolute left-[50%] translate-x-[-50%] rounded-full",
  {
    variants: {
      direction: {
        default: "bottom-4",
        bottom: "bottom-4",
      },
    },
    defaultVariants: {
      direction: "default",
    },
  }
);

function ScrollButton({
  className,
  direction = "default",
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof scrollButtonVariants>) {
  const { isAtBottom, scrollToBottom } = useScrollArea();

  const handleScroll = React.useCallback(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  return (
    !isAtBottom && (
      <Button
        className={cn(scrollButtonVariants({ direction, className }))}
        onClick={handleScroll}
        size="icon"
        type="button"
        variant="outline"
        {...props}
      >
        <ArrowDownIcon className="size-4" />
      </Button>
    )
  );
}

export { ScrollArea, ScrollBar, ScrollButton };
