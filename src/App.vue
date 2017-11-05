<template lang="pug">
  #app
    .header-outer#sticky
      header
        h1.site-title
          router-link(to="/") becolomochi's portfolio
      hnav
    transition(name="fade")
      router-view(:data="myData")
    fnav
    .sns-box
      a(href="https://twitter.com/becolomochi" target="_blank").sns-link
        i.fa.fa-twitter
      a(href="https://github.com/becolomochi" target="_blank").sns-link
        i.fa.fa-github
      a(href="https://becolomochi.tumblr.com" target="_blank").sns-link
        i.fa.fa-tumblr
    footer
      .copyright-box © 2017 beco
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
