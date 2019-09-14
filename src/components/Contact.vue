<template lang="pug">
  .page
    h1.headline.page_headline Contact 
      .sub お問い合わせ
    form(action="https://script.google.com/macros/s/AKfycbwnF5oozNN5mgFhDtE252daSjJMPZULVLywV2bJmv82t3Y3U7PC/exec")
      input(name="SPREADSHEET_ID" type="hidden" value="1RTlomP3hXQZhHw3arZfng3dJeGJAnz3EcreOeYM1npA")
      input(name="SHEET_NAME" type="hidden" value="フォームデータ")
      .form
        label.form__label Mail
        input(type="email" name="your-email" placeholder="your@email.com").wide
      .form
        label.form__label お名前
        input(type="text" name="your-name" placeholder="Your Name").wide
      .form
        label.form__label メッセージ
          span.label-required 必須
        textarea(name="your-message" placeholder="Message" rows="8" required)#message
      .form.text-center
        button(type="submit" v-on:click="sendMessage()").form_submit Submit
</template>

<script>
  export default {
    title: 'Contact',
    description: 'べこ（becolomochi）へのお問い合わせページ',
    methods: {
      sendMessage() {
        var form = $('form');
        var submitBtn = form.find('button[type=submit]');
        if(getElementById('message') === '') {
          alert('メッセージを入力してください');
          return false;
        }
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
    }
  }
</script>
