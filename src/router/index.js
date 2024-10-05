import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Works from '../pages/Works.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'
import Error404 from '../pages/Error404.vue'
import ProjectType from '../pages/ProjectType.vue'
import ProjectTechnology from '../pages/ProjectTechnology.vue'
import Contacts from '../pages/Contacts.vue'


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
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/dettaglio-progetto/:slug',
      name: 'projectDetail',
      component: ProjectDetail
    },
    {
      path: '/progetti-per-tipologia/:slug',
      name: 'projectType',
      component: ProjectType
    },
    {
      path: '/progetti-per-tecnologia/:slug',
      name: 'projectTechnology',
      component: ProjectTechnology
    },
    {
      path: '/404',
      name: '404',
      component: Error404
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '404'
    },
  ]
})

export default router
