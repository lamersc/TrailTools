import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: [
      {
        find: /@\/components\/((?!.*[.](ts|js|tsx|jsx|vue)$).*$)/,
        replacement: fileURLToPath(
            new URL("./src/components/$1/Index.vue", import.meta.url)
        ),
      },
      {
        find: "@",
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
      {
        find: "$",
        replacement: fileURLToPath(new URL('./src/scripts', import.meta.url))
    }],
  },
})
