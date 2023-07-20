import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import uniPlugin from '@dcloudio/vite-plugin-uni'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'

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
})
