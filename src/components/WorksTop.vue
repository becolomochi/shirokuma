<template lang="pug">
  div
    h1 Works 作品紹介
    article(v-for="d in data").product-box
      div(v-for="p in d.picture" v-if="p.id === '1'").product-image-box.common-thumb-box
        router-link(:to="'/works/' + d.slug")
          img(:src="p.path" width="" height="" alt="").common-thumb-image
      div.product-content-box
        h1(v-cloak).product-title
          router-link(:to="'/works/' + d.slug") {{ d.title }}
        p(v-cloak).product-description {{ d.text }}
        p(v-cloak).product-year 制作年：{{ d.year }}
</template>

<script>
  export default {
    title: 'Works',
    description: 'べこ（becolomochi）の作品一覧',
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
