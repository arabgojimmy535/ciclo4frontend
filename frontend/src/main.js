import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/css/bootstrap.css'
import '../node_modules/bootstrap/js/bootstrap.bundle'
import '../src/views/styles.css'


createApp(App).use(router).mount('#app')
