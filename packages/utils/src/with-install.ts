import type { App, Component } from 'vue'
import { camelize } from './format'

export type WithInstall<T> = T & {
  install(app: App): void
}

export function withInstall<T extends Component>(options: T) {
  (options as Record<string, unknown>).install = (app: App) => {
    const { name } = options
    if (name) {
      // 同时注册两种命名方式的组件
      app.component(name, options)
      app.component(camelize(`-${name}`), options)
    }
  }

  return options as WithInstall<T>
}
