"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export const PercentageLoader = ({
  onComplete,
}: {
  onComplete: () => void;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(interval);
          return 99;
        }
        const increment = prev < 80 ? Math.random() * 10 : Math.random() * 2;
        const newProgress = Math.min(prev + increment, 99);
        return newProgress;
      });
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 99) {
      setProgress(100);
      onComplete();
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-1/3 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
        <motion.div
          className="h-2 bg-blue-500 rounded-full"
          style={{ width: `${progress}%` }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2, ease: "linear" }}
        />
      </div>
      <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
        Loading... {Math.floor(progress)}%
      </p>
    </motion.div>
  );
};
