import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/index.vue'
import Login from "@/views/auth/login.vue"
import Register from "@/views/auth/register.vue"
import DefaultLayout from "@/layouts/default.vue"
import Basket from "@/views/basket.vue"
import Profil from "@/views/profil.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
     
      component: Register
    },
    {
      path: '/',
      name: 'login',
     
      component: Login
    },
    
    {

    

      path: '/books',
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
        },
        {
          path: '/profil',
          name: 'profil',
         
          component: Profil
        },
      ]
    },
    
   
  ]
})

export default router
