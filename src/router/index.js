import { createRouter, createWebHashHistory } from 'vue-router'
import Questions from '../views/Questions.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
