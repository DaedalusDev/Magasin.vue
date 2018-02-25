import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Home from '@/router/routes/Home'

import Stock from './routes/Stock'
import Unite from './routes/Unite'

import PageNotFound from '@/router/routes/PageNotFound'

Router.prototype.isGranted = function (route) {
  return !route.roles || route.roles.includes(store.state.user.profile)
}

Vue.use(Router)

const routes = [
  {
    path: '/stock',
    name: 'Stock',
    component: Stock,
    icon: 'bubble_chart',
    roles: ['stock']
  },
  {
    path: '/unite',
    name: 'Unite',
    component: Unite,
    icon: 'bubble_chart'
  }
]

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Accueil',
      component: Home,
      icon: 'home'
    },
    ...routes,
    { path: '*', component: PageNotFound }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
