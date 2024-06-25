import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
import { presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      },
      format: {
        comments: false
      }
    },
    assetsDir: 'static'
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    UnoCSS({
      presets: [
        presetUno(),
        presetRemToPx({
          baseFontSize: 4
        })
      ],
      shortcuts: [
        ['wh-full', 'w-full h-full'],
        ['f-c-c', 'flex justify-center items-center'],
        ['flex-col', 'flex flex-col'],
        ['text-ellipsis', 'truncate']
      ]
    }),
    AutoImport({
      dirs: ['src/services'],
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [],
      eslintrc: {
        enabled: true,
        filepath: './config/.eslintrc-auto-import.json'
      },
      dts: 'src/types/auto-imports.d.ts',
      vueTemplate: true
    }),
    AutoImport({
      imports: [
        {
          from: 'lodash-es',
          imports: [['default', 'lodash']]
        },
        {
          from: 'dayjs',
          imports: [['default', 'dayjs']]
        }
      ],
      dts: false
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 7788,
    proxy: {
      '/api': {
        target: 'http://10.18.95.73:10001',
        // secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true // 如果接口跨域，需要进行这个参数配置
        // rewrite: (path) => path.replace(/^\/api/, '/'),
      }
    }
  }
})
