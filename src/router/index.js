import Vue from 'vue'
import Router from 'vue-router'
import TestPage from '@/pages/TestPage'
import MainPage from '@/pages/MainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/Test',
      name: 'TestPage',
      component: TestPage
    }
  ]
})
