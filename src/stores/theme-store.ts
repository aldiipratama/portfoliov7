import { ThemeName, themes } from "@/themes";
import { create } from "zustand/react";
import { persist } from "zustand/middleware";

interface ThemeStore {
  mode: "light" | "dark" | "system";
  setMode: (mode: "light" | "dark" | "system") => void;
  setTheme: (theme: ThemeName) => void;
  themes: typeof themes;
  resolvedTheme: ThemeName;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: "system",
      setMode: (mode) => set({ mode }),
      setTheme: (theme) => {
        localStorage.setItem("theme", String(theme));
        document.documentElement.setAttribute(`data-theme`, String(theme));
        set({ resolvedTheme: theme });
      },
      themes,
      resolvedTheme: "default",
    }),
    { name: "theme-store" }
  )
);
