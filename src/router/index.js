import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Users from '@/components/Users'
import Footer from '@/components/Footer'
import newBolg from '@/components/newBolg'
import search from '@/components/search'
import Modify from '@/components/Modify'

Vue.use(Router)

export default new Router({
  routes: [
    
      
    {
      path: '/',
      component: Users
    },
    
    {
      path: '/1',
      component: Users
    },
    {
      path: '/2',
      component: Modify
    },
    {
      path: '/3',
      component: search
    },
    {
      path: '/newBolg',
      component: newBolg
    }

  ]
  
})
