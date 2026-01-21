import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import GerakanView from '@/views/GerakanView.vue'
import DeteksiView from '@/views/DeteksiView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/gerakan',
    name: 'gerakan',
    component: GerakanView,
  },
  {
    path: '/deteksi',
    name: 'deteksi',
    component: DeteksiView,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
