import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCssVariableValue(
  cssString: string,
  variableName: string
): string {
  if (!cssString || !variableName) return "";

  const regex = new RegExp(`${variableName}:\\s*(.*?);`);
  const match = cssString.match(regex);

  return match ? match[1].trim() : "";
}
