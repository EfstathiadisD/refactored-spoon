import { defineConfig } from "vitest/config";

import React from "@vitejs/plugin-react";
import Checker from "vite-plugin-checker";

const ViteReact = React();
const ViteChecker = Checker({
  typescript: true,
  eslint: {
    lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
  },
});

export default defineConfig(() => ({
  plugins: [ViteReact, ViteChecker],
}));
