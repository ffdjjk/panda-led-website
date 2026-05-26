import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/privacy-policy/:locale',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue'),
    },
  ],
})

export default router
