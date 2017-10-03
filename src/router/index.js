import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import About from '@/components/About'
import LayoutWorks from '@/components/layouts/Works'
import WorksTop from '@/components/WorksTop'
import WorksDetail from '@/components/WorksDetail'
import Contact from '@/components/Contact'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/works',
      component: LayoutWorks,
      children: [
        {
          path: '/',
          name: 'Works',
          component: WorksTop
        },
        {
          path: ':slug',
          name: 'WorksDetail',
          component: WorksDetail
        }
      ]
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      name: 'Not Found',
      component: PageNotFound,
      title: 'Not Found'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
