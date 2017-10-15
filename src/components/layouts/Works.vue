<template>
  <div class="wrapper">
    <main>
      <transition name="fade">
        <router-view :data="myData"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
  import myData from '../../../static/data.json'
  export default {
    data () {
      return {
        myData: myData
      }
    }
  }
</script>
