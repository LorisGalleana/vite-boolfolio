import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Works from '../pages/Works.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'
import Error404 from '../pages/Error404.vue'


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
    {
      path: '/dettaglio-progetto/:slug',
      name: 'projectDetail',
      component: ProjectDetail
    },
    {
      path: '/404',
      name: '404',
      component: Error404
    },
  ]
})

export default router
