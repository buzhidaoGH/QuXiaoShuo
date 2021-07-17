import Vue from 'vue'
import VueRouter from 'vue-router'
import NovelCategory from '@/views/category/childComps/NovelCategory.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Index', redirect: '/home' },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/Home.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/Profile.vue'),
  },
  {
    path: '/bookrack',
    name: 'Bookrack',
    component: () => import('@/views/bookrack/Bookrack.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search/Search.vue'),
  },
  {
    path: '/category',
    redirect: '/category/0',
    name: 'Category',
    component: () => import('@/views/category/Category.vue'),
    children: [
      {
        path: '0',
        name: 'AllCategory',
        component: () => import('@/views/category/childComps/AllCategory.vue'),
      },
      {
        path: '1',
        name: 'Xuanhuan',
        component: () => import('@/views/category/childComps/XuanHuan.vue'),
      },
      {
        path: '2',
        name: 'Xuzhen',
        component: () => import('@/views/category/childComps/XuZhen.vue'),
      },
      {
        path: '3',
        name: 'Dushi',
        component: () => import('@/views/category/childComps/DuShi.vue'),
      },
      {
        path: '4',
        name: 'Chuanyue',
        component: () => import('@/views/category/childComps/ChuanYue.vue'),
      },
      {
        path: '5',
        name: 'Wangyou',
        component: () => import('@/views/category/childComps/WangYou.vue'),
      },
      {
        path: '6',
        name: 'Kehuan',
        component: () => import('@/views/category/childComps/KeHuan.vue'),
      },
      {
        path: '7',
        name: 'Qita',
        component: () => import('@/views/category/childComps/QiTa.vue'),
      },
    ],
  },
  {
    path: '/novelInfo/:novelkey',
    name: 'Detail',
    component:() => import('@/views/readpage/Detail.vue'),
  },
  {
    path: '/readChapter',
    name: 'Readchapter',
    component:() => import('@/views/readpage/ReadChapter.vue'),
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL, // 默认为"/"
  routes,
})

export default router
