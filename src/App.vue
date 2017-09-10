<template>
  <div id="app">
    <div class="header-outer">
      <header>
        <h1 class="site-title"><router-link to="/">becolomochi's portfolio</router-link></h1>
      </header>
      <hnav></hnav>
    </div>
    <router-view :data="myData"></router-view>
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

<style lang="scss">
  .header-outer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
  }
  .site-title {
    font-size: 2.0rem;
    a {
      color: #000;
      &:hover {
        text-decoration: none;
      }
    }
  }
    .header-nav {
      a {
        color: #000;
        &:hover {
          text-decoration: none;
          border-bottom-color: #000;
        }
      }
    }
  @media (min-width: 768px) {
    header, .header-nav {
      text-align: left;
    }
    .header-outer::after {
      content: '';
      display: block;
      overflow: hidden;
    }
    .site-title {
      float: left;
      width: 50%;
      margin-top: 15px;
      margin-bottom: 0;
      margin-left: 20px;
      font-size: 2.0rem;
    }
    .header-nav {
      float: right;
      ul {
        margin-right: 16px;
      }
      a {
        display: inline-block;
        padding: 16px;
        border-bottom: 3px solid transparent;
        transition: border-bottom 0.3s;
      }
    }
  }
</style>
