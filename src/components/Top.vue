<template>
  <div class="hello">
    <div class="wrapper-header">
    </div>
    <div class="wrapper">
      <header>
        <h1>becolomochi's portfolio</h1>
      </header>
      <navigation></navigation>
      <img src="/#/assets/logo_shirokuma.svg">

      <section class="pickup-box-outer">

        <article class="pickup-box" v-for="d in data">
          <div v-for="p in d.picture" v-if="p.id === '1'">
            <img :src="p.path" width="" height="" alt="" class="pickup-image">
          </div>
          <h1 class="pickup-title"><router-link :to="'/product/' + d.slug">{{ d.title }}</router-link></h1>
          <p class="pickup-description">{{ d.text }}</p>
          <p class="pickup-year">制作年：{{ d.year }}</p>
          <div class="pickup-tags">
            <ul>
              <li v-for="t in d.tags"><a href="#" class="tag">{{ t }}</a></li>
            </ul>
          </div>
        </article>

        <div class="common-more-box">
          <router-link to="/product" class="">もっと見る</router-link>
        </div>
      </section>

      <article class="about-box-outer">
        <div class="about-content-box">
          <h1 class="about-title">About このサイトについて</h1>
          <div class="about-text">
            <p>内容内容内容内容内容内容内容</p>
          </div>
        </div>
        <div class="about-thumb-box">
          <img src="" width="" height="" alt="" class="about-image">
        </div>
      </article>

      <article class="about-box-outer">
        <div class="about-content-box">
          <h1 class="about-title">Contact お問い合わせ</h1>
          <div class="about-text">
            <p>Twitter</p>
            <p>フォーム</p>
          </div>
        </div>
        <div class="about-thumb-box">
          <img src="" width="" height="" alt="" class="about-image">
        </div>
      </article>

    </div>
    <navigation></navigation>
  </div>
</template>

<script>
  import Navigation from '@/components/parts/Navigation'
  export default {
    name: 'hello',
    title: 'Top',
    description: 'べこ（becolomochi）のポートフォリオサイト',
    components: {
      navigation: Navigation
    },
    props: ['data']
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section + section {
    margin-bottom: 100px;
  }
  .pickup-box-outer {
    margin-bottom: 100px;
  }

  .pickup-box-outer::after {
    content: '';
    display: block;
    clear: both;
  }

  .pickup-box {
    width: 50%;
    float: left;
  }

  .post-box-outer {
    margin-bottom: 30px;
  }

  .post-box-outer::after {
    content: '';
    display: block;
    clear: both;
  }

  .post-box {
    width: 33.3%;
    float: left;
  }

</style>
