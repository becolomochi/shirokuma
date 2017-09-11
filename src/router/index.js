import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import LayoutProduct from '@/components/layouts/Product'
import ProductTop from '@/components/ProductTop'
import ProductDetail from '@/components/ProductDetail'
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
      path: '/product',
      component: LayoutProduct,
      children: [
        {
          path: '/',
          name: 'Product',
          component: ProductTop
        },
        {
          path: ':slug',
          name: 'ProductDetail',
          component: ProductDetail
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
  ]
})
