import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
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
  // test: {
  //   environment: 'jsdom',
  //   setupFiles: ['./src/tests/setup.js'],
  //   testMatch: ['./src/**/*.test.jsx', './src/**/*.test.js'],
  //   globals: true,
  //   watch: false,
  //   sequence: {
  //     setupFiles: 'list',
  //   },
  // },
  resolve: {
    alias: {
      assets: path.resolve('src/assets/'),
      api: path.resolve('src/api/'),
      components: path.resolve('src/components/'),
      config: path.resolve('src/config/'),
      styles: path.resolve('src/styles/'),
      data: path.resolve('src/data/'),
      tests: path.resolve('src/tests/'),
      testData: path.resolve('src/testData/'),
      routes: path.resolve('src/routes/'),
      utils: path.resolve('src/utils/'),
      pages: path.resolve('src/pages/'),
      constants: path.resolve('src/constants/'),
      contexts: path.resolve('src/contexts/'),
      templates: path.resolve('src/templates/'),
      guards: path.resolve('src/guards/'),
      outlets: path.resolve('src/outlets/'),
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
