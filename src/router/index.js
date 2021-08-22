import { createRouter, createWebHashHistory } from 'vue-router'
import Questions from '../views/Questions.vue'
import Dashboard from '../views/Dashboard.vue'
import Welcome from '../views/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
