<template lang="pug">
  .top
    .top-wrapper-header
      img(src="../assets/img/img_top_catch.svg" alt="あたたかくて やさしい、しなやかなコミュニケーションを").img-top-catch
    section.pickup-box-outer
      .pickup-box-inner
        h2.top_box-title Works
        article(v-for="d in data").pickup-box
          .pickup-image-box.common-thumb-box(v-for="p in d.picture" v-if="p.id === '1'")
            router-link(:to="'/works/' + d.slug")
              img.pickup-image.common-thumb-image(:src="p.path" width="" height="" alt="")
          h1.pickup-title(v-cloak)
            router-link(:to="'/works/' + d.slug") {{ d.title }}
      .common-more-box
        router-link.more-link(to="/works") もっと見る

    section.top_box.about-box
      .common-box-inner
        h2.top_box-title About
        .about-content-box
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

    section.top_box.contact-box
      .common-box-inner
        h2.top_box-title Contact
        .contact-content-box
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
