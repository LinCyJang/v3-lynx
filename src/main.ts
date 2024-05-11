import { createApp } from 'vue'
import './styles/style.scss'
import { createPinia } from "pinia"
import App from './App.vue'
import 'virtual:windi.css'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import { navie } from './naive-ui'
import { ipadCursorPlugin } from 'ipad-cursor/vue'
import routeInstance from './router'

const app = createApp(App)
app.use(routeInstance)
app.use(ipadCursorPlugin, {
  blockStyle: { radius: '4px' }
})
app.use(createPinia())
app.use(navie)

app.mount('#app')
