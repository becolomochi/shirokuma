<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      <div class="copyright-box">© 2017 beco</div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  html, body { margin: 0;padding: 0;}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .wrapper-header {
    height: 100px;background-color: #f7f7f7;
  }
  .wrapper {
    max-width: 1200px;
    margin-left: auto;margin-right: auto;
  }
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .copyright-box {
    margin-top: 40px;
  }
</style>
