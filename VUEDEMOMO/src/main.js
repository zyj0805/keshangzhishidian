<<<<<<< HEAD
import {
  createApp
} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router';

const app = createApp(App);

app.use(router).mount('#app')
=======
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
>>>>>>> 4727ca0781c0ffb493419247cf75246c87175601
