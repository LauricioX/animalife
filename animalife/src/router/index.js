import { createRouter, createWebHashHistory } from 'vue-router'
import Adotar from '../views/Adotar.vue'

const routes = [
  {
    path: '/',
    name: 'adotar',
    component: Adotar
  },
  {
    path: '/doador',
    name: 'doador',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Doador.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
