import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../pages/LandingPage.vue'
const routes = [
  { path: '/', name: 'Home', component: LandingPage, meta: { title: 'Abhay Mishra - Engineering Physics & Software' } },
  { path: '/about', name: 'About', component: () => import('../pages/AboutPage.vue'), meta: { title: 'About Abhay Mishra' } },
  { path: '/resume', name: 'Resume', component: () => import('../pages/ResumePage.vue'), meta: { title: 'Resume - Abhay Mishra' } },
  { path: '/projects', name: 'Projects', component: () => import('../pages/ProjectsPage.vue'), meta: { title: 'Projects - Abhay Mishra' } },
  { path: '/experience', name: 'Experience', component: () => import('../pages/ExperiencePage.vue'), meta: { title: 'Experience - Abhay Mishra' } },
  { path: '/appendix', name: 'Appendix', component: () => import('../pages/AppendixPage.vue'), meta: { title: 'Appendix - Abhay Mishra' } },
  { path: '/contact', name: 'Contact', component: () => import('../pages/ContactPage.vue'), meta: { title: 'Contact - Abhay Mishra' } },
  { path: '/admin', name: 'Admin', component: () => import('../pages/AdminPage.vue'), meta: { title: 'Portfolio Administration' } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

router.afterEach((to) => { document.title = to.meta.title || 'Abhay Mishra' })

export default router
