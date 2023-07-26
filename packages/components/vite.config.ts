import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import uniPlugin from '@dcloudio/vite-plugin-uni'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import pxtovw from 'postcss-px-to-viewport'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [
        (componentName) => {
          if (componentName.startsWith('Dada')) {
            const name = componentName.substring(4)
            return {
              from: `@/components/${name}/${name}.vue`,
            }
          }
        },
      ],
    }),
    UniPages(),
    UniLayouts(),
    uniPlugin(),
  ],
  css: {
    postcss: {
      plugins: [
        pxtovw({
          viewportWidth: 750,
          viewportUnit: 'vw',
        }),
      ],
    },
  },
})
