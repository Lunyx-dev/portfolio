import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["var(--font-clash)", "system-ui", "sans-serif"],
        cabinet: ["var(--font-cabinet)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0a0a0f",
        ink2: "#1a1a24",
        ink3: "#2a2a38",
        off: "#f5f3ee",
        off2: "#eceae3",
        off3: "#e0ddd4",
        lime: "#c8f060",
        lime2: "#a8d040",
        muted: "#7a7870",
        muted2: "#9a9890",
      },
    },
  },
  plugins: [],
};

export default config;
