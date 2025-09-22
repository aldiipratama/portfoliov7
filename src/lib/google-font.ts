export const loadGoogleFont = (fontFamily: string) => {
  if (
    !fontFamily ||
    typeof document === "undefined" ||
    fontFamily.startsWith("ui-")
  )
    return;

  const formattedFontFamily = fontFamily.replace(/ /g, "+");
  const fontUrl = `https://fonts.googleapis.com/css2?family=${formattedFontFamily}:wght@400;500;600;700&display=swap`;

  let fontLinkTag = document.getElementById("theme-font") as HTMLLinkElement;
  if (!fontLinkTag) {
    fontLinkTag = document.createElement("link");
    fontLinkTag.id = "theme-font";
    fontLinkTag.rel = "stylesheet";
    document.head.appendChild(fontLinkTag);
  }
  if (fontLinkTag.getAttribute("href") !== fontUrl) {
    fontLinkTag.setAttribute("href", fontUrl);
  }
};

export const extractFontFamily = (fontCss: string): string | null => {
  if (!fontCss) return null;
  return fontCss.split(",")[0].replace(/['"]/g, "").trim();
};

export const parseFontSans = (cssString: string): string | null => {
  if (!cssString) return null;
  const match = cssString.match(/--font-sans:\s*(.*?);/);
  return match ? match[1] : null;
};
