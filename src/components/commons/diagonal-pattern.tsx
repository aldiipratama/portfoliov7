import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const diagonalPatternVariants = cva(
  "bg-[repeating-linear-gradient(45deg,var(--border)_0,var(--border)_1px,transparent_0,transparent_50%)] bg-fixed bg-[size:10px_10px]",
  {
    variants: {
      orientation: {
        vertical: "w-5 h-full",
        horizontal: "h-5 w-full",
      },
      border: {
        left: "border-l",
        right: "border-r",
        top: "border-t",
        bottom: "border-b",
        y: "border-y",
        x: "border-x",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

export const DiagonalPattern = ({
  orientation = "vertical",
  border,
  className,
}: {
  orientation?: "vertical" | "horizontal";
  border?: "left" | "right" | "top" | "bottom" | "y" | "x";
  className?: string;
}) => {
  return (
    <div
      className={cn(
        diagonalPatternVariants({ orientation, border }),
        className
      )}
    />
  );
};
DiagonalPattern.displayName = "DiagonalPattern";
