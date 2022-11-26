import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import AboutView from '../views/AboutView.vue'
import MainView from '@/views/MainView'
import ProductsView from '@/views/ProductsView'
import CardView from '@/views/CardView'

const routes = [
  {
    path: '/',
    name: 'home',
    props: true,
    component: StartView
  },
  {
    path: '/about',
    name: 'about',
    props: true,

    component: AboutView
  },
  {
    path: '/products',
    name: 'products',
    props: true,

    component: ProductsView
  },
  {
    path: '/card',
    name: 'card',
    props: true,

    component: CardView
  },
  {
    path: '/main',
    name: 'main',
    props: true,

    component: MainView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
