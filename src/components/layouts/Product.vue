<template>
  <div class="wrapper">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Child from '@/components/parts/ProductList'
  export default {
    components: {
      productList: Child
    }
  }
</script>
