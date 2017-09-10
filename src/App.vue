<template>
  <div id="app">
    <router-view :data="myData"></router-view>
    <footer>
      <div class="copyright-box">© 2017 beco</div>
    </footer>
  </div>
</template>

<script>
  import myData from '../static/data.json'
  export default {
    name: 'app',
    data () {
      return {
        myData: myData
      }
    }
  }
</script>

<style lang="scss">
</style>
