<template>
  <div id="app">
    <div class="header-outer">
      <header>
        <h1 class="site-title"><router-link to="/">becolomochi's portfolio</router-link></h1>
      </header>
      <hnav></hnav>
    </div>
    <transition name="fade">
      <router-view :data="myData"></router-view>
    </transition>
    <fnav></fnav>
    <footer>
      <div class="copyright-box">© 2017 beco</div>
    </footer>
  </div>
</template>

<script>
  import HeaderNav from '@/components/parts/NavHeader'
  import FooterNav from '@/components/parts/NavFooter'
  import myData from '../static/data.json'
  export default {
    name: 'app',
    components: {
      hnav: HeaderNav,
      fnav: FooterNav
    },
    data () {
      return {
        myData: myData
      }
    }
  }
</script>
