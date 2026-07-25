import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'
import notifications from '../pages/notifications.vue'
import recipes from '../pages/recipes.vue'
import profile from '../pages/profile.vue'
import App from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/recipes/:id',
    name: 'Recipes',
    component: recipes
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: notifications
  },
  {
    path: '/profile',
    name: 'Profile',
    component: profile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
