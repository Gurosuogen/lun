import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { md } from './plugins/md'
import { demo } from './plugins/demo'
// https://vitejs.dev/config/
export default defineConfig(
  {
    base: './',
    // assetsDir: 'assets',
    plugins: [
      vue(), md(), demo()
    ],
  })
