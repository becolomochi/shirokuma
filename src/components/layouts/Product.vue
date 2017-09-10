<template>
  <div class="wrapper">
    <header>
      <h1>becolomochi's portfolio</h1>
    </header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/product">Product</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
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
