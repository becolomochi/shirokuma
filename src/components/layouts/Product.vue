<template>
  <div class="wrapper">
    <header>
      <h1>becolomochi's portfolio</h1>
    </header>
    <navigation></navigation>
    <main>
      <router-view></router-view>
    </main>
    <navigation></navigation>
  </div>
</template>

<script>
  import Navigation from '@/components/parts/Navigation'
  import Child from '@/components/parts/ProductList'
  export default {
    title: 'Product',
    description: 'べこ（becolomochi）の作品一覧',
    components: {
      navigation: Navigation,
      productList: Child
    }
  }
</script>
