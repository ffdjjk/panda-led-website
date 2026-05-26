import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
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
