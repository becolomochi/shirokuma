<template>
  <div class="hello">
    <div class="wrapper-header">
    </div>
    <div class="wrapper">
      <header>
        <h1>becolomochi's portfolio</h1>
      </header>
      <navigation></navigation>
      <img src="/#/assets/logo_shirokuma.svg">

      <section class="pickup-box-outer">

        <article class="pickup-box">
          <img src="" width="" height="" alt="" class="pickup-image">
          <h1 class="pickup-title">作品名</h1>
          <p class="pickup-description">内容内容内容内容内容</p>
          <div class="pickup-tags">
            <a href="#" class="tag">タグ1</a>
          </div>
        </article>

        <article class="post-box">
          <img src="" width="" height="" alt="" class="post-image">
          <h1 class="post-title">作品名</h1>
          <p class="post-description">内容内容内容内容内容</p>
          <div class="post-tags">
            <a href="#" class="tag">タグ1</a>
          </div>
        </article>
      </section>

      <section>
        <div class="post-box-outer">
          <article class="post-box">
            <img src="" width="" height="" alt="" class="post-image">
            <h1 class="post-title">作品名</h1>
            <p class="post-description">内容内容内容内容内容</p>
            <div class="post-tags">
              <a href="#" class="tag">タグ1</a>
            </div>
          </article>

          <article class="post-box">
            <img src="" width="" height="" alt="" class="post-image">
            <h1 class="post-title">作品名</h1>
            <p class="post-description">内容内容内容内容内容</p>
            <div class="post-tags">
              <a href="#" class="tag">タグ1</a>
            </div>
          </article>

          <article class="post-box">
            <img src="" width="" height="" alt="" class="post-image">
            <h1 class="post-title">作品名</h1>
            <p class="post-description">内容内容内容内容内容</p>
            <div class="post-tags">
              <a href="#" class="tag">タグ1</a>
            </div>
          </article>
        </div>
        <div class="common-more-box">
          <a class="">もっと見る</a>
        </div>
      </section>

      <article class="about-box-outer">
        <div class="about-content-box">
          <h1 class="about-title">About このサイトについて</h1>
          <div class="about-text">
            <p>内容内容内容内容内容内容内容</p>
          </div>
        </div>
        <div class="about-thumb-box">
          <img src="" width="" height="" alt="" class="about-image">
        </div>
      </article>

      <article class="about-box-outer">
        <div class="about-content-box">
          <h1 class="about-title">Contact お問い合わせ</h1>
          <div class="about-text">
            <p>Twitter</p>
            <p>フォーム</p>
          </div>
        </div>
        <div class="about-thumb-box">
          <img src="" width="" height="" alt="" class="about-image">
        </div>
      </article>

    </div>
    <navigation></navigation>
    <footer>
      <div class="copyright-box">© 2017 beco</div>
    </footer>
  </div>
</template>

<script>
  import Navigation from '@/components/parts/Navigation'
  export default {
    name: 'hello',
    components: {
      navigation: Navigation
    }
    //  data () {
    //    return {
    //      msg: 'becolomochi\' s portfolio',
    //    }
    //  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section + section {
    margin-bottom: 100px;
  }
  .pickup-box-outer {
    margin-bottom: 100px;
  }

  .pickup-box-outer::after {
    content: '';
    display: block;
    clear: both;
  }

  .pickup-box {
    width: 50%;
    float: left;
  }

  .post-box-outer {
    margin-bottom: 30px;
  }

  .post-box-outer::after {
    content: '';
    display: block;
    clear: both;
  }

  .post-box {
    width: 33.3%;
    float: left;
  }

</style>
