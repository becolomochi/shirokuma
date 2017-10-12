<template>
  <div>
    <h1>Works 作品紹介</h1>
    <product-list :data="myData"></product-list>
  </div>
</template>

<script>
  import Child from '@/components/parts/WorksList'
  import myData from '../../static/data.json'
  export default {
    title: 'Works',
    description: 'べこ（becolomochi）の作品一覧',
    components: {
      productList: Child
    },
    data () {
      return {
        myData: myData
      }
    }
  }
</script>
