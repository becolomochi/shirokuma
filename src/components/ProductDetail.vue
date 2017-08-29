<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="">{{ year }}年</div>
    <div class="">{{ text }}</div>
    <div class="">{{ tag }}</div>
  </div>
</template>

<script>
  export default {
    title: 'detail',
    description: 'べこ（becolomochi）の作品内容',
    data () {
      return {
        title: 'title',
        year: '2017',
        text: '内容内容内容内容内容内容内容内容内容<br>内容内容内容',
        tag: ['タグ1', 'タグ2']
      }
    }
  }
</script>
