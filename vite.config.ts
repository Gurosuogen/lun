import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { md } from './plugins/md'
import { demo } from './plugins/demo'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), md(), demo()
  ],
})
