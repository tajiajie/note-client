import Vue from 'vue'
import Router from 'vue-router'
import  Detail from '../views/detail'
import  Region from '../views/region'
import  Search from '../views/search'
import  Write from '../views/write'
import  Home from '../views/home'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component: Home},
    {path: '/Detail',component: Detail},
    {path: '/Region',component: Region},
    {path: '/Search',component: Search},
    {path: '/Write',component: Write},

  ]
})
