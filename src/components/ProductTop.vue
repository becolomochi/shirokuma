<template>
  <div>
    <h1>Product 作品紹介</h1>
    <product-list :data="myData"></product-list>
  </div>
</template>

<script>
  import Child from '@/components/parts/ProductList'
  import myData from '../../static/data.json'
  export default {
    title: 'Product',
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
