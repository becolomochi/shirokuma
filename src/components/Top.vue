<template lang="pug">
  .top
    .top_catch
      .top_catch-inner
        div.character
          img(src="../assets/img/txt_top_catch1.png" src-set="../assets/img/txt_top_catch1.png, ../assets/img/txt_top_catch1@2x.png 2x, ../assets/img/txt_top_catch1@3x.png 3x" alt="あたたかくて")
        div.character
          img(src="../assets/img/txt_top_catch2.png" src-set="../assets/img/txt_top_catch2.png, ../assets/img/txt_top_catch2@2x.png 2x, ../assets/img/txt_top_catch2@3x.png 3x" alt="やさしい")
        div.character
          img(src="../assets/img/txt_top_catch3.png" src-set="../assets/img/txt_top_catch3.png, ../assets/img/txt_top_catch3@2x.png 2x, ../assets/img/txt_top_catch3@3x.png 3x" alt="しなやかなコミュニケーションを")
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
            img(src="../assets/img/icon1.png" alt="icon1")
            img(src="../assets/img/icon2.jpg" alt="icon2")

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
