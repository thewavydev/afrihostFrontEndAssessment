import { createApp } from 'vue'
import App from './App.vue'
import BottomBar from './components/BottomBar.vue'
import FeaturedCard from './components/FeaturedCard.vue'
import RecipesCard from './components/RecipesCard.vue'
import RecipesOverview from './components/RecipesOverview.vue'
import './style.css'


const app = createApp(App)

app.component('featured-card', FeaturedCard);
app.component('recipes-card',RecipesCard);
app.component('recipes-overview',RecipesOverview);
app.component('bottom-bar', BottomBar);
app.mount('#app')
