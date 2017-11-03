<template lang="pug">
  .wrapper
    main
      form(action="https://script.google.com/macros/s/AKfycbwnF5oozNN5mgFhDtE252daSjJMPZULVLywV2bJmv82t3Y3U7PC/exec").form-box
        input(name="SPREADSHEET_ID" type="hidden" value="1RTlomP3hXQZhHw3arZfng3dJeGJAnz3EcreOeYM1npA")
        input(name="SHEET_NAME" type="hidden" value="フォームデータ")

        h1 Contact お問い合わせ

        .form-item-box
          label.control-label Mail
          div
            input(type="email" name="your-email" placeholder="your@email.com").form-control
        .form-item-box
          label.control-label お名前
          div
            input(type="text" name="your-name" placeholder="Your Name").form-control
        .form-item-box
          label.control-label メッセージ
            span.label-required 必須
          div
            textarea(name="your-message" placeholder="Message" rows="8" required)#message.form-control
        .form-item-box
          .form-button-box
            button(type="submit" v-on:click="sendMessage()").form-button Submit
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .form-box {
    max-width: 800px;
    margin: 0 auto;
  }
  .form-control {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1.6rem;
    padding: 4px 8px;
  }
  .form-item-box {
    & + .form-item-box {
      margin-top: 20px;
    }
  }
  .control-label {
    font-size: 1.4rem;
    font-weight: bold;
  }
  .label-required {
    font-size: 1.2rem;
    color: #f44336;
  }
  .form-button {
    cursor: pointer;
    display: block;
    max-width: 400px;
    width: 80%;
    margin: 20px auto;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1.6rem;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 2px 0 #ddd;
    &:hover {
      background-color: #f7f7f7;
    }
  }

</style>
