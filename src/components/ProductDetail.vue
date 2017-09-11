<template>
  <div>
    <nav class="breadcrumb-nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/product">Product</router-link></li>
      </ul>
    </nav>
    <article class="product-box">
      <h1 class="product-title" v-cloak>{{ filteredData.title }}</h1>
      <div v-for="p in filteredData.picture" v-if="p.id === '1'">
        <img :src="p.path" width="" height="" alt="" class="product-image">
      </div>
      <p class="product-description" v-cloak>{{ filteredData.text }}</p>
      <p class="product-year" v-cloak>制作年：{{ filteredData.year }}</p>
      <div class="product-tags">
        <ul>
          <li v-for="t in filteredData.tags"><a href="#" class="tag" v-cloak>{{ t }}</a></li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
  import myData from '../../static/data.json'
  export default {
    title: '作品タイトル',
    description: 'べこ（becolomochi）の作品内容',
    data () {
      return {
        myData: myData
      }
    },
    computed: {
      filteredData: function () {
        var url = window.location.protocol+ '//' + window.location.host + '/product/'
        var matchData = this.myData.filter(function(item, index){
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
