import Vue from 'vue'
import Router from 'vue-router'
import menuList from './menu-list.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/HelloWorld',
      component: () => import('@/components/home.vue'),
      children: [
        ...menuList
      ]
    }
  ]
})
