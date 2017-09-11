<template>
  <div class="hello">
    <div class="wrapper-header">
    </div>
    <div class="top-wrapper">
      <section class="pickup-box-outer">
        <div class="pickup-box-inner">
          <article class="pickup-box" v-for="d in data">
            <div class="pickup-image-box common-thumb-box" v-for="p in d.picture" v-if="p.id === '1'">
              <img :src="p.path" width="" height="" alt="" class="pickup-image common-thumb-image">
            </div>
            <h1 class="pickup-title" v-cloak><router-link :to="'/product/' + d.slug">{{ d.title }}</router-link></h1>
            <p class="pickup-year" v-cloak>制作年：{{ d.year }}</p>
            <div class="common-tags">
              <ul>
                <li v-for="t in d.tags" class="tag-item"><a href="#" class="tag" v-cloak>{{ t }}</a></li>
              </ul>
            </div>
          </article>
        </div>
        <div class="common-more-box">
          <router-link to="/product" class="more-link">もっと見る</router-link>
        </div>
      </section>

      <article class="common-box-outer">
        <h2 class="common-content-title"><img src="../assets/title_about.svg" alt="about" class="common-content-title"></h2>
        <div class="about-content-box">
          <h1 class="common-article-title">このサイトについて</h1>
          <div class="common-text">
            <p>内容内容内容内容内容内容内容</p>
          </div>
        </div>
        <div class="about-thumb-box">
          <img src="" width="" height="" alt="" class="about-image">
        </div>
      </article>

      <article class="common-box-outer">
        <h2 class="common-content-title contact-content-title"><img src="../assets/title_contact.svg" alt="contact" class="common-content-title"></h2>
        <div class="contact-content-box">
          <h1 class="common-article-title">お問い合わせ</h1>
          <div class="common-text">
            <p>Twitter</p>
            <p>フォーム</p>
          </div>
        </div>
        <div class="about-thumb-box">
          <img src="" width="" height="" alt="" class="about-image">
        </div>
      </article>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    title: 'Top',
    description: 'べこ（becolomochi）のポートフォリオサイト',
    props: ['data']
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  section + section {
    margin-bottom: 100px;
  }
  .pickup-box-outer {
    position: relative;
    margin-top: 50px;
    margin-bottom: 100px;
  }

  .pickup-box-inner::after {
    content: '';
    display: block;
    clear: both;
  }

  .pickup-box {
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
    width: 35%;
    float: left;
    margin-top: 10px;
    margin-left: 10%;
    margin-right: 5%;
    padding: 16px;
    & + .pickup-box {
      margin-left: 5%;
      margin-right: 10%;
    }
  }

  @media (max-width: 767px) {
    .pickup-box-outer {
      padding-left: 10px;
      padding-right: 10px;
    }
    .pickup-box {
      max-width: 480px;
      width: 90%;
      float: none;
      margin-left: auto;
      margin-right: auto;
      & + .pickup-box {
        margin-top: 60px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .pickup-image-box {
    margin-top: -16px;
    margin-left: -16px;
    margin-right: -16px;
    height: 180px;
  }
  .pickup-title, .pickup-year, .pickup-tags {
    text-align: center;
  }
  .pickup-title {
    font-size: 2.2rem;
  }

  .common-more-box {
    text-align: center;
    margin-top: 3em;
    margin-bottom: 1em;
    .more-link {
      display: block;
      max-width: 300px;
      width: 80%;
      margin: 0 auto;
      padding: 0.5em;
      color: #000;
      border: 1px solid #000;
      background-color: transparent;
      transition: background-color 0.3s;
      &:hover {
        text-decoration: none;
        color: #fff;
        background-color: #000;
      }
    }
  }

  .common-content-title {
    margin-top: -28px;
    img {
      display: block;
    }
    &.contact-content-title {
      background-color: #fff0f1;
    }
  }

  .about-content-box,
  .contact-content-box {
    margin-top: -13px;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }

  .about-content-box {
    background-color: #fff0f1;
    padding-bottom: 100px;
  }

  .contact-content-box {
    background-color: #f3fee7;
    padding-bottom: 100px;
  }

  .common-article-title {
    margin-top: 0;
    font-size: 1.4rem;
    font-weight: bold;
  }
</style>
