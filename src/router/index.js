import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import AboutView from '../views/AboutView.vue'
import MainView from '@/views/MainView'
import ProductsView from '@/views/ProductsView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: StartView
  },
  {
    path: '/about',
    name: 'about',

    component: AboutView
  },
  {
    path: '/products',
    name: 'products',

    component: ProductsView
  },
  {
    path: '/main',
    name: 'main',

    component: MainView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
