import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import member from '../components/member'
import search from '../components/search'
import shoppingcar from '../components/shoppingcar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    { path: '/home',
      component: home
    },
    {
      path: '/member',
      component: member
    },
    {
      path: '/shoppingcar',
      component: shoppingcar
    },
    {
      path: '/search',
      component: search
    }
  ],
  linkActiveClass: 'mui-active'
})
