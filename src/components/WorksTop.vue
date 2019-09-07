<template lang="pug">
  div
    h1 Works 作品紹介
    article(v-for="d in data").product_box
      div(v-for="p in d.picture" v-if="p.id === '1'").product_image-box.common_thumb
        router-link(:to="'/works/' + d.slug")
          img(:src="p.path" width="" height="" alt="").common_thumb-image
      div.product_content-box
        h1(v-cloak).product_title
          router-link(:to="'/works/' + d.slug") {{ d.title }}
        p(v-cloak).product_description {{ d.text }}
        p(v-cloak).product_year 制作年：{{ d.year }}
</template>

<script>
  export default {
    title: 'Works',
    description: 'べこ（becolomochi）の作品一覧',
    props: ['data']
  }
</script>

<style scoped lang="scss">
  .product_box {
    display: table;
    margin-top: 50px;
  }
  .product_title {
    font-size: 2.0rem;
    margin-top: 0;
  }
  .product_description {
    font-size: 1.4rem;
    margin-bottom: 0;
  }
  .product_year {
    font-size: 1.3rem;
    color: #666;
    margin-top: 0;
    margin-bottom: 0;
  }
  .product_image-box {
    display: table-cell;
    width: 320px;
    height: 176px;
    border: 1px solid #f7f7f7;
  }
  .product_content-box {
    display: table-cell;
    padding-left: 30px;
    vertical-align: middle;
  }

  @media (max-width: 767px) {
    .product_box {
      display: block;
      & + .product_box {
        margin-top: 50px;
      }
    }
    .product_image-box {
      display: block;
      width: 300px;
      height: 150px;
      margin: 0 auto 10px;
    }
    .product_content-box {
      display: block;
      padding-left: 0;
      text-align: center;
      vertical-align: baseline;
    }
  }

  @media (max-width: 480px) {
    .product_box {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
    .product_image-box {
      width: 100%;
    }
    .product_content-box {
      padding: 0 16px;
    }
    .product_title {
      font-size: 1.6rem;
    }
  }
</style>
