import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Job from './views/home/Job.vue'
import Layout from './views/home/Layout.vue'
import Mine from './views/home/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    //重定向
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/job',
      name: 'job',
      component: Job
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },

  ]
})
