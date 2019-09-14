<template lang="pug">
  .top
    .top-wrapper-header
      img(src="../assets/img/img_top_catch.svg" alt="あたたかくて やさしい、しなやかなコミュニケーションを").img-top-catch
    section.top_works
      .top_works-inner
        h2.headline Works
        .works
          div(v-for="d in data").works_box
            router-link(:to="'/works/' + d.slug").common_link-box
              .common_thumb.effect_img-filter(v-for="p in d.picture" v-if="p.id === '1'")
                img(:src="p.path" width="" height="" alt="")
              div.works_name(v-cloak) {{ d.title }}
      .common_more
        router-link.common_more-link(to="/works") もっと見る

    section.top_about
      .section_inner
        h2.headline About
        .top_about-inner
          .about_text
            h3.about_name べこ
              small.about_small beco
            div.about_role Designer / Frontend developer / Illustrator
            div.about_sns
              a(href="https://twitter.com/becolomochi")
                i.fa.fa-twitter
                | Twitter
              a(href="https://github.com/becolomochi")
                i.fa.fa-github
                | GitHub
              a(href="https://becolomochi.tumblr.com")
                i.fa.fa-tumblr
                | Tumblr
            div.about_other
              router-link(to="/about") そのほか
          .about_thumb
            img(src="../assets/img/icon1.png" width="120" height="120" alt="icon1")
            img(src="../assets/img/icon2.jpg" width="120" height="120" alt="icon1")

    section.top_contact
      .section_inner
        h2.headline Contact
        .common_text.top_contact-inner
          router-link(to="/contact") お問い合わせフォーム
</template>

<script>
  export default {
    name: 'top',
    title: 'Top',
    description: 'べこ（becolomochi）のポートフォリオサイト',
    props: ['data']
  }

</script>
