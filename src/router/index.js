import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Works from '../pages/Works.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/progetti',
      name: 'works',
      component: Works
    },
  ]
})

export default router
