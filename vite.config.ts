import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定要缓存的文件夹
      iconDirs: [resolve(__dirname, 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: '[name]'
    })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: 'vue-i18n', replacement: resolve(__dirname, 'node_modules/vue-i18n/dist/vue-i18n.cjs.js') }
    ]
  }
})
