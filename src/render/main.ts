import App from './App.vue'
// import '../utils/ms-auth'
import { createApp } from 'vue'
import router from './router'


const app = createApp(App)

app.mount('#app')
app.use(router)
