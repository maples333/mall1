import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home=()=>import('../views/home/Home')
const Cart=()=>import('../views/cart/Cart')
const Me=()=>import('../views/me/Me')
const Category=()=>import('../views/category/Category')

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/me',
    component:Me
  },{
    path: '/cart',
    component:Cart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
