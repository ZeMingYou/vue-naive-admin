import './styles/tailwind.css';
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'

const app = createApp(App)

app.use(routes)

app.mount('#app')
