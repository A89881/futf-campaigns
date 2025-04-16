import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../pages/LandingPage.vue'
import AboutMe from '../pages/About.vue'
import Experience from '../pages/Experience.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: LandingPage },
  { path: '/om-mig', name: 'AboutMe', component: AboutMe },
  { path: '/erfarenheter', name: 'Experience', component: Experience },
  { path: '/kontakt', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
