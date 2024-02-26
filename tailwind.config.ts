import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  fontFamily: {
    'playfair-display': ['var(--font-playfair-display)', 'serif'],
  },
  theme: {},
  plugins: [],
});

export default config;
