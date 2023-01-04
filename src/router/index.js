import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import ProductsView from '@/views/ProductsView'
import CardView from '@/views/CardView'
import FAQsView from '@/views/FAQsView'
import DaysView from '@/views/DaysView'

const routes = [
  {
    path: '/',
    name: 'home',
    props: true,
    component: StartView
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
    path: '/days',
    name: 'days',
    props: true,

    component: DaysView
  },
  {
    path: '/faqs',
    name: 'faqs',
    props: true,

    component: FAQsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
