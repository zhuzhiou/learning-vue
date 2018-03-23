import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
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

router.beforeEach(function (to, from, next) {
  let token = sessionStorage.getItem('token')
  if (token == null && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

export default router
