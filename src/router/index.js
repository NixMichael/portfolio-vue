import { createRouter, createWebHistory } from 'vue-router'
import Projects from '../views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Projects',
    // component: Projects
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  },
  {
    path: '/about',
    name: 'About',
    // component: About
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // component: Contact
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/success',
    name: 'Success',
    // component: ThankYou
    component: () => import(/* webpackChunkName: "success" */ '../views/Success.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "success" */ '../views/Blog.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
