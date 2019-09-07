<template lang="pug">
  #app
    .header-outer
      header.header
        h1.header_title
          router-link(to="/").header_title-link becolomochi's portfolio
        hnav
    transition(name="fade")
      router-view(:data="myData")
    footer.footer
      fnav
      .footer_copyright © 2017-2019 beco
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
