import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../pages/LandingPage.vue'
import AboutMe from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: LandingPage },
  { path: '/om-mig', name: 'AboutMe', component: AboutMe },
  { path: '/kontakt', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
})

export default router
