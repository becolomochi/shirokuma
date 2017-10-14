<template>
  <div>
    <nav class="breadcrumb-nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/works">Works</router-link></li>
      </ul>
    </nav>
    <article class="product-box">
      <h1 class="product-title" v-cloak>{{ filteredData.title }}</h1>
      <div v-for="p in filteredData.picture" v-if="p.id === '1'">
        <img :src="p.path" width="" height="" alt="" class="product-image">
      </div>
      <p class="product-description" v-cloak>{{ filteredData.text }}</p>
      <p class="product-year" v-cloak>制作年：{{ filteredData.year }}</p>
      <p class="" v-cloak>{{ filteredData.role }}</p>
      <p class="" v-cloak><a :href="filteredData.url" target="_blank">{{ filteredData.urlTitle }}</a></p>
      <div v-for="p in filteredData.picture" v-if="p.id !== '1'">
        <img :src="p.path" width="" height="" alt="" class="product-image">
      </div>
    </article>
  </div>
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
