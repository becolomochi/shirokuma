<template>
  <div>
    <h1>Product</h1>
    <product-list></product-list>
  </div>
</template>

<script>
  import Child from '@/components/parts/ProductList'
  export default {
    title: 'Product',
    components: {
      productList: Child
    }
  }
</script>
