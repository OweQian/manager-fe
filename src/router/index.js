import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './../components/Home.vue'
import Welcome from './../components/Welcome.vue'
import Login from './../components/Login.vue'
const routes = [
  {
    name: 'home',
    path: '/',
    mata: {
      title: '首页'
    },
    component: Home,
    redirect: '/welcome',
    children: [
      {
        name: 'welcome',
        mata: {
          title: '欢迎页'
        },
        path: '/welcome',
        component: Welcome
      },
      {
        name: 'login',
        path: '/login',
        mata: {
          title: '登录'
        },
        component: Login
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router