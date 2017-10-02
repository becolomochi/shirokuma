<template>
  <div class="top">
    <div class="top-wrapper-header">
      <img src="../assets/img/img_top_catch.svg" alt="暖かくて優しいしなやかなコミュニケーションを" class="img-top-catch">
    </div>
    <section class="pickup-box-outer">
      <div class="pickup-box-inner">
        <article class="pickup-box" v-for="d in data">
          <div class="pickup-image-box common-thumb-box" v-for="p in d.picture" v-if="p.id === '1'">
            <router-link :to="'/product/' + d.slug"><img :src="p.path" width="" height="" alt="" class="pickup-image common-thumb-image"></router-link>
          </div>
          <h1 class="pickup-title" v-cloak><router-link :to="'/product/' + d.slug">{{ d.title }}</router-link></h1>
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
          <h1 class="common-article-title">About becolomochi</h1>
          <div class="top-profile-box">
            <div class="profile-thumb-box">
              <img src="../assets/img/icon1.png" width="120" height="120" alt="icon1" class="about-image">
              <img src="../assets/img/icon2.jpg" width="120" height="120" alt="icon1" class="about-image">
            </div>
            <div class="common-text">
              <h2 class="profile-title">べこ beco</h2>
              <ul class="profile-lists top-profile-lists">
              <li>DTP6年。うち、後半3年は WordPress サイトの設定・コーディング</li>
              <li>転職（正確には部署異動）Webデザイン・コーダー3年</li>
              <li>京都造形芸術大学 通信教育部 情報デザインコース卒業</li>
              </ul>
              <p class="profile-more-link"><router-link to="/about">くわしく見る</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </article>

    <article class="common-box-outer contact-box">
      <div class="common-box-inner">
        <h2 class="common-content-title contact-content-title"><img src="../assets/img/title_img_contact.svg" alt="contact" class="common-content-title" width="214"></h2>
        <div class="contact-content-box">
          <h1 class="common-article-title">お問い合わせ</h1>
          <div class="common-text top-contact-box">
            <p>Twitter</p>
            <p>フォーム</p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'top',
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
    background-color: #ffeec9;
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
    background-color: #fabcb1;
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
</style>
