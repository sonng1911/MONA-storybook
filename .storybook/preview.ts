import type { Preview } from '@storybook/nextjs-vite'
// import 'prism-themes/themes/prism-vsc-dark-plus.css';
import './preview.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    docs: {
      source: {
        dark: true,
        language: 'html',
      },
    },

    // actions: { argTypesRegex: '^on.*' },
    // Bật App Router navigation nếu story dùng next/navigation:
    nextjs: { appDirectory: true },
  },
};

export default preview;