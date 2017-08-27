<template>
  <div class="wrapper">
    <header>
      <h1>becolomochi's portfolio</h1>
    </header>
    <navigation></navigation>
    <main>
      <h1>Product</h1>
    </main>
    <navigation></navigation>
  </div>
</template>

<script>
  import Navigation from '@/components/parts/Navigation'
  export default {
    title: 'Product',
    components: {
      navigation: Navigation
    }
  }
</script>
