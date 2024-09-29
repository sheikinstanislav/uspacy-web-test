import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { VitePluginFonts } from 'vite-plugin-fonts';

export default defineConfig({
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },

  preview: {
    port: 4040,
    host: true,
    open: true,
  },

  plugins: [
    react({
      include: '**/*.{jsx,tsx}',
      jsxImportSource: '@emotion/react',
    }),

    VitePluginFonts({
      custom: {
        families: [
          {
            name: 'Manrope',
            src: 'shared/assets/fonts/Manrope/*',
          },
          {
            name: 'Montserrat',
            src: 'shared/assets/fonts/Montserrat/*',
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
