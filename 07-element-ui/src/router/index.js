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
      name: 'Dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/dashboard/index')
        }
      ]
    }
  ]
})
