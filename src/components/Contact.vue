<template>
  <div class="wrapper">
    <header>
      <h1>becolomochi's portfolio</h1>
    </header>
    <navigation></navigation>
    <main>
      <form action="https://script.google.com/macros/s/AKfycbwnF5oozNN5mgFhDtE252daSjJMPZULVLywV2bJmv82t3Y3U7PC/exec" class="form-horizontal">
        <input name="SPREADSHEET_ID" type="hidden" value="1RTlomP3hXQZhHw3arZfng3dJeGJAnz3EcreOeYM1npA" /><input name="SHEET_NAME" type="hidden" value="フォームデータ" />
        <div class="form-group">
          <label class="col-md-2 control-label">Mail</label>
          <div class="col-md-10">
            <input type="email" class="form-control" name="your-email" placeholder="your@email.com">
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 control-label">お名前</label>
          <div class="col-md-10">
            <input type="text" class="form-control" name="your-name" placeholder="Your Name">
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 control-label">メッセージ</label>
          <div class="col-md-10">
            <textarea class="form-control" name="your-message" placeholder="Message" required></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-offset-2 col-md-10">
            <button class="btn btn-primary" type="submit" v-on:click="sendMessage()">送信</button>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
  import Navigation from '@/components/parts/Navigation'
  export default {
    title: 'Contact',
    description: 'べこ（becolomochi）へのお問い合わせページ',
    components: {
      navigation: Navigation
    },
    methods: {
      sendMessage() {
        var form = $('form');
        var submitBtn = form.find('button[type=submit]');
        $.ajax({
          url: form.attr('action'),
          dataType: 'jsonp',
          data: form.serialize(),
          beforeSend: function() {
            return submitBtn.prop('disabled', true);
          },
          complete: function() {
            return submitBtn.prop('disabled', false);
          },
          jsonpCallback: 'console.log',
          error: function(response) {
            return console.log(response);
          }
        });
      }
    },
    mounted() {
      var required_tag, requires;
      required_tag = '<span class="label label-danger">必須</span>';
      requires = $('form [required]').each(function(i, elm) {
        return $(elm).before(required_tag);
      });
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
