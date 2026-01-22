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
  
  // ⭐ Tambahkan ini
  scrollBehavior(to, from, savedPosition) {
    // Jika user tekan tombol Back/Forward browser, 
    // kembalikan ke posisi scroll sebelumnya
    if (savedPosition) {
      return savedPosition
    }
    
    // Jika ada hash anchor (#section-id)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    
    // Default: scroll ke atas untuk semua navigasi baru
    return { top: 0, left: 0 }
  }
})

export default router