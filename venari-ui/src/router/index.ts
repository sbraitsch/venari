import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ApiView from '../views/Api.vue'
import PathologyVue from '@/views/Pathology.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/api',
      name: 'api',
      component: ApiView
    },
    {
      path: '/pathology',
      name: 'pathology',
      component: PathologyVue
    }
  ]
})

export default router
