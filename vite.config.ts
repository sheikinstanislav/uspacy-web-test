import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

export default defineConfig({
  base: '/uspacy-web-test/',

  plugins: [
    react({
      include: '**/*.{jsx,tsx}',
      jsxImportSource: '@emotion/react',
    }),
  ],

  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
