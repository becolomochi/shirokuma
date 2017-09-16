<template>
  <div class="hello">
    <div class="wrapper-header">
    </div>
    <section class="pickup-box-outer">
      <div class="pickup-box-inner">
        <article class="pickup-box" v-for="d in data">
          <div class="pickup-image-box common-thumb-box" v-for="p in d.picture" v-if="p.id === '1'">
            <router-link :to="'/product/' + d.slug"><img :src="p.path" width="" height="" alt="" class="pickup-image common-thumb-image"></router-link>
          </div>
          <h1 class="pickup-title" v-cloak><router-link :to="'/product/' + d.slug">{{ d.title }}</router-link></h1>
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

    <article class="common-box-outer about-box">
      <div class="common-box-inner">
        <h2 class="common-content-title"><img src="../assets/img/title_img_about.svg" alt="about" class="common-content-title" width="258"></h2>
        <div class="about-content-box">
          <h1 class="common-article-title">このサイトについて</h1>
          <div class="common-text">
            <p>内容内容内容内容内容内容内容</p>
          </div>
        </div>
        <div class="about-thumb-box">
          <img src="" width="" height="" alt="" class="about-image">
        </div>
      </div>
    </article>

    <article class="common-box-outer contact-box">
      <div class="common-box-inner">
        <h2 class="common-content-title contact-content-title"><img src="../assets/img/title_img_contact.svg" alt="contact" class="common-content-title" width="214"></h2>
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
      </div>
    </article>
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
    max-width: 1200px;
    margin: 100px auto;
  }

  /** Pickup */
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
  .pickup-title {
    font-size: 1.8rem;
  }


  /** common contents */
  .common-box-outer {
    position: relative;
    &:before {
      position: absolute;
      top: -20px;
      content: '';
      display: block;
      width: 100%;
      height: 30px;
    }
    &.about-box {
      margin-top: 200px;
      padding-bottom: 200px;
      background-color: #f7f7f7;
      &:before {
        background:url(../assets/img/title_bg_about.svg) repeat-x;
      }
      .common-content-title {
        position: absolute;
        top: -53px;
        z-index: -1;
      }
    }
    &.contact-box {
      z-index: 1;
      background-color: #f5f5f5;
      &:before {
        background:url(../assets/img/title_bg_contact.svg) repeat-x;
      }
      .common-content-title {
        position: absolute;
        top: -63px;
        z-index: -1;
      }
    }
  }
  .common-box-inner {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .about-content-box,
  .contact-content-box {
    position: relative;
    margin-top: -13px;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    &:before {
      position: absolute;
      top: -20px;
      content: '';
      display: block;
      width: 100%;
      height: 30px;
    }
  }

  .about-content-box {
    background-color: #f7f7f7;
    padding-bottom: 100px;
  }

  .contact-content-box {
    background-color: #f5f5f5;
    padding-bottom: 100px;
  }

  .common-article-title {
    margin-top: 0;
    font-size: 1.4rem;
    font-weight: bold;
  }
</style>
