<template lang="pug">
  .page.is-wide
    transition(name="fade")
      router-view(:data="myData")
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
