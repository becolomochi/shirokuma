import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
