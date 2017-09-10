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
    title: 'Product',
    description: 'べこ（becolomochi）の作品一覧',
    components: {
      productList: Child
    }
  }
</script>
