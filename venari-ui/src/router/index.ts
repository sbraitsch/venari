import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ApiView from '../views/Api.vue'
import VenariLandingVue from '@/views/VenariLanding.vue'

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
      path: '/venari',
      name: 'venari',
      component: VenariLandingVue
    }
  ]
})

export default router
