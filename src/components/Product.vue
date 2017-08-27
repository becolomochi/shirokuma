<template>
  <div class="wrapper">
    <header>
      <h1>becolomochi's portfolio</h1>
    </header>
    <navigation></navigation>
    <main>
      <h1>Product</h1>
      <product-list></product-list>
    </main>
    <navigation></navigation>
  </div>
</template>

<script>
  import Navigation from '@/components/parts/Navigation'
  import Child from '@/components/parts/ProductDatail'
  export default {
    title: 'Product',
    components: {
      navigation: Navigation,
      productList: Child
    }
  }
</script>
