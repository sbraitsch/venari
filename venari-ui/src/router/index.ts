import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VenariHomeVue from '@/views/VenariHome.vue'
import VenariCreationVue from '@/views/VenariCreation.vue'
import CheatsheetVue from '@/views/Cheatsheet.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cheatsheet',
      name: 'cheatsheet',
      component: CheatsheetVue
    },
    {
      path: '/venari',
      name: 'venari',
      component: VenariHomeVue
    },
    {
      path: '/venari/create',
      name: 'venariCreation',
      component: VenariCreationVue
    },
    {
      path: '/:pathMatch(.*)*',
      name: "NotFound",
      component: PageNotFound
  }
  ]
})

export default router
