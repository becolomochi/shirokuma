import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import About from '@/components/About'
import LayoutProduct from '@/components/layouts/Product'
import ProductTop from '@/components/ProductTop'
import ProductDetail from '@/components/ProductDetail'
import Contact from '@/components/Contact'
import Sitemap from '@/components/Sitemap'
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
      path: '/sitemap',
      name: 'Sitemap',
      component: Sitemap
    },
    {
      path: '*',
      name: 'Not Found',
      component: PageNotFound,
      title: 'Not Found'
    }
  ]
})
