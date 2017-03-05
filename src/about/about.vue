<template lang="pug">
div#about
  global-menu.menu-component
  div.title-block
    div.title-under-line
      p.title {{ pageTitle }}
  p.hello-okinawa Hello Okinawa!
  div.about-description
    p.about-line 「もっと身近におきなわを」をコンセプトに沖縄に関する情報を情報発信するサイト。
    p.about-line BLOGと旅INFOというコンテンツを通して、沖縄の暮らしと土地を感じることができるよう制作しています。
    p.about-line みなさんにとって沖縄をより身近に、そして、より好きになってもらえれば幸いです。
  div.about-members
    p.members-title MEMBER
    div.members
      member.member-component(v-for="member in members"
        v-bind:id="member.id"
        v-bind:name="member.name"
        v-bind:image="member.image"
        v-bind:work="member.work"
        v-bind:description="member.description"
        v-bind:sns="member.sns")
  div.fotter
    p.fotter-ho-title HO!
    p.fotter-ho-sub-title もっと身近におきなわを


</template>

<script>
import menu from '../common/menu.vue'
import member from './member.vue'

export default {
  name: 'about',
  components: {
    'global-menu': menu,
    'member': member
  },
  data () {
    return {
      pageTitle: 'ABOUT',
      members: [
        {
          id: 1,
          name: 'ふみふみ',
          image: '/dist/atufumi.jpg',
          work: 'bloger',
          description: '沖縄を愛し、沖繩に舞い戻ってきた男。普段は名護を中心に行動している。  趣味は美味しいお店巡るのと、写真。  嫌いなものは、KP女子だ。',
          sns: {
            twitter: 'true',
            instagram: 'true',
            facebook: 'true'
          }
        },
        {
          id: 2,
          name: 'ハマヒロ',
          image: '/dist/masahiro.jpg',
          work: 'bloger',
          description: 'ハマケンを目指す22歳。主に沖縄の名護で活動している。好きなのはおしゃれなもの。趣味はカメラとハマケン。',
          sns: {
            twitter: 'true',
            instagram: 'true'
          }
        },
        {
          id: 3,
          name: 'パウエル',
          image: '/dist/ryusuke.jpg',
          work: 'bloger',
          description: '沖縄で働いている人間。沖縄の勝ち組企業で働いている。顔もいいのでモテるが、残念ながら長い付き合いの彼女がいる。彼に弱点はない。',
          sns: {
            twitter: 'true',
            instagram: 'true',
            facebook: 'true'
          }
        },
        {
          id: 4,
          name: 'fei',
          image: '/dist/fei.jpg',
          work: 'engineer',
          description: 'エンジニアをしている人間。唯一東京在住の人間。デザインとエンジニアの力を合わせていいものを作りたいと日々何かしらやっている。このサイトの制作を担当。',
          sns: {
            twitter: 'true'
          }
        }
      ]
    }
  },
  props: [],
  methods: {
    __method__: function (event) {

    }
  }
}
</script>

<style>
:root {
  --main-color: #99CDFF;
  --title-color: #575757;
  --fotter-color: #95989A;
  --main-font: avenir;
  --sub-font: "Noto Sans Japanese";
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
  }
}


#about {
  text-align: center;
  -webkit-font-smoothing: antialiased;
}

.title-block {
  flex:1;
  position: relative;
  margin: 125px auto 0;
  width: 150px;
  text-align: center;
  @apply --hover-hand;
  & .title-under-line {
    position: relative;
    height: 10px;
    width: 95px;
    background: var(--main-color);
  }
  & .title {
      position: absolute;
      margin: 0;
      font-size: 26px;
      font-family: var(--main-font);
      font-weight: 400;
      color: var(--title-color);
      letter-spacing: 1.5px;
      top: -23.5px;
      left: 1.5px;
  }
}

.hello-okinawa {
  color: var(--main-color);
  font-family: susan;
  font-size: 105px;
  letter-spacing: 10px;
  margin: 0;
  margin-top: 150px;
  text-align: center;
}

.about-description {
  margin: 0;
  margin-top: 40px;
  & .about-line {
    color: var(--title-color);
    font-family: var(--sub-font);
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 2px;
    margin: 0;
    margin-top: 16px;
  }
}

.about-members {
  margin: 0;
  margin-top: 150px;
  & .members-title {
    color: var(--title-color);
    font-family: var(--main-font);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;
  }
  & .members {
    padding-bottom: 50px;
    margin: 0;
    margin-top: 65px;
    & .member-component {
      margin-bottom: 100px;
    }
  }
}

.menu-component {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

/*footer*/
.fotter {
  display: flex;
  position: absolute;
  left: 130px;
}

.fotter-ho-title {
  font-family: susan;
  font-size: 32px;
  letter-spacing: 4px;
  color: var(--fotter-color);
  padding-top: 0;
  padding-bottom: 25px;
  margin: 0;
  margin-right: 5px;
}

.fotter-ho-sub-title {
  font-family: var(--sub-font);
  font-weight: 300;
  font-size: 10px;
  letter-spacing: 1px;
  color: var(--fotter-color);
}
</style>
