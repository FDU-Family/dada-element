import { createSSRApp } from 'vue'
import App from './App.vue'
import '@dada-element/style/src/index.scss'
import '@dada-element/style/icon/index.css'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
