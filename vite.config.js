import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000, // you can replace this port with any port
    hmr: {
      overlay: false,
      protocol: 'ws',
      host: '0.0.0.0',
    },
  },
  resolve: {
    alias: {
      api: path.resolve('src/api/'),
      assets: path.resolve('src/assets/'),
      components: path.resolve('src/components/'),
      constants: path.resolve('src/constants/'),
      contexts: path.resolve('src/contexts/'),
      config: path.resolve('src/config/'),
      data: path.resolve('src/data/'),
      outlets: path.resolve('src/outlets/'),
      pages: path.resolve('src/pages/'),
      routes: path.resolve('src/routes/'),
      styles: path.resolve('src/styles/'),
      templates: path.resolve('src/templates/'),
      testData: path.resolve('src/testData/'),
      utils: path.resolve('src/utils/'),
      '@': path.resolve(__dirname, './src'),
    },
  },
});
