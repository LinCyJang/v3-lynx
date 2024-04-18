import { createApp } from 'vue'
import './styles/style.scss'
import { createPinia } from "pinia"
import App from './App.vue'
import 'virtual:windi.css'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import { navie } from './naive-ui'

const app = createApp(App)

app.use(createPinia())
app.use(navie)

app.mount('#app')
