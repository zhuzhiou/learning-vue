import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      component: () => import('@/views/Login')
    },
    {
      path: '/index',
      component: () => import('@/views/Index')
    }
  ]
})
