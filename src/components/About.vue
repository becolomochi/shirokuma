<template lang="pug">
  .wrapper
    main
      h1 About becolomochi べころもちとは
      h2 べこ beco

      .profile-thumb-box
        img(src="../assets/img/icon1.png" width="120" height="120" alt="icon1").about-image
        img(src="../assets/img/icon2.jpg" width="120" height="120" alt="icon1").about-image

      h3 経歴

      ul.profile-lists
        li DTP6年。うち、後半3年は WordPress サイトの設定・コーディング
        li 転職（正確には部署異動）Webデザイン・コーダー3年
        li システムの UI 改修、LP のデザイン・コーディング、ロゴデザインなどをしていました。
        li 京都造形芸術大学 通信教育部 情報デザインコース卒業

      h3 作業環境・できること

      ul.profile-lists
        li エディタは NetBeans や Brackets を使っています。
        li 基本的な HTML5/CSS3 が書けます。Less と SCSS を使っています。
        li Gulp でコンパイル・圧縮をします。
        li 最近は JS に興味があってよく触っています。
        li このサイトは Vue.js で作りました。
        li ターミナル操作で Git を使っています。

      h3 仕事観

      ul.profile-lists
        li 会社員をしながら大学の制作課題をこなしていたこともあり、スケジュールにあわせた作業進行が得意です。
        li 課題に対してどう改善するかを考えて行動することができます。
        li 情報収集は欠かしません（はてブのテクノロジーカテゴリ・Twitter）
        li Web サービスが好きで、特に Slack のテキスト／Emoji コミュニケーションが好きです。
        li 本をおすすめされればわりとすぐ買ってしまうほうです。
        li 少人数のチームで実力を出しやすいです。

      h3 性格

      ul.profile-lists
        li 内向的で、家でパソコンを触っているのが好きです。
        li ヘコミやすくメンタルが弱めですが、内省の時間を多めに取ることでポジティブになれます。
        li 田舎産まれ・田舎暮らし。
        li 学ぶことや作ることが好きです。

      h3 好きなもの

      ul.profile-lists
        li ダム
        li 生き物（特に犬、猫、ジンベエザメ、アロワナ）
        li 自然
        li ゆるキャラ
        li 音楽（ジャズ・テクノ・ポップス）

      p.profile-paragraph
        |ダムは自然との調和を重視します。ダムは人の営みを支える存在です。出かけて、単にダムカレーを食べダムカードをもらうだけではダメです。何故その場所にあるのかを学び、その地域の歴史を知ることで自分が住んでいる土地のことを愛する必要があると考えているためです。
        <br>
        |大学の卒業制作でダム写真集を作り、奨励賞と同窓会賞を受賞しました。</p>
        <br>
        |ダム女子という呼ばれ方もされますが正直嫌いです。好きなものに己の性別は関係ありません。

      p.profile-paragraph
        |何かと何かを比較して共通点を見つけることが好きです。例えば、アニメを観るにしても主題歌と作った人が気になります（制作会社・監督・脚本・声優）。別の作品と比較したいためです。
</template>

<script>
  export default {
    title: 'About becolomochi',
    description: 'Webデザイナー／コーダーの、べこ（becolomochi）の経歴・仕事観・性格・好きなものについて書いたページです。'
  }
</script>
