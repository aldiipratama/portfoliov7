import { cn } from "@/lib/utils"

export const DiagonalPattern = ({orientation = "vertical", className}: {orientation?: "vertical" | "horizontal", className?: string}) => {
  return (
    <div className={cn("diagonal-pattern",
        orientation === "vertical" ? "w-5 h-full" : "h-5 w-full",
        className
    )} />
  )
}
