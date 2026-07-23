import { createApp } from 'vue'
import App from './App.vue'
import BottomBar from './components/BottomBar.vue'
import './style.css'


const app = createApp( App)


app.component('bottom-bar', BottomBar);
app.mount('#app')
