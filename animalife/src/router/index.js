import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/donor',
    name: 'donor',
    component: () => import('../views/donor.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
