import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // if you're using TailwindCSS or other global styles

const redirectedPath = sessionStorage.getItem('spa-redirect')
if (redirectedPath) {
  sessionStorage.removeItem('spa-redirect')
  history.replaceState(null, '', redirectedPath)
}

const app = createApp(App)
app.use(router)
app.mount('#app')
