import { createApp } from 'vue'
import App from './App.vue'
import Router from "./router";
import request from './utils/request';
import storage from "./utils/storage";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.use(Router)
app.use(ElementPlus)
app.mount('#app')
