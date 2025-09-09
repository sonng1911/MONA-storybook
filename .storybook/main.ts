import type { StorybookConfig } from "@storybook/nextjs-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  "stories": [
    '../{src,stories}/**/*.mdx',
    '../{src,stories}/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    // '@storybook/addon-controls',
  ],
  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {}
  },
  "staticDirs": [
    "..\\public"
  ],
  viteFinal: async (cfg) => mergeConfig(cfg, {
    server: {
      watch: {
        usePolling: true,
        interval: 200,
        awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 },
      },
    },
  }),
};
export default config;