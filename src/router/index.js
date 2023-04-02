import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/index.vue'
import Login from "@/views/auth/login.vue"
import Register from "@/views/auth/register.vue"
import DefaultLayout from "@/layouts/default.vue"
import Basket from "@/views/basket.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

      path: '/',
      name: 'home',
      component: DefaultLayout,
      children:[
        {
          path:"",
          name: "books",
          component : HomeView
        },
        {
          path: '/basket',
          name: 'basket',
         
          component: Basket
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
     
      component: Login
    },
    {
      path: '/register',
      name: 'register',
     
      component: Register
    }
  ]
})

export default router
