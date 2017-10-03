<template>
  <div>
    <article class="product-box" v-for="d in data">
      <div v-for="p in d.picture" v-if="p.id === '1'" class="product-image-box common-thumb-box">
        <router-link :to="'/works/' + d.slug"><img :src="p.path" width="" height="" alt="" class="common-thumb-image"></router-link>
      </div>
      <div class="product-content-box">
        <h1 class="product-title" v-cloak><router-link :to="'/works/' + d.slug">{{ d.title }}</router-link></h1>
        <p class="product-description" v-cloak>{{ d.text }}</p>
        <p class="product-year" v-cloak>制作年：{{ d.year }}</p>
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
    margin-top: 50px;
  }
  .product-title {
    font-size: 2.0rem;
    margin-top: 0;
  }
  .product-description {
    font-size: 1.4rem;
    margin-bottom: 0;
  }
  .product-year {
    font-size: 1.3rem;
    color: #666;
    margin-top: 0;
    margin-bottom: 0;
  }
  .product-image-box {
    display: table-cell;
    width: 320px;
    height: 176px;
    border: 1px solid #f7f7f7;
  }
  .product-content-box {
    display: table-cell;
    padding-left: 30px;
    vertical-align: middle;
  }

  @media (max-width: 767px) {
    .product-box {
      display: block;
      & + .product-box {
        margin-top: 50px;
      }
    }
    .product-image-box {
      display: block;
      width: 300px;
      height: 150px;
      margin: 0 auto 10px;
    }
    .product-content-box {
      display: block;
      padding-left: 0;
      text-align: center;
      vertical-align: baseline;
    }
  }

  @media (max-width: 480px) {
    .product-box {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
    .product-image-box {
      width: 100%;
    }
    .product-content-box {
      padding: 0 16px;
    }
    .product-title {
      font-size: 1.6rem;
    }
  }
</style>
