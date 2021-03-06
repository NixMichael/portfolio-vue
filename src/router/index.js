import { createRouter, createWebHistory } from 'vue-router'
import Projects from '../views/Projects.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import ThankYou from '../views/ThankYou.vue'

const routes = [
  {
    path: '/',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/thankyou',
    name: 'ThankYou',
    component: ThankYou
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
