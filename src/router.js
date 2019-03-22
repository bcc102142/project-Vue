import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Splash from './views/splash/Splash.vue'
import Job from './views/home/Job.vue'
import Layout from './views/home/Layout.vue'
import Mine from './views/home/Mine.vue'
import Register from './views/home/Register.vue'
import Search from './views/home/Search.vue'
import Detail from './views/home/Detail.vue'
import navItem from './views/home/navItem.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/',
      component: Splash
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/home/layout',
      children:[
        {
          path: 'layout',
          name: 'layout',
          component: Layout,
        },
        {
          path: 'job',
          name: 'job',
          component: Job,
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        },
        {
            path: 'search',
            name: 'search',
            component: Search
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        },
        {
          path: 'detail',
          name: 'detail',
          component: Detail
        },
        {
          path: 'navItem',
          name: 'navItem',
          component: navItem
        },
       
      ]
    },
    // //重定向
    // { path: '/', redirect: '/home' },
    // {
    //   path: '/home',
    //   name: 'Layout',
    //   component: Layout
    // },
    // {
    //   path: '/job',
    //   name: 'job',
    //   component: Job
    // },
    // {
    //   path: '/mine',
    //   name: 'mine',
    //   component: Mine
    // },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: Register
    // },
    // {
    //   path: '/search',
    //   name: 'search',
    //   component: Search
    // },
    // {
    //   path: '/detail',
    //   name: 'detail',
    //   component: Detail
    // },
    // //404
    // { path: '*' ,component:Job},

  ]
})
