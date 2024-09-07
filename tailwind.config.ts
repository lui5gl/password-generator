import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        box_sm: "4px 4px 0 rgb(229 229 229 / 0.75)",
        box_md: "5px 5px 0 rgb(229 229 229 / 0.75)",
      },
    },
  },
  plugins: [],
};
export default config;
