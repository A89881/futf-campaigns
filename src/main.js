import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // if you're using TailwindCSS or other global styles

const app = createApp(App)
app.use(router)
app.mount('#app')
