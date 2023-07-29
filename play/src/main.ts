import { createSSRApp } from 'vue'
import App from './App.vue'
import '@dada-element/style/src/index.scss'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
