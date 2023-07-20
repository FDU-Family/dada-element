import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import uniPlugin from '@dcloudio/vite-plugin-uni'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import { DadaResolver } from '@dada-element/resolver'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [
        DadaResolver(),
      ],
    }),
    UniPages(),
    UniLayouts(),
    uniPlugin(),
  ],
})
