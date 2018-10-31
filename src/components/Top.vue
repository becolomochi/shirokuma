<template lang="pug">
  .top
    .top-wrapper-header
      img(src="../assets/img/img_top_catch.svg" alt="あたたかくて やさしい、しなやかなコミュニケーションを").img-top-catch
    section.pickup-box-outer
      .pickup-box-inner
        article(v-for="d in data").pickup-box
          .pickup-image-box.common-thumb-box(v-for="p in d.picture" v-if="p.id === '1'")
            router-link(:to="'/works/' + d.slug")
              img.pickup-image.common-thumb-image(:src="p.path" width="" height="" alt="")
          h1.pickup-title(v-cloak)
            router-link(:to="'/works/' + d.slug") {{ d.title }}
      .common-more-box
        router-link.more-link(to="/works") もっと見る

    article.common-box-outer.about-box
      .common-box-inner
        h2.common-content-title
          img.common-content-title(src="../assets/img/title_img_about.svg" alt="about" width="258")
        .about-content-box
          h1.common-article-title About becolomochi
          .top-profile-box
            .profile-thumb-box
              img.about-image(src="../assets/img/icon1.png" width="120" height="120" alt="icon1")
              img.about-image(src="../assets/img/icon2.jpg" width="120" height="120" alt="icon1")
            .common-text
              h2.profile-title べこ beco
              ul.profile-lists.top-profile-lists
                li Front-end developer
                li Illustrator
                li 学ぶことや作ることが好きです。
                li 田舎生まれ・田舎暮らし。
              p.profile-more-link
                router-link(to="/about") くわしく見る

    article.common-box-outer.contact-box
      .common-box-inner
        h2.common-content-title.contact-content-title
          img.common-content-title(src="../assets/img/title_img_contact.svg" alt="contact" width="214")
        .contact-content-box
          h1.common-article-title お問い合わせ
          .common-text.top-contact-box
            p
              router-link.top-contact-link(to="/contact") お問い合わせフォーム
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
    padding-bottom: 140px;
    background-color: #ffeec9;
    &:before {
      background:url(../assets/img/title_bg_about.svg) repeat-x;
    }
    .common-content-title {
      position: absolute;
      top: -68px;
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
      top: -83px;
      z-index: -1;
    }
  }
}
</style>
