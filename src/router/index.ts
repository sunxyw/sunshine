import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import Home from '@src/views/Home.vue'
import Vuex from '@src/views/Vuex.vue'
import Test from '@src/views/Test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex,
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@src/views/Axios.vue'), // 懒加载 Axios 组件
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
