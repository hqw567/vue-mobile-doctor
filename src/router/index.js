import HomeView from '@/views/HomeView'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/selectCity',
    name: 'SelectCity',
    component: () => import('@/views/SelectCity')
  },
  {
    path: '/detection',
    name: 'Detection',
    component: () => import('@/views/DetectionView')
  },
  {
    path: '/askDoctor',
    name: 'AskDoctor',
    component: () => import('@/views/AskDoctor')
  },
  {
    path: '/askSummary',
    name: 'AskSummary',
    component: () => import('@/views/AskSummary')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
