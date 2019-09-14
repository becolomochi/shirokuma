<template lang="pug">
  .works_top
    h1.headline.page_headline Works
      .sub 作品紹介
    ul.works_list
      li.works_item(v-for="d in data")
        router-link(:to="'/works/' + d.slug").common_link-box
          div(v-for="p in d.picture" v-if="p.id === '1'").works_thumb
            img(:src="p.path" alt="イメージ")
          h2(v-cloak).works_list-title {{ d.title }}
        .works_list-detail
          p(v-cloak).works_description {{ d.text }}
          p(v-cloak).works_year 制作年：{{ d.year }}
  </template>

<script>
  export default {
    title: 'Works',
    description: 'べこ（becolomochi）の作品一覧',
    props: ['data']
  }
</script>
