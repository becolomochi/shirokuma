<template lang="pug">
  div
    nav.breadcrumb-nav
      ul
        li
          router-link(to="/") Home
        li
          router-link(to="/works") Works
    article.article
      h1.headline.page_headline(v-cloak) {{ filteredData.title }}
      div(v-for="p in filteredData.picture" v-if="p.id === '1'")
        img(:src="p.path" alt="")
      .works_detail-detail
        p(v-cloak) {{ filteredData.text }}
        p(v-cloak) 制作年：{{ filteredData.year }}
        p(v-cloak) {{ filteredData.role }}
        p(v-cloak)
          a(:href="filteredData.url" target="_blank") {{ filteredData.urlTitle }}
      div(v-for="p in filteredData.picture" v-if="p.id !== '1'")
        img(:src="p.path" alt="")
</template>

<script>
  export default {
    props: ['data'],
    mounted() {
      document.title = this.filteredData.title + '- becolomochi\'s portfolio'

      let meta = document.getElementsByTagName('meta')
      for (var i = 0; i < meta.length; i++) {
        if (meta[i].name.toLowerCase() == 'description') {
          meta[i].content = 'becolomochiが作成した ' + this.filteredData.title + ' のページです'
        }
      }
    },
    computed: {
      filteredData: function () {
        var url = window.location.protocol+ '//' + window.location.host + '/works/'
        var matchData = this.data.filter(function(item, index){
          if (item.slug === window.location.href.replace(url, '')) return true;
        })
        return matchData[0]
      }
    }
  }
</script>

<style lang="scss">
  .breadcrumb-nav {
    font-size: 1.2rem;
    text-align: left;
    li {
      display: inline-block;
      & + li {
        &::before {
          content: ' / ';
        }
      }
    }
  }
</style>
