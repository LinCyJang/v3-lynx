import { createRouter, createWebHashHistory } from 'vue-router'


const Routes = []

const routeInstance = createRouter({
  history: createWebHashHistory(),
  routes: Routes
})

export default routeInstance