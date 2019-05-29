import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'

import Inventaire from './views/Inventaire'
import Locaux from './views/Locaux'
import Local from './views/Local'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'inventaire',
          component: Inventaire
        },
        {
          path: '/locaux',
          name: 'about',
          component: Locaux,
          children: [
            {
              path: '/locaux',
              name: 'about',
              component: Local
            }
          ]
        }
      ]
    }
  ]
})
