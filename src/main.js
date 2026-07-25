import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import home from './pages/home.vue'
import recipes from './pages/recipes.vue'
import notifications from './pages/notifications.vue'
import profile from './pages/profile.vue'
import BottomBar from './components/BottomBar.vue'
import FeaturedCard from './components/FeaturedCard.vue'
import RecipesCard from './components/RecipesCard.vue'
import RecipesOverview from './components/RecipesOverview.vue'
import './style.css'

const app = createApp(App)
const pinia = createPinia()


app.component('featured-card', FeaturedCard);
app.component('recipes-card', RecipesCard);
app.component('recipes-overview', RecipesOverview);
app.component('bottom-bar', BottomBar);
app.component('profile', profile);
app.component('notifications', notifications);
app.component('home', home)
app.use(pinia)
app.use(router)
app.mount('#app')
