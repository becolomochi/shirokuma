<template>
  <div class="wrapper">
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
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
