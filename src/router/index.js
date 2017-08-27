import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Product from '@/components/Product'
import Contact from '@/components/Contact'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
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
  ]
})
