import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import './index.css'
import App from './App.vue'
import router from "./router/routers.js";
import store from "./store/index.js";
const app = createApp(App)
app.use(ElementPlus).use(router).use(store)
app.mount('#app')
