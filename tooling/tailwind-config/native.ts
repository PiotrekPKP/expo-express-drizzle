import type { Config } from "tailwindcss";

import base from "./base";

export default {
  content: [...base.content, "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [base],
  theme: {},
} satisfies Config;
