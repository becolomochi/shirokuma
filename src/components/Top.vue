<template lang="pug">
  .top
    .top-wrapper-header
      img(src="../assets/img/img_top_catch.svg" alt="あたたかくて やさしい、しなやかなコミュニケーションを").img-top-catch
    section.top_pickup_box-outer
      .top_pickup_box-inner
        h2.top_box-title Works
        .pickup
          div(v-for="d in data").pickup_box
            .pickup_image-box.common_thumb-box(v-for="p in d.picture" v-if="p.id === '1'")
              router-link(:to="'/works/' + d.slug")
                img.pickup_image.common_thumb-image(:src="p.path" width="" height="" alt="")
            h3.pickup_title(v-cloak)
              router-link(:to="'/works/' + d.slug") {{ d.title }}
      .common_more-box
        router-link.more-link(to="/works") もっと見る

    section.top_box.about_box
      .common_box-inner
        h2.top_box-title About
        .about_content-box
          .top-profile_box
            .profile_thumb-box
              img.about_image(src="../assets/img/icon1.png" width="120" height="120" alt="icon1")
              img.about_image(src="../assets/img/icon2.jpg" width="120" height="120" alt="icon1")
            .common_text
              h2.profile_title べこ beco
              ul.profile_lists.top-profile_lists
                li Front-end developer
                li Illustrator
                li 学ぶことや作ることが好きです。
                li 田舎生まれ・田舎暮らし。
              p.profile_more-link
                router-link(to="/about") くわしく見る

    section.top_box.contact_box
      .common_box-inner
        h2.top_box-title Contact
        .contact_content-box
          .common_text.top-contact_box
            p
              router-link.top-contact_link(to="/contact") お問い合わせフォーム
</template>

<script>
  export default {
    name: 'top',
    title: 'Top',
    description: 'べこ（becolomochi）のポートフォリオサイト',
    props: ['data']
  }

</script>
