import { createRouter, createWebHistory } from 'vue-router'
import MatakuliahView from '@/views/MatakuliahView.vue'
import MahasiswaView from '@/views/MahasiswaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/mhs',
      name: 'mahasiswa',
      component: MahasiswaView
    },
    {
      path: '/matkul',
      name: 'matkul',
      component: MatakuliahView
    }
  ]
})

export default router
