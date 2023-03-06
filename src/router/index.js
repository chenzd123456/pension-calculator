import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'question',
      component: () => import('@/views/Question.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('@/views/Report.vue')
    }
  ]
})

export default router
