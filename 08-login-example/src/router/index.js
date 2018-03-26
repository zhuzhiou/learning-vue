import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/views/layout/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/admin'
    },
    {
      path: '/login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/admin',
      redirect: '/admin/welcome',
      component: layout,
      children: [
        {
          path: 'welcome',
          component: () => import('@/views/welcome/index')
        }
      ]
    }
  ]
})

router.beforeEach(function (to, from, next) {
  let token = sessionStorage.getItem('token')
  if (token == null && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

export default router
