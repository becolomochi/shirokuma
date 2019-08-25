<template lang="pug">
  div
    nav.breadcrumb-nav
      ul
        li
          router-link(to="/") Home
        li
          router-link(to="/works") Works
    article.product_box
      h1(v-cloak).product_title {{ filteredData.title }}
      div(v-for="p in filteredData.picture" v-if="p.id === '1'")
        img(:src="p.path" width="" height="" alt="").product_image
      p(v-cloak).product_description {{ filteredData.text }}
      p(v-cloak).product_year 制作年：{{ filteredData.year }}
      p(v-cloak) {{ filteredData.role }}
      p(v-cloak)
        a(:href="filteredData.url" target="_blank") {{ filteredData.urlTitle }}
      div(v-for="p in filteredData.picture" v-if="p.id !== '1'")
        img(:src="p.path" width="" height="" alt="").product_image
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
