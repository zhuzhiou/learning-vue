import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/views/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/examples'
    },
    {
      path: '/examples',
      component: layout,
      redirect: '/examples/form',
      children: [
        {
          path: 'table',
          component: () => import('@/views/examples/table')
        },
        {
          path: 'form',
          component: () => import('@/views/examples/form')
        },
        {
          path: 'dashboard',
          component: () => import('@/views/examples/dashboard')
        }
      ]
    }
  ]
})
