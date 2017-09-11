<template>
  <div>
    <article class="product-box" v-for="d in data">
      <div v-for="p in d.picture" v-if="p.id === '1'" class="product-image-box common-thumb-box">
        <img :src="p.path" width="" height="" alt="" class="product-image common-thumb-image">
      </div>
      <div class="product-content-box">
        <h1 class="product-title" v-cloak><router-link :to="'/product/' + d.slug">{{ d.title }}</router-link></h1>
        <p class="product-description" v-cloak>{{ d.text }}</p>
        <p class="product-year" v-cloak>制作年：{{ d.year }}</p>
        <div class="common-tags">
          <ul>
            <li v-for="t in d.tags" class="tag-item"><a href="#" class="tag" v-cloak>{{ t }}</a></li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style scoped lang="scss">
  .product-box {
    display: table;
    & + .product-box {
      margin-top: 100px;
    }
  }
  .product-title {
    font-size: 2.8rem;
    margin-top: 0;
  }
  .product-image-box {
    display: table-cell;
    width: 320px;
    height: 240px;
    border: 1px solid #f7f7f7;
  }
  .product-content-box {
    display: table-cell;
    padding-left: 30px;
    vertical-align: middle;
  }
</style>
