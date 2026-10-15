import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        'next/navigation': path.resolve(__dirname, './src/lib/next-navigation.ts'),
        '@/hooks': path.resolve(__dirname, './src/hooks'),
        '@/components': path.resolve(__dirname, './src/components'),
        '@/lib': path.resolve(__dirname, './src/lib'),
        '@/contexts': path.resolve(__dirname, './src/contexts'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_BACKEND_TARGET || 'http://localhost:3001',
          changeOrigin: true,
          // The CMU provider returns to the SPA so its state can be validated before exchanging the code.
          bypass: (req) => req.url?.startsWith('/api/auth/callback') ? req.url : undefined,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/auth': {
          target: process.env.VITE_BACKEND_TARGET || 'http://localhost:3001',
          changeOrigin: true,
        },
      },
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
