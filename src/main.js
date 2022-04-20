import { createApp } from 'vue'
import App from './App.vue'
import Router from "./router";
import axios from 'axios';
import config from './config'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
axios.get(`${config.mockApi}/login`).then(res => console.log(res))
app.use(Router)
app.use(ElementPlus)
app.mount('#app')
