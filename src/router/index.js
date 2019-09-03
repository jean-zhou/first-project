import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import member from '../components/member'
import search from '../components/search'
import shoppingcar from '../components/shoppingcar'
import news from '../components/newslist/news'
import newsinfo from '../components/newslist/newsinfo'
import photolist from '../components/photo/photolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    { path: '/home',
      component: home,
    },
    {
      path: '/home/newslist',
      component: news,
    },
    {
      path: '/home/newsinfo/:id',
      component: newsinfo
    },
    {
      path: '/home/photolist',
      component: photolist
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
    },
  ],
  linkActiveClass: 'mui-active'
})
