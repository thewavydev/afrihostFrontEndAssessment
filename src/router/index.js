import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'
import notifications from '../pages/notifications.vue'
import recipes from '../pages/recipes.vue'
import RecipesOverview from '../components/RecipesOverview.vue'
import search from '../pages/search.vue'
import profile from '../pages/profile.vue'
import App from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: recipes
  },
    {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/recipes/:id',
    name: 'recipes-overview',
    component: RecipesOverview
},
  {
    path: '/notifications',
    name: 'notifications',
    component: notifications
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
