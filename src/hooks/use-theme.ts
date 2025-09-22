"use client";

import {
  extractFontFamily,
  loadGoogleFont,
  parseFontSans,
} from "@/lib/google-font";
import { useThemeStore } from "@/stores/theme-store";
import { ThemeName, themes } from "@/themes";
import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useMemo } from "react";

export const useTheme = () => {
  const { resolvedTheme: mode, setTheme: setMode } = useNextTheme();
  const { setTheme, resolvedTheme } = useThemeStore();

  const themeConfig = useMemo(() => themes[resolvedTheme], [resolvedTheme]);

  useEffect(() => {
    const storedTheme = (localStorage.getItem("theme") ||
      "default") as ThemeName;
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (!themeConfig) return;

    const fontCssValue = parseFontSans(themeConfig.cssVariable.light);
    if (fontCssValue) {
      const fontFamily = extractFontFamily(fontCssValue);
      loadGoogleFont(fontFamily!);
    }

    const cssString = `
      :root {
        ${themeConfig.cssVariable.light}
      }
      .dark {
        ${themeConfig.cssVariable.dark}
      }
    `;

    const styleElementId = "theme-style";
    let styleElement = document.getElementById(
      styleElementId
    ) as HTMLStyleElement | null;

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleElementId;
      document.head.appendChild(styleElement);
    }

    styleElement.innerHTML = cssString;
    localStorage.setItem("theme", resolvedTheme as string);
  }, [resolvedTheme]);

  return {
    mode,
    setMode,
    setTheme,
    themes,
    resolvedTheme,
  };
};
