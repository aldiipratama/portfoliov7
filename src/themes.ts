interface Theme {
  [key: string]: {
    name: string;
    cssVariable: {
      light: string;
      dark: string;
    };
  };
}

export const themes: Theme = {
  default: {
    name: "Default",
    cssVariable: {
      light: `
        --background: oklch(1 0 0);
        --foreground: oklch(0.1450 0 0);
        --card: oklch(1 0 0);
        --card-foreground: oklch(0.1450 0 0);
        --popover: oklch(1 0 0);
        --popover-foreground: oklch(0.1450 0 0);
        --primary: oklch(0.2050 0 0);
        --primary-foreground: oklch(0.9850 0 0);
        --secondary: oklch(0.9700 0 0);
        --secondary-foreground: oklch(0.2050 0 0);
        --muted: oklch(0.9700 0 0);
        --muted-foreground: oklch(0.5560 0 0);
        --accent: oklch(0.9700 0 0);
        --accent-foreground: oklch(0.2050 0 0);
        --destructive: oklch(0.5770 0.2450 27.3250);
        --destructive-foreground: oklch(1 0 0);
        --border: oklch(0.9220 0 0);
        --input: oklch(0.9220 0 0);
        --ring: oklch(0.7080 0 0);
        --chart-1: oklch(0.8100 0.1000 252);
        --chart-2: oklch(0.6200 0.1900 260);
        --chart-3: oklch(0.5500 0.2200 263);
        --chart-4: oklch(0.4900 0.2200 264);
        --chart-5: oklch(0.4200 0.1800 266);
        --sidebar: oklch(0.9850 0 0);
        --sidebar-foreground: oklch(0.1450 0 0);
        --sidebar-primary: oklch(0.2050 0 0);
        --sidebar-primary-foreground: oklch(0.9850 0 0);
        --sidebar-accent: oklch(0.9700 0 0);
        --sidebar-accent-foreground: oklch(0.2050 0 0);
        --sidebar-border: oklch(0.9220 0 0);
        --sidebar-ring: oklch(0.7080 0 0);
        --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        --radius: 0.625rem;
        --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
        --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
        --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
        --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
        --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
        --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
        --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
        --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
        --tracking-normal: 0em;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0.1450 0 0);
        --foreground: oklch(0.9850 0 0);
        --card: oklch(0.2050 0 0);
        --card-foreground: oklch(0.9850 0 0);
        --popover: oklch(0.2690 0 0);
        --popover-foreground: oklch(0.9850 0 0);
        --primary: oklch(0.9220 0 0);
        --primary-foreground: oklch(0.2050 0 0);
        --secondary: oklch(0.2690 0 0);
        --secondary-foreground: oklch(0.9850 0 0);
        --muted: oklch(0.2690 0 0);
        --muted-foreground: oklch(0.7080 0 0);
        --accent: oklch(0.3710 0 0);
        --accent-foreground: oklch(0.9850 0 0);
        --destructive: oklch(0.7040 0.1910 22.2160);
        --destructive-foreground: oklch(0.9850 0 0);
        --border: oklch(0.2750 0 0);
        --input: oklch(0.3250 0 0);
        --ring: oklch(0.5560 0 0);
        --chart-1: oklch(0.8100 0.1000 252);
        --chart-2: oklch(0.6200 0.1900 260);
        --chart-3: oklch(0.5500 0.2200 263);
        --chart-4: oklch(0.4900 0.2200 264);
        --chart-5: oklch(0.4200 0.1800 266);
        --sidebar: oklch(0.2050 0 0);
        --sidebar-foreground: oklch(0.9850 0 0);
        --sidebar-primary: oklch(0.4880 0.2430 264.3760);
        --sidebar-primary-foreground: oklch(0.9850 0 0);
        --sidebar-accent: oklch(0.2690 0 0);
        --sidebar-accent-foreground: oklch(0.9850 0 0);
        --sidebar-border: oklch(0.2750 0 0);
        --sidebar-ring: oklch(0.4390 0 0);
        --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        --radius: 0.625rem;
        --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
        --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
        --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
        --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
        --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
        --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
        --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
        --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
      `,
    },
  },
  bubblegum: {
    name: "Bubblegum",
    cssVariable: {
      light: `
        --background: oklch(0.9399 0.0203 345.6985);
        --foreground: oklch(0.4712 0 0);
        --card: oklch(0.9498 0.0500 86.8891);
        --card-foreground: oklch(0.4712 0 0);
        --popover: oklch(1.0000 0 0);
        --popover-foreground: oklch(0.4712 0 0);
        --primary: oklch(0.6209 0.1801 348.1385);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.8095 0.0694 198.1863);
        --secondary-foreground: oklch(0.3211 0 0);
        --muted: oklch(0.8800 0.0504 212.0952);
        --muted-foreground: oklch(0.5795 0 0);
        --accent: oklch(0.9195 0.0801 87.6670);
        --accent-foreground: oklch(0.3211 0 0);
        --destructive: oklch(0.7091 0.1697 21.9551);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.6209 0.1801 348.1385);
        --input: oklch(0.9189 0 0);
        --ring: oklch(0.7002 0.1597 350.7532);
        --chart-1: oklch(0.7002 0.1597 350.7532);
        --chart-2: oklch(0.8189 0.0799 212.0892);
        --chart-3: oklch(0.9195 0.0801 87.6670);
        --chart-4: oklch(0.7998 0.1110 348.1791);
        --chart-5: oklch(0.6197 0.1899 353.9091);
        --sidebar: oklch(0.9140 0.0424 343.0913);
        --sidebar-foreground: oklch(0.3211 0 0);
        --sidebar-primary: oklch(0.6559 0.2118 354.3084);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.8228 0.1095 346.0184);
        --sidebar-accent-foreground: oklch(0.3211 0 0);
        --sidebar-border: oklch(0.9464 0.0327 307.1745);
        --sidebar-ring: oklch(0.6559 0.2118 354.3084);
        --font-sans: Poppins, sans-serif;
        --font-serif: Lora, serif;
        --font-mono: Fira Code, monospace;
        --radius: 0.4rem;
        --shadow-2xs: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 0.50);
        --shadow-xs: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 0.50);
        --shadow-sm: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 1.00), 3px 1px 2px -1px hsl(325.7800 58.1800% 56.8600% / 1.00);
        --shadow: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 1.00), 3px 1px 2px -1px hsl(325.7800 58.1800% 56.8600% / 1.00);
        --shadow-md: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 1.00), 3px 2px 4px -1px hsl(325.7800 58.1800% 56.8600% / 1.00);
        --shadow-lg: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 1.00), 3px 4px 6px -1px hsl(325.7800 58.1800% 56.8600% / 1.00);
        --shadow-xl: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 1.00), 3px 8px 10px -1px hsl(325.7800 58.1800% 56.8600% / 1.00);
        --shadow-2xl: 3px 3px 0px 0px hsl(325.7800 58.1800% 56.8600% / 2.50);
        --tracking-normal: 0em;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0.2497 0.0305 234.1628);
        --foreground: oklch(0.9306 0.0197 349.0785);
        --card: oklch(0.2902 0.0299 233.5352);
        --card-foreground: oklch(0.9306 0.0197 349.0785);
        --popover: oklch(0.2902 0.0299 233.5352);
        --popover-foreground: oklch(0.9306 0.0197 349.0785);
        --primary: oklch(0.9195 0.0801 87.6670);
        --primary-foreground: oklch(0.2497 0.0305 234.1628);
        --secondary: oklch(0.7794 0.0803 4.1330);
        --secondary-foreground: oklch(0.2497 0.0305 234.1628);
        --muted: oklch(0.2713 0.0086 255.5780);
        --muted-foreground: oklch(0.7794 0.0803 4.1330);
        --accent: oklch(0.6699 0.0988 356.9762);
        --accent-foreground: oklch(0.9306 0.0197 349.0785);
        --destructive: oklch(0.6702 0.1806 350.3599);
        --destructive-foreground: oklch(0.2497 0.0305 234.1628);
        --border: oklch(0.3907 0.0399 242.2181);
        --input: oklch(0.3093 0.0305 232.0027);
        --ring: oklch(0.6998 0.0896 201.8672);
        --chart-1: oklch(0.6998 0.0896 201.8672);
        --chart-2: oklch(0.7794 0.0803 4.1330);
        --chart-3: oklch(0.6699 0.0988 356.9762);
        --chart-4: oklch(0.4408 0.0702 217.0848);
        --chart-5: oklch(0.2713 0.0086 255.5780);
        --sidebar: oklch(0.2303 0.0270 235.9743);
        --sidebar-foreground: oklch(0.9670 0.0029 264.5419);
        --sidebar-primary: oklch(0.6559 0.2118 354.3084);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.8228 0.1095 346.0184);
        --sidebar-accent-foreground: oklch(0.2781 0.0296 256.8480);
        --sidebar-border: oklch(0.3729 0.0306 259.7328);
        --sidebar-ring: oklch(0.6559 0.2118 354.3084);
        --font-sans: Poppins, sans-serif;
        --font-serif: Lora, serif;
        --font-mono: Fira Code, monospace;
        --radius: 0.4rem;
        --shadow-2xs: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 0.50);
        --shadow-xs: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 0.50);
        --shadow-sm: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 1.00), 3px 1px 2px -1px hsl(206.1538 28.0576% 27.2549% / 1.00);
        --shadow: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 1.00), 3px 1px 2px -1px hsl(206.1538 28.0576% 27.2549% / 1.00);
        --shadow-md: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 1.00), 3px 2px 4px -1px hsl(206.1538 28.0576% 27.2549% / 1.00);
        --shadow-lg: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 1.00), 3px 4px 6px -1px hsl(206.1538 28.0576% 27.2549% / 1.00);
        --shadow-xl: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 1.00), 3px 8px 10px -1px hsl(206.1538 28.0576% 27.2549% / 1.00);
        --shadow-2xl: 3px 3px 0px 0px hsl(206.1538 28.0576% 27.2549% / 2.50);
      `,
    },
  },
  claude: {
    name: "Claude",
    cssVariable: {
      light: `
        --background: oklch(0.9818 0.0054 95.0986);
        --foreground: oklch(0.3438 0.0269 95.7226);
        --card: oklch(0.9818 0.0054 95.0986);
        --card-foreground: oklch(0.1908 0.0020 106.5859);
        --popover: oklch(1.0000 0 0);
        --popover-foreground: oklch(0.2671 0.0196 98.9390);
        --primary: oklch(0.6171 0.1375 39.0427);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.9245 0.0138 92.9892);
        --secondary-foreground: oklch(0.4334 0.0177 98.6048);
        --muted: oklch(0.9341 0.0153 90.2390);
        --muted-foreground: oklch(0.6059 0.0075 97.4233);
        --accent: oklch(0.9245 0.0138 92.9892);
        --accent-foreground: oklch(0.2671 0.0196 98.9390);
        --destructive: oklch(0.1908 0.0020 106.5859);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.8847 0.0069 97.3627);
        --input: oklch(0.7621 0.0156 98.3528);
        --ring: oklch(0.6171 0.1375 39.0427);
        --chart-1: oklch(0.5583 0.1276 42.9956);
        --chart-2: oklch(0.6898 0.1581 290.4107);
        --chart-3: oklch(0.8816 0.0276 93.1280);
        --chart-4: oklch(0.8822 0.0403 298.1792);
        --chart-5: oklch(0.5608 0.1348 42.0584);
        --sidebar: oklch(0.9663 0.0080 98.8792);
        --sidebar-foreground: oklch(0.3590 0.0051 106.6524);
        --sidebar-primary: oklch(0.6171 0.1375 39.0427);
        --sidebar-primary-foreground: oklch(0.9881 0 0);
        --sidebar-accent: oklch(0.9245 0.0138 92.9892);
        --sidebar-accent-foreground: oklch(0.3250 0 0);
        --sidebar-border: oklch(0.9401 0 0);
        --sidebar-ring: oklch(0.7731 0 0);
        --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        --radius: 0.5rem;
        --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
        --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
        --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
        --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
        --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
        --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
        --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
        --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
        --tracking-normal: 0em;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0.2679 0.0036 106.6427);
        --foreground: oklch(0.8074 0.0142 93.0137);
        --card: oklch(0.2679 0.0036 106.6427);
        --card-foreground: oklch(0.9818 0.0054 95.0986);
        --popover: oklch(0.3085 0.0035 106.6039);
        --popover-foreground: oklch(0.9211 0.0040 106.4781);
        --primary: oklch(0.6724 0.1308 38.7559);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.9818 0.0054 95.0986);
        --secondary-foreground: oklch(0.3085 0.0035 106.6039);
        --muted: oklch(0.2213 0.0038 106.7070);
        --muted-foreground: oklch(0.7713 0.0169 99.0657);
        --accent: oklch(0.2130 0.0078 95.4245);
        --accent-foreground: oklch(0.9663 0.0080 98.8792);
        --destructive: oklch(0.6368 0.2078 25.3313);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.3618 0.0101 106.8928);
        --input: oklch(0.4336 0.0113 100.2195);
        --ring: oklch(0.6724 0.1308 38.7559);
        --chart-1: oklch(0.5583 0.1276 42.9956);
        --chart-2: oklch(0.6898 0.1581 290.4107);
        --chart-3: oklch(0.2130 0.0078 95.4245);
        --chart-4: oklch(0.3074 0.0516 289.3230);
        --chart-5: oklch(0.5608 0.1348 42.0584);
        --sidebar: oklch(0.2357 0.0024 67.7077);
        --sidebar-foreground: oklch(0.8074 0.0142 93.0137);
        --sidebar-primary: oklch(0.3250 0 0);
        --sidebar-primary-foreground: oklch(0.9881 0 0);
        --sidebar-accent: oklch(0.1680 0.0020 106.6177);
        --sidebar-accent-foreground: oklch(0.8074 0.0142 93.0137);
        --sidebar-border: oklch(0.9401 0 0);
        --sidebar-ring: oklch(0.7731 0 0);
        --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        --radius: 0.5rem;
        --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
        --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
        --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
        --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
        --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
        --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
        --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
        --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
      `,
    },
  },
  cyberpunk: {
    name: "Cyberpunk",
    cssVariable: {
      light: `
        --background: oklch(0.9816 0.0017 247.8390);
        --foreground: oklch(0.1649 0.0352 281.8285);
        --card: oklch(1.0000 0 0);
        --card-foreground: oklch(0.1649 0.0352 281.8285);
        --popover: oklch(1.0000 0 0);
        --popover-foreground: oklch(0.1649 0.0352 281.8285);
        --primary: oklch(0.6726 0.2904 341.4084);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.9595 0.0200 286.0164);
        --secondary-foreground: oklch(0.1649 0.0352 281.8285);
        --muted: oklch(0.9595 0.0200 286.0164);
        --muted-foreground: oklch(0.1649 0.0352 281.8285);
        --accent: oklch(0.8903 0.1739 171.2690);
        --accent-foreground: oklch(0.1649 0.0352 281.8285);
        --destructive: oklch(0.6535 0.2348 34.0370);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.9205 0.0086 225.0878);
        --input: oklch(0.9205 0.0086 225.0878);
        --ring: oklch(0.6726 0.2904 341.4084);
        --chart-1: oklch(0.6726 0.2904 341.4084);
        --chart-2: oklch(0.5488 0.2944 299.0954);
        --chart-3: oklch(0.8442 0.1457 209.2851);
        --chart-4: oklch(0.8903 0.1739 171.2690);
        --chart-5: oklch(0.9168 0.1915 101.4070);
        --sidebar: oklch(0.9595 0.0200 286.0164);
        --sidebar-foreground: oklch(0.1649 0.0352 281.8285);
        --sidebar-primary: oklch(0.6726 0.2904 341.4084);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.8903 0.1739 171.2690);
        --sidebar-accent-foreground: oklch(0.1649 0.0352 281.8285);
        --sidebar-border: oklch(0.9205 0.0086 225.0878);
        --sidebar-ring: oklch(0.6726 0.2904 341.4084);
        --font-sans: Outfit, sans-serif;
        --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        --font-mono: Fira Code, monospace;
        --radius: 0.5rem;
        --shadow-2xs: 0px 4px 8px -2px hsl(0 0% 0% / 0.05);
        --shadow-xs: 0px 4px 8px -2px hsl(0 0% 0% / 0.05);
        --shadow-sm: 0px 4px 8px -2px hsl(0 0% 0% / 0.10), 0px 1px 2px -3px hsl(0 0% 0% / 0.10);
        --shadow: 0px 4px 8px -2px hsl(0 0% 0% / 0.10), 0px 1px 2px -3px hsl(0 0% 0% / 0.10);
        --shadow-md: 0px 4px 8px -2px hsl(0 0% 0% / 0.10), 0px 2px 4px -3px hsl(0 0% 0% / 0.10);
        --shadow-lg: 0px 4px 8px -2px hsl(0 0% 0% / 0.10), 0px 4px 6px -3px hsl(0 0% 0% / 0.10);
        --shadow-xl: 0px 4px 8px -2px hsl(0 0% 0% / 0.10), 0px 8px 10px -3px hsl(0 0% 0% / 0.10);
        --shadow-2xl: 0px 4px 8px -2px hsl(0 0% 0% / 0.25);
        --tracking-normal: 0em;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0.1649 0.0352 281.8285);
        --foreground: oklch(0.9513 0.0074 260.7315);
        --card: oklch(0.2542 0.0611 281.1423);
        --card-foreground: oklch(0.9513 0.0074 260.7315);
        --popover: oklch(0.2542 0.0611 281.1423);
        --popover-foreground: oklch(0.9513 0.0074 260.7315);
        --primary: oklch(0.6726 0.2904 341.4084);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.2542 0.0611 281.1423);
        --secondary-foreground: oklch(0.9513 0.0074 260.7315);
        --muted: oklch(0.2542 0.0611 281.1423);
        --muted-foreground: oklch(0.6245 0.0500 278.1046);
        --accent: oklch(0.8903 0.1739 171.2690);
        --accent-foreground: oklch(0.1649 0.0352 281.8285);
        --destructive: oklch(0.6535 0.2348 34.0370);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.3279 0.0832 280.7890);
        --input: oklch(0.3279 0.0832 280.7890);
        --ring: oklch(0.6726 0.2904 341.4084);
        --chart-1: oklch(0.6726 0.2904 341.4084);
        --chart-2: oklch(0.5488 0.2944 299.0954);
        --chart-3: oklch(0.8442 0.1457 209.2851);
        --chart-4: oklch(0.8903 0.1739 171.2690);
        --chart-5: oklch(0.9168 0.1915 101.4070);
        --sidebar: oklch(0.1649 0.0352 281.8285);
        --sidebar-foreground: oklch(0.9513 0.0074 260.7315);
        --sidebar-primary: oklch(0.6726 0.2904 341.4084);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.8903 0.1739 171.2690);
        --sidebar-accent-foreground: oklch(0.1649 0.0352 281.8285);
        --sidebar-border: oklch(0.3279 0.0832 280.7890);
        --sidebar-ring: oklch(0.6726 0.2904 341.4084);
        --font-sans: Outfit, sans-serif;
        --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        --font-mono: Fira Code, monospace;
        --radius: 0.5rem;
        --shadow-2xs: 0px 4px 8px -2px hsl(0 0% 0% / 0.05);
        --shadow-xs: 0px 4px 8px -2px hsl(0 0% 0% / 0.05);
        --shadow-sm: 0px 4px 8px -2px hsl(0 0% 0% / 0.10), 0px 1px 2px -3px hsl(0 0% 0% / 0.10);
        --shadow: 0px 4px 8px -2px hsl(0 0% 0% / 0.10), 0px 1px 2px -3px hsl(0 0% 0% / 0.10);
        --shadow-md: 0px 4px 8px -2px hsl(0 0% 0% / 0.10), 0px 2px 4px -3px hsl(0 0% 0% / 0.10);
        --shadow-lg: 0px 4px 8px -2px hsl(0 0% 0% / 0.10), 0px 4px 6px -3px hsl(0 0% 0% / 0.10);
        --shadow-xl: 0px 4px 8px -2px hsl(0 0% 0% / 0.10), 0px 8px 10px -3px hsl(0 0% 0% / 0.10);
        --shadow-2xl: 0px 4px 8px -2px hsl(0 0% 0% / 0.25);
      `,
    },
  },
  doom: {
    name: "Doom",
    cssVariable: {
      light: `
        --background: oklch(0.8452 0 0);
        --foreground: oklch(0.2393 0 0);
        --card: oklch(0.7572 0 0);
        --card-foreground: oklch(0.2393 0 0);
        --popover: oklch(0.7572 0 0);
        --popover-foreground: oklch(0.2393 0 0);
        --primary: oklch(0.5016 0.1887 27.4816);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.4955 0.0896 126.1858);
        --secondary-foreground: oklch(1.0000 0 0);
        --muted: oklch(0.7826 0 0);
        --muted-foreground: oklch(0.4091 0 0);
        --accent: oklch(0.5880 0.0993 245.7394);
        --accent-foreground: oklch(1.0000 0 0);
        --destructive: oklch(0.7076 0.1975 46.4558);
        --destructive-foreground: oklch(0 0 0);
        --border: oklch(0.4313 0 0);
        --input: oklch(0.4313 0 0);
        --ring: oklch(0.5016 0.1887 27.4816);
        --chart-1: oklch(0.5016 0.1887 27.4816);
        --chart-2: oklch(0.4955 0.0896 126.1858);
        --chart-3: oklch(0.5880 0.0993 245.7394);
        --chart-4: oklch(0.7076 0.1975 46.4558);
        --chart-5: oklch(0.5656 0.0431 40.4319);
        --sidebar: oklch(0.7572 0 0);
        --sidebar-foreground: oklch(0.2393 0 0);
        --sidebar-primary: oklch(0.5016 0.1887 27.4816);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.5880 0.0993 245.7394);
        --sidebar-accent-foreground: oklch(1.0000 0 0);
        --sidebar-border: oklch(0.4313 0 0);
        --sidebar-ring: oklch(0.5016 0.1887 27.4816);
        --font-sans: "Oxanium", sans-serif;
        --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        --font-mono: "Source Code Pro", monospace;
        --radius: 0px;
        --shadow-2xs: 0px 2px 4px 0px hsl(0 0% 0% / 0.20);
        --shadow-xs: 0px 2px 4px 0px hsl(0 0% 0% / 0.20);
        --shadow-sm: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 1px 2px -1px hsl(0 0% 0% / 0.40);
        --shadow: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 1px 2px -1px hsl(0 0% 0% / 0.40);
        --shadow-md: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 2px 4px -1px hsl(0 0% 0% / 0.40);
        --shadow-lg: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 4px 6px -1px hsl(0 0% 0% / 0.40);
        --shadow-xl: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 8px 10px -1px hsl(0 0% 0% / 0.40);
        --shadow-2xl: 0px 2px 4px 0px hsl(0 0% 0% / 1.00);
        --tracking-normal: 0em;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0.2178 0 0);
        --foreground: oklch(0.9067 0 0);
        --card: oklch(0.2850 0 0);
        --card-foreground: oklch(0.9067 0 0);
        --popover: oklch(0.2850 0 0);
        --popover-foreground: oklch(0.9067 0 0);
        --primary: oklch(0.6083 0.2090 27.0276);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.6423 0.1467 133.0145);
        --secondary-foreground: oklch(0 0 0);
        --muted: oklch(0.2645 0 0);
        --muted-foreground: oklch(0.7058 0 0);
        --accent: oklch(0.7482 0.1235 244.7492);
        --accent-foreground: oklch(0 0 0);
        --destructive: oklch(0.7839 0.1719 68.0943);
        --destructive-foreground: oklch(0 0 0);
        --border: oklch(0.4091 0 0);
        --input: oklch(0.4091 0 0);
        --ring: oklch(0.6083 0.2090 27.0276);
        --chart-1: oklch(0.6083 0.2090 27.0276);
        --chart-2: oklch(0.6423 0.1467 133.0145);
        --chart-3: oklch(0.7482 0.1235 244.7492);
        --chart-4: oklch(0.7839 0.1719 68.0943);
        --chart-5: oklch(0.6471 0.0334 40.7963);
        --sidebar: oklch(0.1913 0 0);
        --sidebar-foreground: oklch(0.9067 0 0);
        --sidebar-primary: oklch(0.6083 0.2090 27.0276);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.7482 0.1235 244.7492);
        --sidebar-accent-foreground: oklch(0 0 0);
        --sidebar-border: oklch(0.4091 0 0);
        --sidebar-ring: oklch(0.6083 0.2090 27.0276);
        --font-sans: "Oxanium", sans-serif;
        --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        --font-mono: "Source Code Pro", monospace;
        --radius: 0px;
        --shadow-2xs: 0px 2px 5px 0px hsl(0 0% 0% / 0.30);
        --shadow-xs: 0px 2px 5px 0px hsl(0 0% 0% / 0.30);
        --shadow-sm: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 1px 2px -1px hsl(0 0% 0% / 0.60);
        --shadow: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 1px 2px -1px hsl(0 0% 0% / 0.60);
        --shadow-md: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 2px 4px -1px hsl(0 0% 0% / 0.60);
        --shadow-lg: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 4px 6px -1px hsl(0 0% 0% / 0.60);
        --shadow-xl: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 8px 10px -1px hsl(0 0% 0% / 0.60);
        --shadow-2xl: 0px 2px 5px 0px hsl(0 0% 0% / 1.50);
      `,
    },
  },
  onepiece: {
    name: "One Piece",
    cssVariable: {
      light: `
        --background: oklch(0.9364 0.0273 93.1105); /* Kertas perkamen. */
        --foreground: oklch(0.25 0.04 40); /* Tinta Coklat Tua, lebih hangat dari hitam. */
        --card: oklch(0.98 0.01 90); /* Kartu/Popover lebih putih dari background. */
        --card-foreground: oklch(0.25 0.04 40);
        --popover: oklch(0.98 0.01 90);
        --popover-foreground: oklch(0.25 0.04 40);
        --primary: oklch(0.5591 0.2248 23.9700); /* Merah Rompi Luffy. */
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.5464 0.1313 242.6835); /* Biru Lautan/Jinbei. */
        --secondary-foreground: oklch(1.0000 0 0);
        --muted: oklch(0.9 0.03 90);
        --muted-foreground: oklch(0.45 0.04 80);
        --accent: oklch(0.8868 0.1822 95.3305); /* Emas Harta Karun/Topi Jerami. */
        --accent-foreground: oklch(0.2931 0 0);
        --destructive: oklch(0.60 0.25 15); /* Merah darah/impact yang lebih intens. */
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.8236 0.0406 86.0523);
        --input: oklch(0.9792 0.0151 90.2329);
        --ring: oklch(0.5591 0.2248 23.9700);
        --chart-1: oklch(0.55 0.15 150); /* Hijau alga Zoro. */
        --chart-2: oklch(0.8 0.1 50); /* Oranye rambut Nami. */
        --chart-3: oklch(0.7 0.08 280); /* Ungu Robin. */
        --chart-4: oklch(0.85 0.15 210); /* Biru muda Franky. */
        --chart-5: oklch(0.6 0.05 30); /* Coklat Chopper. */
        --font-sans: 'Lato', sans-serif;
        --font-display: 'Luckiest Guy', cursive;
        --font-serif: 'Merriweather', serif;
        --font-mono: 'Fira Code', monospace;
        --radius: 0.5rem;
        --shadow: 0 2px 4px 0px hsl(0 0% 0% / 0.10);
        --shadow-sm: 0 1px 2px 0px hsl(0 0% 0% / 0.05);
        --shadow-md: 0 4px 6px -1px hsl(0 0% 0% / 0.1), 0 2px 4px -1px hsl(0 0% 0% / 0.06);
        --shadow-lg: 0 10px 15px -3px hsl(0 0% 0% / 0.1), 0 4px 6px -2px hsl(0 0% 0% / 0.05);
      `,
      dark: `
        --background: oklch(0.18 0.03 260);
        --foreground: oklch(0.93 0.01 255);
        --card: oklch(0.22 0.03 260);
        --card-foreground: oklch(0.93 0.01 255);
        --popover: oklch(0.22 0.03 260);
        --popover-foreground: oklch(0.93 0.01 255);
        --primary: oklch(0.6137 0.2039 25.5645);
        --primary-foreground: oklch(0.1 0 0);
        --secondary: oklch(0.5946 0.1398 250.2957);
        --secondary-foreground: oklch(1 0 0);
        --muted: oklch(0.25 0.03 260);
        --muted-foreground: oklch(0.7 0.02 255);
        --accent: oklch(0.8437 0.1458 93.3066);
        --accent-foreground: oklch(0.2 0.02 260);
        --destructive: oklch(0.65 0.25 18);
        --destructive-foreground: oklch(0.98 0.01 20);
        --border: oklch(0.3 0.03 260);
        --input: oklch(0.3 0.03 260);
        --ring: oklch(0.6137 0.2039 25.5645);
        --chart-1: oklch(0.55 0.15 150);
        --chart-2: oklch(0.8 0.1 50);
        --chart-3: oklch(0.7 0.08 280);
        --chart-4: oklch(0.85 0.15 210);
        --chart-5: oklch(0.6 0.05 30);
        --font-sans: 'Lato', sans-serif;
        --font-display: 'Luckiest Guy', cursive;
        --font-serif: 'Merriweather', serif;
        --font-mono: 'Fira Code', monospace;
        --radius: 0.5rem;
        --shadow: 0 2px 8px 0px hsl(0 0% 0% / 0.50);
        --shadow-sm: 0 1px 2px 0px hsl(0 0% 0% / 0.25);
        --shadow-md: 0 4px 6px -1px hsl(0 0% 0% / 0.5), 0 2px 4px -1px hsl(0 0% 0% / 0.3);
        --shadow-lg: 0 10px 15px -3px hsl(0 0% 0% / 0.5), 0 4px 6px -2px hsl(0 0% 0% / 0.25);
      `,
    },
  },
  naruto: {
    name: "Naruto",
    cssVariable: {
      light: `
        --background: oklch(0.95 0.02 85);
        --foreground: oklch(0.20 0.01 20);
        --card: oklch(1 0 0);
        --card-foreground: oklch(0.20 0.01 20);
        --popover: oklch(1 0 0);
        --popover-foreground: oklch(0.20 0.01 20);
        --primary: oklch(0.65 0.21 40); /* Oranye Jumpsuit Naruto. */
        --primary-foreground: oklch(0.1 0 0);
        --secondary: oklch(0.55 0.15 240); /* Biru Chakra Rasengan. */
        --secondary-foreground: oklch(1 0 0);
        --muted: oklch(0.85 0.04 120); /* Hijau Rompi Jounin.  */
        --muted-foreground: oklch(0.4 0.02 110);
        --accent: oklch(0.6 0.25 15); /* Merah Sharingan. */
        --accent-foreground: oklch(1 0 0);
        --destructive: oklch(0.6 0.25 15);
        --destructive-foreground: oklch(1 0 0);
        --border: oklch(0.85 0.03 115);
        --input: oklch(0.97 0.01 90);
        --ring: oklch(0.65 0.21 40);
        --chart-1: oklch(0.65 0.21 40); /* Oranye Naruto */
        --chart-2: oklch(0.55 0.15 240); /* Biru Sasuke */
        --chart-3: oklch(0.8 0.1 350); /* Pink Sakura */
        --chart-4: oklch(0.8 0.01 100); /* Abu-abu Rambut Kakashi */
        --chart-5: oklch(0.85 0.04 120); /* Hijau Guy/Lee */
        --font-sans: 'Bebas Neue', sans-serif;
        --font-display: 'Train One', cursive;
        --font-mono: 'Source Code Pro', monospace;
        --radius: 0.375rem; /* Sudut lebih tajam, fungsional. */
        --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10);
        --shadow-sm: 0 1px 2px 0px hsl(0 0% 0% / 0.05);
        --shadow-md: 0 4px 6px -1px hsl(0 0% 0% / 0.1), 0 2px 4px -1px hsl(0 0% 0% / 0.06);
        --shadow-lg: 0 10px 15px -3px hsl(0 0% 0% / 0.1), 0 4px 6px -2px hsl(0 0% 0% / 0.05);
      `,
      dark: `
        --background: oklch(0.15 0.02 260);
        --foreground: oklch(0.90 0.01 250);
        --card: oklch(0.20 0.02 260);
        --card-foreground: oklch(0.90 0.01 250);
        --popover: oklch(0.20 0.02 260);
        --popover-foreground: oklch(0.90 0.01 250);
        --primary: oklch(0.70 0.20 40);
        --primary-foreground: oklch(0.1 0 0);
        --secondary: oklch(0.60 0.14 240);
        --secondary-foreground: oklch(1 0 0);
        --muted: oklch(0.25 0.02 260);
        --muted-foreground: oklch(0.6 0.01 250);
        --accent: oklch(0.65 0.24 15);
        --accent-foreground: oklch(1 0 0);
        --destructive: oklch(0.65 0.24 15);
        --destructive-foreground: oklch(1 0 0);
        --border: oklch(0.3 0.02 260);
        --input: oklch(0.25 0.02 260);
        --ring: oklch(0.70 0.20 40);
        --chart-1: oklch(0.70 0.20 40);
        --chart-2: oklch(0.60 0.14 240);
        --chart-3: oklch(0.8 0.1 350);
        --chart-4: oklch(0.8 0.01 100);
        --chart-5: oklch(0.85 0.04 120);
        --font-sans: 'Bebas Neue', sans-serif;
        --font-display: 'Train One', cursive;
        --font-mono: 'Source Code Pro', monospace;
        --radius: 0.375rem;
        --shadow: 0 2px 8px 0px hsl(0 0% 0% / 0.50);
        --shadow-sm: 0 1px 2px 0px hsl(0 0% 0% / 0.25);
        --shadow-md: 0 4px 6px -1px hsl(0 0% 0% / 0.5), 0 2px 4px -1px hsl(0 0% 0% / 0.3);
        --shadow-lg: 0 10px 15px -3px hsl(0 0% 0% / 0.5), 0 4px 6px -2px hsl(0 0% 0% / 0.25);
      `,
    },
  },
  pikachu: {
    name: "Pikachu",
    cssVariable: {
      light: `
        --background: oklch(0.98 0.05 95);
        --foreground: oklch(0.35 0.08 40); /* Coklat Gelap, bukan hitam pekat. */
        --card: oklch(1 0 0);
        --card-foreground: oklch(0.35 0.08 40);
        --popover: oklch(1 0 0);
        --popover-foreground: oklch(0.35 0.08 40);
        --primary: oklch(0.9 0.18 90); /* Kuning khas Pikachu. */
        --primary-foreground: oklch(0.35 0.08 40);
        --secondary: oklch(0.75 0.15 230); /* Biru serangan Thunderbolt.  */
        --secondary-foreground: oklch(1 0 0);
        --muted: oklch(0.95 0.03 95);
        --muted-foreground: oklch(0.6 0.05 80);
        --accent: oklch(0.7 0.25 15); /* Merah Pipi. */
        --accent-foreground: oklch(1 0 0);
        --destructive: oklch(0.7 0.25 15);
        --destructive-foreground: oklch(1 0 0);
        --border: oklch(0.9 0.08 90);
        --input: oklch(0.99 0.02 95);
        --ring: oklch(0.75 0.15 230);
        --chart-1: oklch(0.9 0.18 90); /* Kuning Pikachu */
        --chart-2: oklch(0.7 0.15 40); /* Oranye Charmander */
        --chart-3: oklch(0.75 0.1 160); /* Teal Bulbasaur */
        --chart-4: oklch(0.8 0.1 210); /* Biru muda Squirtle */
        --chart-5: oklch(0.85 0.05 340); /* Pink Jigglypuff */
        --font-sans: 'Nunito', sans-serif;
        --font-display: 'Fredoka One', cursive;
        --font-mono: 'Fira Code', monospace;
        --radius: 1rem; /* Sudut sangat bulat. */
        --shadow: 0 4px 6px -1px hsl(40 50% 50% / 0.1), 0 2px 4px -2px hsl(40 50% 50% / 0.1);
        --shadow-sm: 0 1px 2px 0px hsl(40 50% 50% / 0.05);
        --shadow-md: 0 4px 6px -1px hsl(40 50% 50% / 0.15), 0 2px 4px -1px hsl(40 50% 50% / 0.08);
        --shadow-lg: 0 10px 15px -3px hsl(40 50% 50% / 0.15), 0 4px 6px -2px hsl(40 50% 50% / 0.08);
      `,
      dark: `
        --background: oklch(0.2 0.03 260);
        --foreground: oklch(0.95 0.05 95);
        --card: oklch(0.25 0.03 260);
        --card-foreground: oklch(0.95 0.05 95);
        --popover: oklch(0.25 0.03 260);
        --popover-foreground: oklch(0.95 0.05 95);
        --primary: oklch(0.9 0.18 90);
        --primary-foreground: oklch(0.35 0.08 40);
        --secondary: oklch(0.8 0.14 230);
        --secondary-foreground: oklch(0.2 0.03 260);
        --muted: oklch(0.3 0.03 260);
        --muted-foreground: oklch(0.7 0.02 250);
        --accent: oklch(0.75 0.24 15);
        --accent-foreground: oklch(1 0 0);
        --destructive: oklch(0.75 0.24 15);
        --destructive-foreground: oklch(1 0 0);
        --border: oklch(0.35 0.03 260);
        --input: oklch(0.3 0.03 260);
        --ring: oklch(0.8 0.14 230);
        --chart-1: oklch(0.9 0.18 90);
        --chart-2: oklch(0.7 0.15 40);
        --chart-3: oklch(0.75 0.1 160);
        --chart-4: oklch(0.8 0.1 210);
        --chart-5: oklch(0.85 0.05 340);
        --font-sans: 'Nunito', sans-serif;
        --font-display: 'Fredoka One', cursive;
        --font-mono: 'Fira Code', monospace;
        --radius: 1rem;
        --shadow: 0 4px 10px 0px hsl(90 100% 50% / 0.2);
        --shadow-sm: 0 1px 2px 0px hsl(90 100% 50% / 0.1);
        --shadow-md: 0 4px 6px -1px hsl(90 100% 50% / 0.2), 0 2px 4px -1px hsl(90 100% 50% / 0.15);
        --shadow-lg: 0 10px 15px -3px hsl(90 100% 50% / 0.2), 0 4px 6px -2px hsl(90 100% 50% / 0.15);
      `,
    },
  },
  kodamagrove: {
    name: "Koda Magrove",
    cssVariable: {
      light: `
        --background: oklch(0.8798 0.0534 91.7893);
        --foreground: oklch(0.4265 0.0310 59.2153);
        --card: oklch(0.8937 0.0395 87.5676);
        --card-foreground: oklch(0.4265 0.0310 59.2153);
        --popover: oklch(0.9378 0.0331 89.8515);
        --popover-foreground: oklch(0.4265 0.0310 59.2153);
        --primary: oklch(0.6657 0.1050 118.9078);
        --primary-foreground: oklch(0.9882 0.0069 88.6415);
        --secondary: oklch(0.8532 0.0631 91.1493);
        --secondary-foreground: oklch(0.4265 0.0310 59.2153);
        --muted: oklch(0.8532 0.0631 91.1493);
        --muted-foreground: oklch(0.5761 0.0259 60.9323);
        --accent: oklch(0.8361 0.0713 90.3269);
        --accent-foreground: oklch(0.4265 0.0310 59.2153);
        --destructive: oklch(0.7136 0.0981 29.9827);
        --destructive-foreground: oklch(0.9790 0.0082 91.4818);
        --border: oklch(0.6918 0.0440 59.8448);
        --input: oklch(0.8361 0.0713 90.3269);
        --ring: oklch(0.7350 0.0564 130.8494);
        --chart-1: oklch(0.7350 0.0564 130.8494);
        --chart-2: oklch(0.6762 0.0567 132.4479);
        --chart-3: oklch(0.8185 0.0332 136.6539);
        --chart-4: oklch(0.5929 0.0464 137.6224);
        --chart-5: oklch(0.5183 0.0390 137.1892);
        --sidebar: oklch(0.8631 0.0645 90.5161);
        --sidebar-foreground: oklch(0.4265 0.0310 59.2153);
        --sidebar-primary: oklch(0.7350 0.0564 130.8494);
        --sidebar-primary-foreground: oklch(0.9882 0.0069 88.6415);
        --sidebar-accent: oklch(0.9225 0.0169 88.0027);
        --sidebar-accent-foreground: oklch(0.4265 0.0310 59.2153);
        --sidebar-border: oklch(0.9073 0.0170 88.0044);
        --sidebar-ring: oklch(0.7350 0.0564 130.8494);
        --font-sans: Merriweather, serif;
        --font-serif: Source Serif 4, serif;
        --font-mono: JetBrains Mono, monospace;
        --radius: 0.425rem;
        --shadow-2xs: 3px 3px 2px 0px hsl(88 22% 35% / 0.07);
        --shadow-xs: 3px 3px 2px 0px hsl(88 22% 35% / 0.07);
        --shadow-sm: 3px 3px 2px 0px hsl(88 22% 35% / 0.15), 3px 1px 2px -1px hsl(88 22% 35% / 0.15);
        --shadow: 3px 3px 2px 0px hsl(88 22% 35% / 0.15), 3px 1px 2px -1px hsl(88 22% 35% / 0.15);
        --shadow-md: 3px 3px 2px 0px hsl(88 22% 35% / 0.15), 3px 2px 4px -1px hsl(88 22% 35% / 0.15);
        --shadow-lg: 3px 3px 2px 0px hsl(88 22% 35% / 0.15), 3px 4px 6px -1px hsl(88 22% 35% / 0.15);
        --shadow-xl: 3px 3px 2px 0px hsl(88 22% 35% / 0.15), 3px 8px 10px -1px hsl(88 22% 35% / 0.15);
        --shadow-2xl: 3px 3px 2px 0px hsl(88 22% 35% / 0.38);
        --tracking-normal: 0em;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0.3303 0.0214 88.0737);
        --foreground: oklch(0.9217 0.0235 82.1191);
        --card: oklch(0.3583 0.0165 82.3257);
        --card-foreground: oklch(0.9217 0.0235 82.1191);
        --popover: oklch(0.3583 0.0165 82.3257);
        --popover-foreground: oklch(0.9217 0.0235 82.1191);
        --primary: oklch(0.6762 0.0567 132.4479);
        --primary-foreground: oklch(0.2686 0.0105 61.0213);
        --secondary: oklch(0.4448 0.0239 84.5498);
        --secondary-foreground: oklch(0.9217 0.0235 82.1191);
        --muted: oklch(0.3892 0.0197 82.7084);
        --muted-foreground: oklch(0.7096 0.0171 73.6179);
        --accent: oklch(0.6540 0.0723 90.7629);
        --accent-foreground: oklch(0.2686 0.0105 61.0213);
        --destructive: oklch(0.6287 0.0821 31.2958);
        --destructive-foreground: oklch(0.9357 0.0201 84.5907);
        --border: oklch(0.4448 0.0239 84.5498);
        --input: oklch(0.4448 0.0239 84.5498);
        --ring: oklch(0.6762 0.0567 132.4479);
        --chart-1: oklch(0.6762 0.0567 132.4479);
        --chart-2: oklch(0.7350 0.0564 130.8494);
        --chart-3: oklch(0.5929 0.0464 137.6224);
        --chart-4: oklch(0.6540 0.0723 90.7629);
        --chart-5: oklch(0.5183 0.0390 137.1892);
        --sidebar: oklch(0.3303 0.0214 88.0737);
        --sidebar-foreground: oklch(0.9217 0.0235 82.1191);
        --sidebar-primary: oklch(0.6762 0.0567 132.4479);
        --sidebar-primary-foreground: oklch(0.2686 0.0105 61.0213);
        --sidebar-accent: oklch(0.6540 0.0723 90.7629);
        --sidebar-accent-foreground: oklch(0.2686 0.0105 61.0213);
        --sidebar-border: oklch(0.4448 0.0239 84.5498);
        --sidebar-ring: oklch(0.6762 0.0567 132.4479);
        --font-sans: Merriweather, serif;
        --font-serif: Source Serif 4, serif;
        --font-mono: JetBrains Mono, monospace;
        --radius: 0.425rem;
        --shadow-2xs: 3px 3px 2px 0px hsl(88 22% 35% / 0.07);
        --shadow-xs: 3px 3px 2px 0px hsl(88 22% 35% / 0.07);
        --shadow-sm: 3px 3px 2px 0px hsl(88 22% 35% / 0.15), 3px 1px 2px -1px hsl(88 22% 35% / 0.15);
        --shadow: 3px 3px 2px 0px hsl(88 22% 35% / 0.15), 3px 1px 2px -1px hsl(88 22% 35% / 0.15);
        --shadow-md: 3px 3px 2px 0px hsl(88 22% 35% / 0.15), 3px 2px 4px -1px hsl(88 22% 35% / 0.15);
        --shadow-lg: 3px 3px 2px 0px hsl(88 22% 35% / 0.15), 3px 4px 6px -1px hsl(88 22% 35% / 0.15);
        --shadow-xl: 3px 3px 2px 0px hsl(88 22% 35% / 0.15), 3px 8px 10px -1px hsl(88 22% 35% / 0.15);
        --shadow-2xl: 3px 3px 2px 0px hsl(88 22% 35% / 0.38);
      `,
    },
  },
  mochamouse: {
    name: "Mocha Mouse",
    cssVariable: {
      light: `
        --background: oklch(0.9529 0.0146 102.4597);
        --foreground: oklch(0.4063 0.0255 40.3627);
        --card: oklch(0.9529 0.0146 102.4597);
        --card-foreground: oklch(0.4063 0.0255 40.3627);
        --popover: oklch(1.0000 0 0);
        --popover-foreground: oklch(0.4063 0.0255 40.3627);
        --primary: oklch(0.6083 0.0623 44.3588);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.7473 0.0387 80.5476);
        --secondary-foreground: oklch(1.0000 0 0);
        --muted: oklch(0.8502 0.0389 49.0874);
        --muted-foreground: oklch(0.5416 0.0512 37.2132);
        --accent: oklch(0.8502 0.0389 49.0874);
        --accent-foreground: oklch(0.4063 0.0255 40.3627);
        --destructive: oklch(0.2225 0.0098 52.9636);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.7473 0.0387 80.5476);
        --input: oklch(0.7473 0.0387 80.5476);
        --ring: oklch(0.6083 0.0623 44.3588);
        --chart-1: oklch(0.6083 0.0623 44.3588);
        --chart-2: oklch(0.5416 0.0512 37.2132);
        --chart-3: oklch(0.7272 0.0539 52.3320);
        --chart-4: oklch(0.7473 0.0387 80.5476);
        --chart-5: oklch(0.6440 0.0405 52.3917);
        --sidebar: oklch(0.8903 0.0278 49.5658);
        --sidebar-foreground: oklch(0.4063 0.0255 40.3627);
        --sidebar-primary: oklch(0.6083 0.0623 44.3588);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.7272 0.0539 52.3320);
        --sidebar-accent-foreground: oklch(1.0000 0 0);
        --sidebar-border: oklch(0.6440 0.0405 52.3917);
        --sidebar-ring: oklch(0.6083 0.0623 44.3588);
        --font-sans: DM Sans, sans-serif;
        --font-serif: Georgia, serif;
        --font-mono: Menlo, monospace;
        --radius: 0.5rem;
        --shadow-2xs: 2px 2px 0px 0px hsl(20 18% 51% / 0.06);
        --shadow-xs: 2px 2px 0px 0px hsl(20 18% 51% / 0.06);
        --shadow-sm: 2px 2px 0px 0px hsl(20 18% 51% / 0.11), 2px 1px 2px -1px hsl(20 18% 51% / 0.11);
        --shadow: 2px 2px 0px 0px hsl(20 18% 51% / 0.11), 2px 1px 2px -1px hsl(20 18% 51% / 0.11);
        --shadow-md: 2px 2px 0px 0px hsl(20 18% 51% / 0.11), 2px 2px 4px -1px hsl(20 18% 51% / 0.11);
        --shadow-lg: 2px 2px 0px 0px hsl(20 18% 51% / 0.11), 2px 4px 6px -1px hsl(20 18% 51% / 0.11);
        --shadow-xl: 2px 2px 0px 0px hsl(20 18% 51% / 0.11), 2px 8px 10px -1px hsl(20 18% 51% / 0.11);
        --shadow-2xl: 2px 2px 0px 0px hsl(20 18% 51% / 0.28);
        --tracking-normal: 0em;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0.2721 0.0141 48.1783);
        --foreground: oklch(0.9529 0.0146 102.4597);
        --card: oklch(0.3291 0.0156 50.8936);
        --card-foreground: oklch(0.9529 0.0146 102.4597);
        --popover: oklch(0.3291 0.0156 50.8936);
        --popover-foreground: oklch(0.9529 0.0146 102.4597);
        --primary: oklch(0.7272 0.0539 52.3320);
        --primary-foreground: oklch(0.2721 0.0141 48.1783);
        --secondary: oklch(0.5416 0.0512 37.2132);
        --secondary-foreground: oklch(0.9529 0.0146 102.4597);
        --muted: oklch(0.4063 0.0255 40.3627);
        --muted-foreground: oklch(0.7575 0.0380 50.8610);
        --accent: oklch(0.7473 0.0387 80.5476);
        --accent-foreground: oklch(0.2721 0.0141 48.1783);
        --destructive: oklch(0.6875 0.1420 21.4566);
        --destructive-foreground: oklch(0.2721 0.0141 48.1783);
        --border: oklch(0.4063 0.0255 40.3627);
        --input: oklch(0.4063 0.0255 40.3627);
        --ring: oklch(0.7272 0.0539 52.3320);
        --chart-1: oklch(0.7272 0.0539 52.3320);
        --chart-2: oklch(0.7473 0.0387 80.5476);
        --chart-3: oklch(0.6083 0.0623 44.3588);
        --chart-4: oklch(0.5416 0.0512 37.2132);
        --chart-5: oklch(0.6440 0.0405 52.3917);
        --sidebar: oklch(0.2225 0.0098 52.9636);
        --sidebar-foreground: oklch(0.9529 0.0146 102.4597);
        --sidebar-primary: oklch(0.7272 0.0539 52.3320);
        --sidebar-primary-foreground: oklch(0.2225 0.0098 52.9636);
        --sidebar-accent: oklch(0.7473 0.0387 80.5476);
        --sidebar-accent-foreground: oklch(0.2225 0.0098 52.9636);
        --sidebar-border: oklch(0.4063 0.0255 40.3627);
        --sidebar-ring: oklch(0.7272 0.0539 52.3320);
        --font-sans: DM Sans, sans-serif;
        --font-serif: Georgia, serif;
        --font-mono: Menlo, monospace;
        --radius: 0.5rem;
        --shadow-2xs: 2px 2px 0px 0px hsl(20 18% 30% / 0.06);
        --shadow-xs: 2px 2px 0px 0px hsl(20 18% 30% / 0.06);
        --shadow-sm: 2px 2px 0px 0px hsl(20 18% 30% / 0.11), 2px 1px 2px -1px hsl(20 18% 30% / 0.11);
        --shadow: 2px 2px 0px 0px hsl(20 18% 30% / 0.11), 2px 1px 2px -1px hsl(20 18% 30% / 0.11);
        --shadow-md: 2px 2px 0px 0px hsl(20 18% 30% / 0.11), 2px 2px 4px -1px hsl(20 18% 30% / 0.11);
        --shadow-lg: 2px 2px 0px 0px hsl(20 18% 30% / 0.11), 2px 4px 6px -1px hsl(20 18% 30% / 0.11);
        --shadow-xl: 2px 2px 0px 0px hsl(20 18% 30% / 0.11), 2px 8px 10px -1px hsl(20 18% 30% / 0.11);
        --shadow-2xl: 2px 2px 0px 0px hsl(20 18% 30% / 0.28);
      `,
    },
  },
  neobrutalism: {
    name: "Neo-Brutalism",
    cssVariable: {
      light: `
        --background: oklch(1.0000 0 0);
        --foreground: oklch(0 0 0);
        --card: oklch(1.0000 0 0);
        --card-foreground: oklch(0 0 0);
        --popover: oklch(1.0000 0 0);
        --popover-foreground: oklch(0 0 0);
        --primary: oklch(0.6489 0.2370 26.9728);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.9680 0.2110 109.7692);
        --secondary-foreground: oklch(0 0 0);
        --muted: oklch(0.9551 0 0);
        --muted-foreground: oklch(0.3211 0 0);
        --accent: oklch(0.5635 0.2408 260.8178);
        --accent-foreground: oklch(1.0000 0 0);
        --destructive: oklch(0 0 0);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0 0 0);
        --input: oklch(0 0 0);
        --ring: oklch(0.6489 0.2370 26.9728);
        --chart-1: oklch(0.6489 0.2370 26.9728);
        --chart-2: oklch(0.9680 0.2110 109.7692);
        --chart-3: oklch(0.5635 0.2408 260.8178);
        --chart-4: oklch(0.7323 0.2492 142.4953);
        --chart-5: oklch(0.5931 0.2726 328.3634);
        --sidebar: oklch(0.9551 0 0);
        --sidebar-foreground: oklch(0 0 0);
        --sidebar-primary: oklch(0.6489 0.2370 26.9728);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.5635 0.2408 260.8178);
        --sidebar-accent-foreground: oklch(1.0000 0 0);
        --sidebar-border: oklch(0 0 0);
        --sidebar-ring: oklch(0.6489 0.2370 26.9728);
        --font-sans: DM Sans, sans-serif;
        --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        --font-mono: Space Mono, monospace;
        --radius: 0px;
        --shadow-2xs: 4px 4px 0px 0px hsl(0 0% 0% / 0.50);
        --shadow-xs: 4px 4px 0px 0px hsl(0 0% 0% / 0.50);
        --shadow-sm: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 1px 2px -1px hsl(0 0% 0% / 1.00);
        --shadow: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 1px 2px -1px hsl(0 0% 0% / 1.00);
        --shadow-md: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 2px 4px -1px hsl(0 0% 0% / 1.00);
        --shadow-lg: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 4px 6px -1px hsl(0 0% 0% / 1.00);
        --shadow-xl: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 8px 10px -1px hsl(0 0% 0% / 1.00);
        --shadow-2xl: 4px 4px 0px 0px hsl(0 0% 0% / 2.50);
        --tracking-normal: 0em;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0 0 0);
        --foreground: oklch(1.0000 0 0);
        --card: oklch(0.3211 0 0);
        --card-foreground: oklch(1.0000 0 0);
        --popover: oklch(0.3211 0 0);
        --popover-foreground: oklch(1.0000 0 0);
        --primary: oklch(0.7044 0.1872 23.1858);
        --primary-foreground: oklch(0 0 0);
        --secondary: oklch(0.9691 0.2005 109.6228);
        --secondary-foreground: oklch(0 0 0);
        --muted: oklch(0.3211 0 0);
        --muted-foreground: oklch(0.8452 0 0);
        --accent: oklch(0.6755 0.1765 252.2592);
        --accent-foreground: oklch(0 0 0);
        --destructive: oklch(1.0000 0 0);
        --destructive-foreground: oklch(0 0 0);
        --border: oklch(1.0000 0 0);
        --input: oklch(1.0000 0 0);
        --ring: oklch(0.7044 0.1872 23.1858);
        --chart-1: oklch(0.7044 0.1872 23.1858);
        --chart-2: oklch(0.9691 0.2005 109.6228);
        --chart-3: oklch(0.6755 0.1765 252.2592);
        --chart-4: oklch(0.7395 0.2268 142.8504);
        --chart-5: oklch(0.6131 0.2458 328.0714);
        --sidebar: oklch(0 0 0);
        --sidebar-foreground: oklch(1.0000 0 0);
        --sidebar-primary: oklch(0.7044 0.1872 23.1858);
        --sidebar-primary-foreground: oklch(0 0 0);
        --sidebar-accent: oklch(0.6755 0.1765 252.2592);
        --sidebar-accent-foreground: oklch(0 0 0);
        --sidebar-border: oklch(1.0000 0 0);
        --sidebar-ring: oklch(0.7044 0.1872 23.1858);
        --font-sans: DM Sans, sans-serif;
        --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        --font-mono: Space Mono, monospace;
        --radius: 0px;
        --shadow-2xs: 4px 4px 0px 0px hsl(0 0% 0% / 0.50);
        --shadow-xs: 4px 4px 0px 0px hsl(0 0% 0% / 0.50);
        --shadow-sm: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 1px 2px -1px hsl(0 0% 0% / 1.00);
        --shadow: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 1px 2px -1px hsl(0 0% 0% / 1.00);
        --shadow-md: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 2px 4px -1px hsl(0 0% 0% / 1.00);
        --shadow-lg: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 4px 6px -1px hsl(0 0% 0% / 1.00);
        --shadow-xl: 4px 4px 0px 0px hsl(0 0% 0% / 1.00), 4px 8px 10px -1px hsl(0 0% 0% / 1.00);
        --shadow-2xl: 4px 4px 0px 0px hsl(0 0% 0% / 2.50);
      `,
    },
  },
  notebook: {
    name: "Notebook",
    cssVariable: {
      light: `
        --background: oklch(0.9821 0 0);
        --foreground: oklch(0.3485 0 0);
        --card: oklch(1.0000 0 0);
        --card-foreground: oklch(0.3485 0 0);
        --popover: oklch(1.0000 0 0);
        --popover-foreground: oklch(0.3485 0 0);
        --primary: oklch(0.4891 0 0);
        --primary-foreground: oklch(0.9551 0 0);
        --secondary: oklch(0.9006 0 0);
        --secondary-foreground: oklch(0.3485 0 0);
        --muted: oklch(0.9158 0 0);
        --muted-foreground: oklch(0.4313 0 0);
        --accent: oklch(0.9354 0.0456 94.8549);
        --accent-foreground: oklch(0.4015 0.0436 37.9587);
        --destructive: oklch(0.6627 0.0978 20.0041);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.5538 0.0025 17.2320);
        --input: oklch(1.0000 0 0);
        --ring: oklch(0.7058 0 0);
        --chart-1: oklch(0.3211 0 0);
        --chart-2: oklch(0.4495 0 0);
        --chart-3: oklch(0.5693 0 0);
        --chart-4: oklch(0.6830 0 0);
        --chart-5: oklch(0.7921 0 0);
        --sidebar: oklch(0.9551 0 0);
        --sidebar-foreground: oklch(0.3485 0 0);
        --sidebar-primary: oklch(0.4891 0 0);
        --sidebar-primary-foreground: oklch(0.9551 0 0);
        --sidebar-accent: oklch(0.9354 0.0456 94.8549);
        --sidebar-accent-foreground: oklch(0.4015 0.0436 37.9587);
        --sidebar-border: oklch(0.8078 0 0);
        --sidebar-ring: oklch(0.7058 0 0);
        --font-sans: Architects Daughter, sans-serif;
        --font-serif: "Times New Roman", Times, serif;
        --font-mono: "Courier New", Courier, monospace;
        --radius: 0.625rem;
        --shadow-2xs: 1px 4px 5px 0px hsl(0 0% 0% / 0.01);
        --shadow-xs: 1px 4px 5px 0px hsl(0 0% 0% / 0.01);
        --shadow-sm: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 1px 2px -1px hsl(0 0% 0% / 0.03);
        --shadow: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 1px 2px -1px hsl(0 0% 0% / 0.03);
        --shadow-md: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 2px 4px -1px hsl(0 0% 0% / 0.03);
        --shadow-lg: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 4px 6px -1px hsl(0 0% 0% / 0.03);
        --shadow-xl: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 8px 10px -1px hsl(0 0% 0% / 0.03);
        --shadow-2xl: 1px 4px 5px 0px hsl(0 0% 0% / 0.07);
        --tracking-normal: 0.5px;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0.2891 0 0);
        --foreground: oklch(0.8945 0 0);
        --card: oklch(0.3211 0 0);
        --card-foreground: oklch(0.8945 0 0);
        --popover: oklch(0.3211 0 0);
        --popover-foreground: oklch(0.8945 0 0);
        --primary: oklch(0.7572 0 0);
        --primary-foreground: oklch(0.2891 0 0);
        --secondary: oklch(0.4676 0 0);
        --secondary-foreground: oklch(0.8078 0 0);
        --muted: oklch(0.3904 0 0);
        --muted-foreground: oklch(0.7058 0 0);
        --accent: oklch(0.9067 0 0);
        --accent-foreground: oklch(0.3211 0 0);
        --destructive: oklch(0.7915 0.0491 18.2410);
        --destructive-foreground: oklch(0.2891 0 0);
        --border: oklch(0.4276 0 0);
        --input: oklch(0.3211 0 0);
        --ring: oklch(0.8078 0 0);
        --chart-1: oklch(0.9521 0 0);
        --chart-2: oklch(0.8576 0 0);
        --chart-3: oklch(0.7572 0 0);
        --chart-4: oklch(0.6534 0 0);
        --chart-5: oklch(0.5452 0 0);
        --sidebar: oklch(0.2478 0 0);
        --sidebar-foreground: oklch(0.8945 0 0);
        --sidebar-primary: oklch(0.7572 0 0);
        --sidebar-primary-foreground: oklch(0.2478 0 0);
        --sidebar-accent: oklch(0.9067 0 0);
        --sidebar-accent-foreground: oklch(0.3211 0 0);
        --sidebar-border: oklch(0.4276 0 0);
        --sidebar-ring: oklch(0.8078 0 0);
        --font-sans: Architects Daughter, sans-serif;
        --font-serif: Georgia, serif;
        --font-mono: "Fira Code", "Courier New", monospace;
        --radius: 0.625rem;
        --shadow-2xs: 1px 4px 5px 0px hsl(0 0% 0% / 0.01);
        --shadow-xs: 1px 4px 5px 0px hsl(0 0% 0% / 0.01);
        --shadow-sm: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 1px 2px -1px hsl(0 0% 0% / 0.03);
        --shadow: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 1px 2px -1px hsl(0 0% 0% / 0.03);
        --shadow-md: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 2px 4px -1px hsl(0 0% 0% / 0.03);
        --shadow-lg: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 4px 6px -1px hsl(0 0% 0% / 0.03);
        --shadow-xl: 1px 4px 5px 0px hsl(0 0% 0% / 0.03), 1px 8px 10px -1px hsl(0 0% 0% / 0.03);
        --shadow-2xl: 1px 4px 5px 0px hsl(0 0% 0% / 0.07);
      `,
    },
  },
  retroarcade: {
    name: "Retro Arcade",
    cssVariable: {
      light: `
        --background: oklch(0.9735 0.0261 90.0953);
        --foreground: oklch(0.3092 0.0518 219.6516);
        --card: oklch(0.9306 0.0260 92.4020);
        --card-foreground: oklch(0.3092 0.0518 219.6516);
        --popover: oklch(0.9306 0.0260 92.4020);
        --popover-foreground: oklch(0.3092 0.0518 219.6516);
        --primary: oklch(0.5924 0.2025 355.8943);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.6437 0.1019 187.3840);
        --secondary-foreground: oklch(1.0000 0 0);
        --muted: oklch(0.6979 0.0159 196.7940);
        --muted-foreground: oklch(0.3092 0.0518 219.6516);
        --accent: oklch(0.5808 0.1732 39.5003);
        --accent-foreground: oklch(1.0000 0 0);
        --destructive: oklch(0.5863 0.2064 27.1172);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.6537 0.0197 205.2618);
        --input: oklch(0.6537 0.0197 205.2618);
        --ring: oklch(0.5924 0.2025 355.8943);
        --chart-1: oklch(0.6149 0.1394 244.9273);
        --chart-2: oklch(0.6437 0.1019 187.3840);
        --chart-3: oklch(0.5924 0.2025 355.8943);
        --chart-4: oklch(0.5808 0.1732 39.5003);
        --chart-5: oklch(0.5863 0.2064 27.1172);
        --sidebar: oklch(0.9735 0.0261 90.0953);
        --sidebar-foreground: oklch(0.3092 0.0518 219.6516);
        --sidebar-primary: oklch(0.5924 0.2025 355.8943);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.6437 0.1019 187.3840);
        --sidebar-accent-foreground: oklch(1.0000 0 0);
        --sidebar-border: oklch(0.6537 0.0197 205.2618);
        --sidebar-ring: oklch(0.5924 0.2025 355.8943);
        --font-sans: Outfit, sans-serif;
        --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        --font-mono: Space Mono, monospace;
        --radius: 0.25rem;
        --shadow-2xs: 2px 2px 4px 0px hsl(196 83% 10% / 0.07);
        --shadow-xs: 2px 2px 4px 0px hsl(196 83% 10% / 0.07);
        --shadow-sm: 2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 1px 2px -1px hsl(196 83% 10% / 0.15);
        --shadow: 2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 1px 2px -1px hsl(196 83% 10% / 0.15);
        --shadow-md: 2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 2px 4px -1px hsl(196 83% 10% / 0.15);
        --shadow-lg: 2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 4px 6px -1px hsl(196 83% 10% / 0.15);
        --shadow-xl: 2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 8px 10px -1px hsl(196 83% 10% / 0.15);
        --shadow-2xl: 2px 2px 4px 0px hsl(196 83% 10% / 0.38);
        --tracking-normal: 0em;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0.2673 0.0486 219.8169);
        --foreground: oklch(0.6979 0.0159 196.7940);
        --card: oklch(0.3092 0.0518 219.6516);
        --card-foreground: oklch(0.6979 0.0159 196.7940);
        --popover: oklch(0.3092 0.0518 219.6516);
        --popover-foreground: oklch(0.6979 0.0159 196.7940);
        --primary: oklch(0.5924 0.2025 355.8943);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.6437 0.1019 187.3840);
        --secondary-foreground: oklch(1.0000 0 0);
        --muted: oklch(0.5230 0.0283 219.1365);
        --muted-foreground: oklch(0.6979 0.0159 196.7940);
        --accent: oklch(0.5808 0.1732 39.5003);
        --accent-foreground: oklch(1.0000 0 0);
        --destructive: oklch(0.5863 0.2064 27.1172);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.5230 0.0283 219.1365);
        --input: oklch(0.5230 0.0283 219.1365);
        --ring: oklch(0.5924 0.2025 355.8943);
        --chart-1: oklch(0.6149 0.1394 244.9273);
        --chart-2: oklch(0.6437 0.1019 187.3840);
        --chart-3: oklch(0.5924 0.2025 355.8943);
        --chart-4: oklch(0.5808 0.1732 39.5003);
        --chart-5: oklch(0.5863 0.2064 27.1172);
        --sidebar: oklch(0.2673 0.0486 219.8169);
        --sidebar-foreground: oklch(0.6979 0.0159 196.7940);
        --sidebar-primary: oklch(0.5924 0.2025 355.8943);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.6437 0.1019 187.3840);
        --sidebar-accent-foreground: oklch(1.0000 0 0);
        --sidebar-border: oklch(0.5230 0.0283 219.1365);
        --sidebar-ring: oklch(0.5924 0.2025 355.8943);
        --font-sans: Outfit, sans-serif;
        --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        --font-mono: Space Mono, monospace;
        --radius: 0.25rem;
        --shadow-2xs: 2px 2px 4px 0px hsl(196 83% 10% / 0.07);
        --shadow-xs: 2px 2px 4px 0px hsl(196 83% 10% / 0.07);
        --shadow-sm: 2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 1px 2px -1px hsl(196 83% 10% / 0.15);
        --shadow: 2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 1px 2px -1px hsl(196 83% 10% / 0.15);
        --shadow-md: 2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 2px 4px -1px hsl(196 83% 10% / 0.15);
        --shadow-lg: 2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 4px 6px -1px hsl(196 83% 10% / 0.15);
        --shadow-xl: 2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 8px 10px -1px hsl(196 83% 10% / 0.15);
        --shadow-2xl: 2px 2px 4px 0px hsl(196 83% 10% / 0.38);
      `,
    },
  },
  softpop: {
    name: "Soft Pop",
    cssVariable: {
      light: `
        --background: oklch(0.9789 0.0082 121.6272);
        --foreground: oklch(0 0 0);
        --card: oklch(1.0000 0 0);
        --card-foreground: oklch(0 0 0);
        --popover: oklch(1.0000 0 0);
        --popover-foreground: oklch(0 0 0);
        --primary: oklch(0.5106 0.2301 276.9656);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.7038 0.1230 182.5025);
        --secondary-foreground: oklch(1.0000 0 0);
        --muted: oklch(0.9551 0 0);
        --muted-foreground: oklch(0.3211 0 0);
        --accent: oklch(0.7686 0.1647 70.0804);
        --accent-foreground: oklch(0 0 0);
        --destructive: oklch(0.6368 0.2078 25.3313);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0 0 0);
        --input: oklch(0.5555 0 0);
        --ring: oklch(0.7853 0.1041 274.7134);
        --chart-1: oklch(0.5106 0.2301 276.9656);
        --chart-2: oklch(0.7038 0.1230 182.5025);
        --chart-3: oklch(0.7686 0.1647 70.0804);
        --chart-4: oklch(0.6559 0.2118 354.3084);
        --chart-5: oklch(0.7227 0.1920 149.5793);
        --sidebar: oklch(0.9789 0.0082 121.6272);
        --sidebar-foreground: oklch(0 0 0);
        --sidebar-primary: oklch(0.5106 0.2301 276.9656);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.7686 0.1647 70.0804);
        --sidebar-accent-foreground: oklch(0 0 0);
        --sidebar-border: oklch(0 0 0);
        --sidebar-ring: oklch(0.7853 0.1041 274.7134);
        --font-sans: DM Sans, sans-serif;
        --font-serif: DM Sans, sans-serif;
        --font-mono: Space Mono, monospace;
        --radius: 1rem;
        --shadow-2xs: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.03);
        --shadow-xs: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.03);
        --shadow-sm: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 1px 2px -1px hsl(0 0% 10.1961% / 0.05);
        --shadow: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 1px 2px -1px hsl(0 0% 10.1961% / 0.05);
        --shadow-md: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 2px 4px -1px hsl(0 0% 10.1961% / 0.05);
        --shadow-lg: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 4px 6px -1px hsl(0 0% 10.1961% / 0.05);
        --shadow-xl: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 8px 10px -1px hsl(0 0% 10.1961% / 0.05);
        --shadow-2xl: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.13);
        --tracking-normal: normal;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0 0 0);
        --foreground: oklch(1.0000 0 0);
        --card: oklch(0.2455 0.0217 257.2823);
        --card-foreground: oklch(1.0000 0 0);
        --popover: oklch(0.2455 0.0217 257.2823);
        --popover-foreground: oklch(1.0000 0 0);
        --primary: oklch(0.6801 0.1583 276.9349);
        --primary-foreground: oklch(0 0 0);
        --secondary: oklch(0.7845 0.1325 181.9120);
        --secondary-foreground: oklch(0 0 0);
        --muted: oklch(0.3211 0 0);
        --muted-foreground: oklch(0.8452 0 0);
        --accent: oklch(0.8790 0.1534 91.6054);
        --accent-foreground: oklch(0 0 0);
        --destructive: oklch(0.7106 0.1661 22.2162);
        --destructive-foreground: oklch(0 0 0);
        --border: oklch(0.4459 0 0);
        --input: oklch(1.0000 0 0);
        --ring: oklch(0.6801 0.1583 276.9349);
        --chart-1: oklch(0.6801 0.1583 276.9349);
        --chart-2: oklch(0.7845 0.1325 181.9120);
        --chart-3: oklch(0.8790 0.1534 91.6054);
        --chart-4: oklch(0.7253 0.1752 349.7607);
        --chart-5: oklch(0.8003 0.1821 151.7110);
        --sidebar: oklch(0 0 0);
        --sidebar-foreground: oklch(1.0000 0 0);
        --sidebar-primary: oklch(0.6801 0.1583 276.9349);
        --sidebar-primary-foreground: oklch(0 0 0);
        --sidebar-accent: oklch(0.8790 0.1534 91.6054);
        --sidebar-accent-foreground: oklch(0 0 0);
        --sidebar-border: oklch(1.0000 0 0);
        --sidebar-ring: oklch(0.6801 0.1583 276.9349);
        --font-sans: DM Sans, sans-serif;
        --font-serif: DM Sans, sans-serif;
        --font-mono: Space Mono, monospace;
        --radius: 1rem;
        --shadow-2xs: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.03);
        --shadow-xs: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.03);
        --shadow-sm: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 1px 2px -1px hsl(0 0% 10.1961% / 0.05);
        --shadow: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 1px 2px -1px hsl(0 0% 10.1961% / 0.05);
        --shadow-md: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 2px 4px -1px hsl(0 0% 10.1961% / 0.05);
        --shadow-lg: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 4px 6px -1px hsl(0 0% 10.1961% / 0.05);
        --shadow-xl: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.05), 0px 8px 10px -1px hsl(0 0% 10.1961% / 0.05);
        --shadow-2xl: 0px 0px 0px 0px hsl(0 0% 10.1961% / 0.13);
      `,
    },
  },
  solardusk: {
    name: "Solar Dusk",
    cssVariable: {
      light: `
        --background: oklch(0.9885 0.0057 84.5659);
        --foreground: oklch(0.3660 0.0251 49.6085);
        --card: oklch(0.9686 0.0091 78.2818);
        --card-foreground: oklch(0.3660 0.0251 49.6085);
        --popover: oklch(0.9686 0.0091 78.2818);
        --popover-foreground: oklch(0.3660 0.0251 49.6085);
        --primary: oklch(0.5553 0.1455 48.9975);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.8276 0.0752 74.4400);
        --secondary-foreground: oklch(0.4444 0.0096 73.6390);
        --muted: oklch(0.9363 0.0218 83.2637);
        --muted-foreground: oklch(0.5534 0.0116 58.0708);
        --accent: oklch(0.9000 0.0500 74.9889);
        --accent-foreground: oklch(0.4444 0.0096 73.6390);
        --destructive: oklch(0.4437 0.1613 26.8994);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.8866 0.0404 89.6994);
        --input: oklch(0.8866 0.0404 89.6994);
        --ring: oklch(0.5553 0.1455 48.9975);
        --chart-1: oklch(0.5553 0.1455 48.9975);
        --chart-2: oklch(0.5534 0.0116 58.0708);
        --chart-3: oklch(0.5538 0.1207 66.4416);
        --chart-4: oklch(0.5534 0.0116 58.0708);
        --chart-5: oklch(0.6806 0.1423 75.8340);
        --sidebar: oklch(0.9363 0.0218 83.2637);
        --sidebar-foreground: oklch(0.3660 0.0251 49.6085);
        --sidebar-primary: oklch(0.5553 0.1455 48.9975);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.5538 0.1207 66.4416);
        --sidebar-accent-foreground: oklch(1.0000 0 0);
        --sidebar-border: oklch(0.8866 0.0404 89.6994);
        --sidebar-ring: oklch(0.5553 0.1455 48.9975);
        --font-sans: Oxanium, sans-serif;
        --font-serif: Merriweather, serif;
        --font-mono: Fira Code, monospace;
        --radius: 0.3rem;
        --shadow-2xs: 0px 2px 3px 0px hsl(28 18% 25% / 0.09);
        --shadow-xs: 0px 2px 3px 0px hsl(28 18% 25% / 0.09);
        --shadow-sm: 0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 1px 2px -1px hsl(28 18% 25% / 0.18);
        --shadow: 0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 1px 2px -1px hsl(28 18% 25% / 0.18);
        --shadow-md: 0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 2px 4px -1px hsl(28 18% 25% / 0.18);
        --shadow-lg: 0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 4px 6px -1px hsl(28 18% 25% / 0.18);
        --shadow-xl: 0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 8px 10px -1px hsl(28 18% 25% / 0.18);
        --shadow-2xl: 0px 2px 3px 0px hsl(28 18% 25% / 0.45);
        --tracking-normal: 0em;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0.2161 0.0061 56.0434);
        --foreground: oklch(0.9699 0.0013 106.4238);
        --card: oklch(0.2685 0.0063 34.2976);
        --card-foreground: oklch(0.9699 0.0013 106.4238);
        --popover: oklch(0.2685 0.0063 34.2976);
        --popover-foreground: oklch(0.9699 0.0013 106.4238);
        --primary: oklch(0.7049 0.1867 47.6044);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.4444 0.0096 73.6390);
        --secondary-foreground: oklch(0.9232 0.0026 48.7171);
        --muted: oklch(0.2685 0.0063 34.2976);
        --muted-foreground: oklch(0.7161 0.0091 56.2590);
        --accent: oklch(0.3598 0.0497 229.3202);
        --accent-foreground: oklch(0.9232 0.0026 48.7171);
        --destructive: oklch(0.5771 0.2152 27.3250);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.3741 0.0087 67.5582);
        --input: oklch(0.3741 0.0087 67.5582);
        --ring: oklch(0.7049 0.1867 47.6044);
        --chart-1: oklch(0.7049 0.1867 47.6044);
        --chart-2: oklch(0.6847 0.1479 237.3225);
        --chart-3: oklch(0.7952 0.1617 86.0468);
        --chart-4: oklch(0.7161 0.0091 56.2590);
        --chart-5: oklch(0.5534 0.0116 58.0708);
        --sidebar: oklch(0.2685 0.0063 34.2976);
        --sidebar-foreground: oklch(0.9699 0.0013 106.4238);
        --sidebar-primary: oklch(0.7049 0.1867 47.6044);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.6847 0.1479 237.3225);
        --sidebar-accent-foreground: oklch(0.2839 0.0734 254.5378);
        --sidebar-border: oklch(0.3741 0.0087 67.5582);
        --sidebar-ring: oklch(0.7049 0.1867 47.6044);
        --font-sans: Oxanium, sans-serif;
        --font-serif: Merriweather, serif;
        --font-mono: Fira Code, monospace;
        --radius: 0.3rem;
        --shadow-2xs: 0px 2px 3px 0px hsl(0 0% 5% / 0.09);
        --shadow-xs: 0px 2px 3px 0px hsl(0 0% 5% / 0.09);
        --shadow-sm: 0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 1px 2px -1px hsl(0 0% 5% / 0.18);
        --shadow: 0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 1px 2px -1px hsl(0 0% 5% / 0.18);
        --shadow-md: 0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 2px 4px -1px hsl(0 0% 5% / 0.18);
        --shadow-lg: 0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 4px 6px -1px hsl(0 0% 5% / 0.18);
        --shadow-xl: 0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 8px 10px -1px hsl(0 0% 5% / 0.18);
        --shadow-2xl: 0px 2px 3px 0px hsl(0 0% 5% / 0.45);
      `,
    },
  },
  sunsethorizon: {
    name: "Sunset Horizon",
    cssVariable: {
      light: `
        --background: oklch(0.9856 0.0084 56.3169);
        --foreground: oklch(0.3353 0.0132 2.7676);
        --card: oklch(1.0000 0 0);
        --card-foreground: oklch(0.3353 0.0132 2.7676);
        --popover: oklch(1.0000 0 0);
        --popover-foreground: oklch(0.3353 0.0132 2.7676);
        --primary: oklch(0.7357 0.1641 34.7091);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.9596 0.0200 28.9029);
        --secondary-foreground: oklch(0.5587 0.1294 32.7364);
        --muted: oklch(0.9656 0.0176 39.4009);
        --muted-foreground: oklch(0.5534 0.0116 58.0708);
        --accent: oklch(0.8278 0.1131 57.9984);
        --accent-foreground: oklch(0.3353 0.0132 2.7676);
        --destructive: oklch(0.6122 0.2082 22.2410);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.9296 0.0370 38.6868);
        --input: oklch(0.9296 0.0370 38.6868);
        --ring: oklch(0.7357 0.1641 34.7091);
        --chart-1: oklch(0.7357 0.1641 34.7091);
        --chart-2: oklch(0.8278 0.1131 57.9984);
        --chart-3: oklch(0.8773 0.0763 54.9314);
        --chart-4: oklch(0.8200 0.1054 40.8859);
        --chart-5: oklch(0.6368 0.1306 32.0721);
        --sidebar: oklch(0.9656 0.0176 39.4009);
        --sidebar-foreground: oklch(0.3353 0.0132 2.7676);
        --sidebar-primary: oklch(0.7357 0.1641 34.7091);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.8278 0.1131 57.9984);
        --sidebar-accent-foreground: oklch(0.3353 0.0132 2.7676);
        --sidebar-border: oklch(0.9296 0.0370 38.6868);
        --sidebar-ring: oklch(0.7357 0.1641 34.7091);
        --font-sans: Montserrat, sans-serif;
        --font-serif: Merriweather, serif;
        --font-mono: Ubuntu Mono, monospace;
        --radius: 0.625rem;
        --shadow-2xs: 0px 6px 12px -3px hsl(0 0% 0% / 0.04);
        --shadow-xs: 0px 6px 12px -3px hsl(0 0% 0% / 0.04);
        --shadow-sm: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 1px 2px -4px hsl(0 0% 0% / 0.09);
        --shadow: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 1px 2px -4px hsl(0 0% 0% / 0.09);
        --shadow-md: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 2px 4px -4px hsl(0 0% 0% / 0.09);
        --shadow-lg: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 4px 6px -4px hsl(0 0% 0% / 0.09);
        --shadow-xl: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 8px 10px -4px hsl(0 0% 0% / 0.09);
        --shadow-2xl: 0px 6px 12px -3px hsl(0 0% 0% / 0.22);
        --tracking-normal: 0em;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0.2569 0.0169 352.4042);
        --foreground: oklch(0.9397 0.0119 51.3156);
        --card: oklch(0.3184 0.0176 341.4465);
        --card-foreground: oklch(0.9397 0.0119 51.3156);
        --popover: oklch(0.3184 0.0176 341.4465);
        --popover-foreground: oklch(0.9397 0.0119 51.3156);
        --primary: oklch(0.7357 0.1641 34.7091);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.3637 0.0203 342.2664);
        --secondary-foreground: oklch(0.9397 0.0119 51.3156);
        --muted: oklch(0.3184 0.0176 341.4465);
        --muted-foreground: oklch(0.8378 0.0237 52.6346);
        --accent: oklch(0.8278 0.1131 57.9984);
        --accent-foreground: oklch(0.2569 0.0169 352.4042);
        --destructive: oklch(0.6122 0.2082 22.2410);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.3637 0.0203 342.2664);
        --input: oklch(0.3637 0.0203 342.2664);
        --ring: oklch(0.7357 0.1641 34.7091);
        --chart-1: oklch(0.7357 0.1641 34.7091);
        --chart-2: oklch(0.8278 0.1131 57.9984);
        --chart-3: oklch(0.8773 0.0763 54.9314);
        --chart-4: oklch(0.8200 0.1054 40.8859);
        --chart-5: oklch(0.6368 0.1306 32.0721);
        --sidebar: oklch(0.2569 0.0169 352.4042);
        --sidebar-foreground: oklch(0.9397 0.0119 51.3156);
        --sidebar-primary: oklch(0.7357 0.1641 34.7091);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.8278 0.1131 57.9984);
        --sidebar-accent-foreground: oklch(0.2569 0.0169 352.4042);
        --sidebar-border: oklch(0.3637 0.0203 342.2664);
        --sidebar-ring: oklch(0.7357 0.1641 34.7091);
        --font-sans: Montserrat, sans-serif;
        --font-serif: Merriweather, serif;
        --font-mono: Ubuntu Mono, monospace;
        --radius: 0.625rem;
        --shadow-2xs: 0px 6px 12px -3px hsl(0 0% 0% / 0.04);
        --shadow-xs: 0px 6px 12px -3px hsl(0 0% 0% / 0.04);
        --shadow-sm: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 1px 2px -4px hsl(0 0% 0% / 0.09);
        --shadow: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 1px 2px -4px hsl(0 0% 0% / 0.09);
        --shadow-md: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 2px 4px -4px hsl(0 0% 0% / 0.09);
        --shadow-lg: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 4px 6px -4px hsl(0 0% 0% / 0.09);
        --shadow-xl: 0px 6px 12px -3px hsl(0 0% 0% / 0.09), 0px 8px 10px -4px hsl(0 0% 0% / 0.09);
        --shadow-2xl: 0px 6px 12px -3px hsl(0 0% 0% / 0.22);
      `,
    },
  },
  twitter: {
    name: "Twitter",
    cssVariable: {
      light: `
        --background: oklch(1.0000 0 0);
        --foreground: oklch(0.1884 0.0128 248.5103);
        --card: oklch(0.9784 0.0011 197.1387);
        --card-foreground: oklch(0.1884 0.0128 248.5103);
        --popover: oklch(1.0000 0 0);
        --popover-foreground: oklch(0.1884 0.0128 248.5103);
        --primary: oklch(0.6723 0.1606 244.9955);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.1884 0.0128 248.5103);
        --secondary-foreground: oklch(1.0000 0 0);
        --muted: oklch(0.9222 0.0013 286.3737);
        --muted-foreground: oklch(0.1884 0.0128 248.5103);
        --accent: oklch(0.9392 0.0166 250.8453);
        --accent-foreground: oklch(0.6723 0.1606 244.9955);
        --destructive: oklch(0.6188 0.2376 25.7658);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.9317 0.0118 231.6594);
        --input: oklch(0.9809 0.0025 228.7836);
        --ring: oklch(0.6818 0.1584 243.3540);
        --chart-1: oklch(0.6723 0.1606 244.9955);
        --chart-2: oklch(0.6907 0.1554 160.3454);
        --chart-3: oklch(0.8214 0.1600 82.5337);
        --chart-4: oklch(0.7064 0.1822 151.7125);
        --chart-5: oklch(0.5919 0.2186 10.5826);
        --sidebar: oklch(0.9784 0.0011 197.1387);
        --sidebar-foreground: oklch(0.1884 0.0128 248.5103);
        --sidebar-primary: oklch(0.6723 0.1606 244.9955);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.9392 0.0166 250.8453);
        --sidebar-accent-foreground: oklch(0.6723 0.1606 244.9955);
        --sidebar-border: oklch(0.9271 0.0101 238.5177);
        --sidebar-ring: oklch(0.6818 0.1584 243.3540);
        --font-sans: Open Sans, sans-serif;
        --font-serif: Georgia, serif;
        --font-mono: Menlo, monospace;
        --radius: 1.3rem;
        --shadow-2xs: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --shadow-xs: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --shadow-sm: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 1px 2px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --shadow: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 1px 2px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --shadow-md: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 2px 4px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --shadow-lg: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 4px 6px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --shadow-xl: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 8px 10px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --shadow-2xl: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --tracking-normal: 0em;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0 0 0);
        --foreground: oklch(0.9328 0.0025 228.7857);
        --card: oklch(0.2097 0.0080 274.5332);
        --card-foreground: oklch(0.8853 0 0);
        --popover: oklch(0 0 0);
        --popover-foreground: oklch(0.9328 0.0025 228.7857);
        --primary: oklch(0.6692 0.1607 245.0110);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.9622 0.0035 219.5331);
        --secondary-foreground: oklch(0.1884 0.0128 248.5103);
        --muted: oklch(0.2090 0 0);
        --muted-foreground: oklch(0.5637 0.0078 247.9662);
        --accent: oklch(0.1928 0.0331 242.5459);
        --accent-foreground: oklch(0.6692 0.1607 245.0110);
        --destructive: oklch(0.6188 0.2376 25.7658);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.2674 0.0047 248.0045);
        --input: oklch(0.3020 0.0288 244.8244);
        --ring: oklch(0.6818 0.1584 243.3540);
        --chart-1: oklch(0.6723 0.1606 244.9955);
        --chart-2: oklch(0.6907 0.1554 160.3454);
        --chart-3: oklch(0.8214 0.1600 82.5337);
        --chart-4: oklch(0.7064 0.1822 151.7125);
        --chart-5: oklch(0.5919 0.2186 10.5826);
        --sidebar: oklch(0.2097 0.0080 274.5332);
        --sidebar-foreground: oklch(0.8853 0 0);
        --sidebar-primary: oklch(0.6818 0.1584 243.3540);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.1928 0.0331 242.5459);
        --sidebar-accent-foreground: oklch(0.6692 0.1607 245.0110);
        --sidebar-border: oklch(0.3795 0.0220 240.5943);
        --sidebar-ring: oklch(0.6818 0.1584 243.3540);
        --font-sans: Open Sans, sans-serif;
        --font-serif: Georgia, serif;
        --font-mono: Menlo, monospace;
        --radius: 1.3rem;
        --shadow-2xs: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --shadow-xs: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --shadow-sm: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 1px 2px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --shadow: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 1px 2px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --shadow-md: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 2px 4px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --shadow-lg: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 4px 6px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --shadow-xl: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 8px 10px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
        --shadow-2xl: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
      `,
    },
  },
  vercel: {
    name: "Vercel",
    cssVariable: {
      light: `
        --background: oklch(0.9900 0 0);
        --foreground: oklch(0 0 0);
        --card: oklch(1 0 0);
        --card-foreground: oklch(0 0 0);
        --popover: oklch(0.9900 0 0);
        --popover-foreground: oklch(0 0 0);
        --primary: oklch(0 0 0);
        --primary-foreground: oklch(1 0 0);
        --secondary: oklch(0.9400 0 0);
        --secondary-foreground: oklch(0 0 0);
        --muted: oklch(0.9700 0 0);
        --muted-foreground: oklch(0.4400 0 0);
        --accent: oklch(0.9400 0 0);
        --accent-foreground: oklch(0 0 0);
        --destructive: oklch(0.6300 0.1900 23.0300);
        --destructive-foreground: oklch(1 0 0);
        --border: oklch(0.9200 0 0);
        --input: oklch(0.9400 0 0);
        --ring: oklch(0 0 0);
        --chart-1: oklch(0.8100 0.1700 75.3500);
        --chart-2: oklch(0.5500 0.2200 264.5300);
        --chart-3: oklch(0.7200 0 0);
        --chart-4: oklch(0.9200 0 0);
        --chart-5: oklch(0.5600 0 0);
        --sidebar: oklch(0.9900 0 0);
        --sidebar-foreground: oklch(0 0 0);
        --sidebar-primary: oklch(0 0 0);
        --sidebar-primary-foreground: oklch(1 0 0);
        --sidebar-accent: oklch(0.9400 0 0);
        --sidebar-accent-foreground: oklch(0 0 0);
        --sidebar-border: oklch(0.9400 0 0);
        --sidebar-ring: oklch(0 0 0);
        --font-sans: Geist, sans-serif;
        --font-serif: Georgia, serif;
        --font-mono: Geist Mono, monospace;
        --radius: 0.5rem;
        --shadow-2xs: 0px 1px 2px 0px hsl(0 0% 0% / 0.09);
        --shadow-xs: 0px 1px 2px 0px hsl(0 0% 0% / 0.09);
        --shadow-sm: 0px 1px 2px 0px hsl(0 0% 0% / 0.18), 0px 1px 2px -1px hsl(0 0% 0% / 0.18);
        --shadow: 0px 1px 2px 0px hsl(0 0% 0% / 0.18), 0px 1px 2px -1px hsl(0 0% 0% / 0.18);
        --shadow-md: 0px 1px 2px 0px hsl(0 0% 0% / 0.18), 0px 2px 4px -1px hsl(0 0% 0% / 0.18);
        --shadow-lg: 0px 1px 2px 0px hsl(0 0% 0% / 0.18), 0px 4px 6px -1px hsl(0 0% 0% / 0.18);
        --shadow-xl: 0px 1px 2px 0px hsl(0 0% 0% / 0.18), 0px 8px 10px -1px hsl(0 0% 0% / 0.18);
        --shadow-2xl: 0px 1px 2px 0px hsl(0 0% 0% / 0.45);
        --tracking-normal: 0em;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0 0 0);
        --foreground: oklch(1 0 0);
        --card: oklch(0.1400 0 0);
        --card-foreground: oklch(1 0 0);
        --popover: oklch(0.1800 0 0);
        --popover-foreground: oklch(1 0 0);
        --primary: oklch(1 0 0);
        --primary-foreground: oklch(0 0 0);
        --secondary: oklch(0.2500 0 0);
        --secondary-foreground: oklch(1 0 0);
        --muted: oklch(0.2300 0 0);
        --muted-foreground: oklch(0.7200 0 0);
        --accent: oklch(0.3200 0 0);
        --accent-foreground: oklch(1 0 0);
        --destructive: oklch(0.6900 0.2000 23.9100);
        --destructive-foreground: oklch(0 0 0);
        --border: oklch(0.2600 0 0);
        --input: oklch(0.3200 0 0);
        --ring: oklch(0.7200 0 0);
        --chart-1: oklch(0.8100 0.1700 75.3500);
        --chart-2: oklch(0.5800 0.2100 260.8400);
        --chart-3: oklch(0.5600 0 0);
        --chart-4: oklch(0.4400 0 0);
        --chart-5: oklch(0.9200 0 0);
        --sidebar: oklch(0.1800 0 0);
        --sidebar-foreground: oklch(1 0 0);
        --sidebar-primary: oklch(1 0 0);
        --sidebar-primary-foreground: oklch(0 0 0);
        --sidebar-accent: oklch(0.3200 0 0);
        --sidebar-accent-foreground: oklch(1 0 0);
        --sidebar-border: oklch(0.3200 0 0);
        --sidebar-ring: oklch(0.7200 0 0);
        --font-sans: Geist, sans-serif;
        --font-serif: Georgia, serif;
        --font-mono: Geist Mono, monospace;
        --radius: 0.5rem;
        --shadow-2xs: 0px 1px 2px 0px hsl(0 0% 0% / 0.09);
        --shadow-xs: 0px 1px 2px 0px hsl(0 0% 0% / 0.09);
        --shadow-sm: 0px 1px 2px 0px hsl(0 0% 0% / 0.18), 0px 1px 2px -1px hsl(0 0% 0% / 0.18);
        --shadow: 0px 1px 2px 0px hsl(0 0% 0% / 0.18), 0px 1px 2px -1px hsl(0 0% 0% / 0.18);
        --shadow-md: 0px 1px 2px 0px hsl(0 0% 0% / 0.18), 0px 2px 4px -1px hsl(0 0% 0% / 0.18);
        --shadow-lg: 0px 1px 2px 0px hsl(0 0% 0% / 0.18), 0px 4px 6px -1px hsl(0 0% 0% / 0.18);
        --shadow-xl: 0px 1px 2px 0px hsl(0 0% 0% / 0.18), 0px 8px 10px -1px hsl(0 0% 0% / 0.18);
        --shadow-2xl: 0px 1px 2px 0px hsl(0 0% 0% / 0.45);
      `,
    },
  },
  vintagepaper: {
    name: "Vintage Paper",
    cssVariable: {
      light: `
        --background: oklch(0.9582 0.0152 90.2357);
        --foreground: oklch(0.3760 0.0225 64.3434);
        --card: oklch(0.9914 0.0098 87.4695);
        --card-foreground: oklch(0.3760 0.0225 64.3434);
        --popover: oklch(0.9914 0.0098 87.4695);
        --popover-foreground: oklch(0.3760 0.0225 64.3434);
        --primary: oklch(0.6180 0.0778 65.5444);
        --primary-foreground: oklch(1.0000 0 0);
        --secondary: oklch(0.8846 0.0302 85.5655);
        --secondary-foreground: oklch(0.4313 0.0300 64.9288);
        --muted: oklch(0.9239 0.0190 83.0636);
        --muted-foreground: oklch(0.5391 0.0387 71.1655);
        --accent: oklch(0.8348 0.0426 88.8064);
        --accent-foreground: oklch(0.3760 0.0225 64.3434);
        --destructive: oklch(0.5471 0.1438 32.9149);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.8606 0.0321 84.5881);
        --input: oklch(0.8606 0.0321 84.5881);
        --ring: oklch(0.6180 0.0778 65.5444);
        --chart-1: oklch(0.6180 0.0778 65.5444);
        --chart-2: oklch(0.5604 0.0624 68.5805);
        --chart-3: oklch(0.4851 0.0570 72.6827);
        --chart-4: oklch(0.6777 0.0624 64.7755);
        --chart-5: oklch(0.7264 0.0581 66.6967);
        --sidebar: oklch(0.9239 0.0190 83.0636);
        --sidebar-foreground: oklch(0.3760 0.0225 64.3434);
        --sidebar-primary: oklch(0.6180 0.0778 65.5444);
        --sidebar-primary-foreground: oklch(1.0000 0 0);
        --sidebar-accent: oklch(0.8348 0.0426 88.8064);
        --sidebar-accent-foreground: oklch(0.3760 0.0225 64.3434);
        --sidebar-border: oklch(0.8606 0.0321 84.5881);
        --sidebar-ring: oklch(0.6180 0.0778 65.5444);
        --font-sans: Libre Baskerville, serif;
        --font-serif: Lora, serif;
        --font-mono: IBM Plex Mono, monospace;
        --radius: 0.25rem;
        --shadow-2xs: 2px 3px 5px 0px hsl(28 13% 20% / 0.06);
        --shadow-xs: 2px 3px 5px 0px hsl(28 13% 20% / 0.06);
        --shadow-sm: 2px 3px 5px 0px hsl(28 13% 20% / 0.12), 2px 1px 2px -1px hsl(28 13% 20% / 0.12);
        --shadow: 2px 3px 5px 0px hsl(28 13% 20% / 0.12), 2px 1px 2px -1px hsl(28 13% 20% / 0.12);
        --shadow-md: 2px 3px 5px 0px hsl(28 13% 20% / 0.12), 2px 2px 4px -1px hsl(28 13% 20% / 0.12);
        --shadow-lg: 2px 3px 5px 0px hsl(28 13% 20% / 0.12), 2px 4px 6px -1px hsl(28 13% 20% / 0.12);
        --shadow-xl: 2px 3px 5px 0px hsl(28 13% 20% / 0.12), 2px 8px 10px -1px hsl(28 13% 20% / 0.12);
        --shadow-2xl: 2px 3px 5px 0px hsl(28 13% 20% / 0.30);
        --tracking-normal: 0em;
        --spacing: 0.25rem;
      `,
      dark: `
        --background: oklch(0.2747 0.0139 57.6523);
        --foreground: oklch(0.9239 0.0190 83.0636);
        --card: oklch(0.3237 0.0155 59.0603);
        --card-foreground: oklch(0.9239 0.0190 83.0636);
        --popover: oklch(0.3237 0.0155 59.0603);
        --popover-foreground: oklch(0.9239 0.0190 83.0636);
        --primary: oklch(0.7264 0.0581 66.6967);
        --primary-foreground: oklch(0.2747 0.0139 57.6523);
        --secondary: oklch(0.3795 0.0181 57.1280);
        --secondary-foreground: oklch(0.9239 0.0190 83.0636);
        --muted: oklch(0.3237 0.0155 59.0603);
        --muted-foreground: oklch(0.7982 0.0243 82.1078);
        --accent: oklch(0.4186 0.0281 56.3404);
        --accent-foreground: oklch(0.9239 0.0190 83.0636);
        --destructive: oklch(0.5471 0.1438 32.9149);
        --destructive-foreground: oklch(1.0000 0 0);
        --border: oklch(0.3795 0.0181 57.1280);
        --input: oklch(0.3795 0.0181 57.1280);
        --ring: oklch(0.7264 0.0581 66.6967);
        --chart-1: oklch(0.7264 0.0581 66.6967);
        --chart-2: oklch(0.6777 0.0624 64.7755);
        --chart-3: oklch(0.6180 0.0778 65.5444);
        --chart-4: oklch(0.5604 0.0624 68.5805);
        --chart-5: oklch(0.4851 0.0570 72.6827);
        --sidebar: oklch(0.2747 0.0139 57.6523);
        --sidebar-foreground: oklch(0.9239 0.0190 83.0636);
        --sidebar-primary: oklch(0.7264 0.0581 66.6967);
        --sidebar-primary-foreground: oklch(0.2747 0.0139 57.6523);
        --sidebar-accent: oklch(0.4186 0.0281 56.3404);
        --sidebar-accent-foreground: oklch(0.9239 0.0190 83.0636);
        --sidebar-border: oklch(0.3795 0.0181 57.1280);
        --sidebar-ring: oklch(0.7264 0.0581 66.6967);
        --font-sans: Libre Baskerville, serif;
        --font-serif: Lora, serif;
        --font-mono: IBM Plex Mono, monospace;
        --radius: 0.25rem;
        --shadow-2xs: 2px 3px 5px 0px hsl(28 13% 20% / 0.06);
        --shadow-xs: 2px 3px 5px 0px hsl(28 13% 20% / 0.06);
        --shadow-sm: 2px 3px 5px 0px hsl(28 13% 20% / 0.12), 2px 1px 2px -1px hsl(28 13% 20% / 0.12);
        --shadow: 2px 3px 5px 0px hsl(28 13% 20% / 0.12), 2px 1px 2px -1px hsl(28 13% 20% / 0.12);
        --shadow-md: 2px 3px 5px 0px hsl(28 13% 20% / 0.12), 2px 2px 4px -1px hsl(28 13% 20% / 0.12);
        --shadow-lg: 2px 3px 5px 0px hsl(28 13% 20% / 0.12), 2px 4px 6px -1px hsl(28 13% 20% / 0.12);
        --shadow-xl: 2px 3px 5px 0px hsl(28 13% 20% / 0.12), 2px 8px 10px -1px hsl(28 13% 20% / 0.12);
        --shadow-2xl: 2px 3px 5px 0px hsl(28 13% 20% / 0.30);
      `,
    },
  },
};

export type ThemeName = keyof typeof themes;
