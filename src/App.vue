<template>
  <div id="app">
    <div class="header-outer" id="sticky">
      <header>
        <h1 class="site-title"><router-link to="/">becolomochi's portfolio</router-link></h1>
      </header>
      <hnav></hnav>
    </div>
    <transition name="fade">
      <router-view :data="myData"></router-view>
    </transition>
    <fnav></fnav>
    <div class="sns-box">
      <a href="https://twitter.com/becolomochi" target="_blank" class="sns-link"><i class="fa fa-twitter"></i></a>
      <a href="https://github.com/becolomochi" target="_blank" class="sns-link"><i class="fa fa-github"></i></a>
      <a href="https://becolomochi.tumblr.com" target="_blank" class="sns-link"><i class="fa fa-tumblr"></i></a>
    </div>
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
    },
    mounted: function() {
      $(window).on('scroll', function() {
        if($(this).scrollTop() > 400) {
          $('#sticky').addClass('is-true');
        } else {
          $('#sticky').removeClass('is-true');
        }
      })
    }
  }
</script>

<style lang="scss">
  .is-true {
    background: rgba(255,255,255, 0.8);
  }
</style>
