import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Index', redirect: '/home'},
  { path: '/home', name: 'Home', component: ()=>import("@/views/home/Home.vue") },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL, // 默认为"/"
  routes,
})

export default router
