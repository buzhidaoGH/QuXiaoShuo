import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Index', redirect: '/home'},
  { path: '/home', name: 'Home', component: ()=>import("@/views/home/Home.vue") },
  { path: '/profile', name: 'Profile', component: ()=>import("@/views/profile/Profile.vue") },
  { path: '/bookrack', name: 'Bookrack', component: ()=>import("@/views/bookrack/Bookrack.vue") },
  { path: '/category', name: 'Category', component: ()=>import("@/views/category/Category.vue") },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL, // 默认为"/"
  routes,
})

export default router
