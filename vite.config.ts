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
  build: {
    outDir: '../build',
    emptyOutDir: true,
    sourcemap: true,

    rollupOptions: {
      cache: false,
      input: {
        app: 'src/index.html',
      },
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          if (/\.css$/.test(name)) return 'assets/[name]-[hash][extname]';
          if (/\.(gif|jpg|jpeg|png|svg)$/.test(name))
            return 'images/[name].[hash][extname]';
          if (/\.(woff|woff2|ttf|eot)$/.test(name))
            return 'fonts/[name][extname]';
          if (/recommendations-loader\.json$/.test(name))
            return 'loaders/[name][extname]';
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  plugins: [
    react({
      // Use React plugin in all *.jsx and *.tsx files
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
