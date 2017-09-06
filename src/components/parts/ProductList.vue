<template>
  <div>
    <article class="product-box" v-for="d in data">
      <div v-for="p in d.picture" v-if="p.id === '1'">
        <img :src="p.path" width="" height="" alt="" class="product-image">
      </div>
      <h1 class="product-title"><router-link :to="'/product/' + d.slug">{{ d.title }}</router-link></h1>
      <p class="product-description">{{ d.text }}</p>
      <p class="product-year">制作年：{{ d.year }}</p>
      <div class="product-tags">
        <ul>
          <li v-for="t in d.tags"><a href="#" class="tag">{{ t }}</a></li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>
