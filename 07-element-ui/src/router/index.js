import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/views/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/module1/index')
        }
      ]
    },
    {
      path: '/module1',
      component: layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/module1/index')
        }
      ]
    },
    {
      path: '/module2',
      component: layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/module2/index')
        }
      ]
    }
  ]
})
