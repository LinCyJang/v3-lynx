import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const Routes = [
  {
    path: "/",
    name: 'Home',
    component: Home
  },
  {
    path: "/about",
    name: 'About',
    component: About
  },
]

const routeInstance = createRouter({
  history: createWebHashHistory(),
  routes: Routes
})

export default routeInstance