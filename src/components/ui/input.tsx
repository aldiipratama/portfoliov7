"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  className?: string;
}

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  initial: {
    y: 0,
    color: "inherit",
  },
  animate: {
    y: "-135%",
    color: "var(--color-zinc-500)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export const Input = ({
  label,
  className = "",
  value,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const showLabel = isFocused || value.length > 0;

  return (
    <div className={cn("relative", className)}>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none text-zinc-900 dark:text-zinc-50"
        variants={containerVariants}
        initial="initial"
        animate={showLabel ? "animate" : "initial"}
      >
        {label.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block text-sm"
            variants={letterVariants}
            style={{ willChange: "transform" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      <input
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
        className="outline-none px-4 border-2 rounded-full border-zinc-900 dark:border-zinc-50 py-1 w-full text-base font-medium text-zinc-900 dark:text-zinc-50 bg-transparent placeholder-transparent"
      />
    </div>
  );
};
