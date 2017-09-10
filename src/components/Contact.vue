<template>
  <div class="wrapper">
    <main>
      <form action="https://script.google.com/macros/s/AKfycbwnF5oozNN5mgFhDtE252daSjJMPZULVLywV2bJmv82t3Y3U7PC/exec" class="form-box">
        <input name="SPREADSHEET_ID" type="hidden" value="1RTlomP3hXQZhHw3arZfng3dJeGJAnz3EcreOeYM1npA">
        <input name="SHEET_NAME" type="hidden" value="フォームデータ">

        <h1>Contact お問い合わせ</h1>

        <div class="form-item-box">
          <label class="control-label">Mail</label>
          <div class="">
            <input type="email" class="form-control" name="your-email" placeholder="your@email.com">
          </div>
        </div>
        <div class="form-item-box">
          <label class="control-label">お名前</label>
          <div class="">
            <input type="text" class="form-control" name="your-name" placeholder="Your Name">
          </div>
        </div>
        <div class="form-item-box">
          <label class="control-label">メッセージ <span class="label-required">必須</span></label>
          <div class="">
            <textarea class="form-control" name="your-message" placeholder="Message" rows="8" required id="message"></textarea>
          </div>
        </div>
        <div class="form-item-box">
          <div class="form-button-box">
            <button class="form-button" type="submit" v-on:click="sendMessage()">Submit</button>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
  export default {
    title: 'Contact',
    description: 'べこ（becolomochi）へのお問い合わせページ',
    methods: {
      sendMessage() {
        var form = $('form');
        var submitBtn = form.find('button[type=submit]');
        if(getElementById("message") ==="") {
          alert("メッセージを入力してください");
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
