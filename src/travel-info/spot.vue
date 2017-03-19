<template lang="pug">
div#spot
  div.close-button(v-on:click="closeSpot")
    i.fi-x
  div.scroll-hidden-wrapper
    div.spot-content(v-if="getSpot()")
      div.spot-title
        div.border
        p.name {{ spotDetail.name }}
      div.spot-info
        div.image
          img(v-bind:src="spotDetail.image")
        div.meta
          div.star-block
            i.fi-star(v-for="i in spotDetail.score")
          div.place
            p.label 住所
            p.value {{ spotDetail.place }}
          div.flex-wrapper
            div.stay-time
              p.label 滞在時間
              p.value {{ spotDetail.stayTime }}
            div.open-time
              p.label 営業時間
              p.value {{ spotDetail.openTime }}
          div.home-page
            p.label ホームページ
            a.value(v-bind:href="spotDetail.homePage") {{ spotDetail.homePage }}
      div.description
        p(v-for="line in spotDetail.description") {{ line }}
      div.association-articles
        p.association-label ASSOCIATION
        spot-association-article.spot-association-article-component(v-for="article in spotDetail.associationArticles"
          v-bind:id="article.id"
          v-bind:date="article.date"
          v-bind:title="article.title"
          v-bind:image="article.image"
          v-bind:tags="article.tags"
          v-bind:share="article.share")
</template>

<script>

import associationArticle from './spotAssocationArticle.vue'

export default {
  name: 'spot',
  props: [
    'spot'
  ],
  data () {
    return {
    }
  },
  methods: {
    closeSpot: function (event) {
      this.$emit('closeSpot');
    },
    getSpot: function (event) {
      let targetSpot = {
        id: this.spot.id,
        name: this.spot.name,
        score: this.spot.score,
        image: this.spot.image,
        place: '沖縄県国頭郡本部町石川424',
        stayTime: '約5時間',
        openTime: '08:30 ~ 17:00',
        homePage: 'https://churaumi.okinawa/',
        description: [
          '沖縄に来たら必ずは行っておきたい場所！',
          '水族館はもちろん、イルカショーや愛くるしいマナティなど、お楽しみはたくさん！',
          '美ら海水族館から見える伊江島たっちゅうも綺麗でいい景色です。'
        ],
        associationArticles: [
          {
            id: 1,
            date: '2016.12.08',
            title: '美ら海水族館を紹介するよ',
            image: '/dist/new-article-image.jpg',
            tags: [ '観光地紹介', '海' ],
            share: 120
          },
          {
            id: 1,
            date: '2016.11.11',
            title: 'ファイヤーファイヤー',
            image: '/dist/yagaji7.jpg',
            tags: [ 'アウトドア' ],
            share: 87
          }
        ]
      };
      this.spotDetail = targetSpot;
      return true;
    }
  },
  components: {
    'spot-association-article': associationArticle
  }
}
</script>

<style>
:root {
  --main-color: #99CDFF;
  --title-color: #575757;
  --close-button-color: #D0D0D0;
  --star-color: #B7D4E6;
  --label-color: #8E8E8E;
  --main-font: avenir;
  --sub-font: "Noto Sans Japanese";
  --map-background: #E2F2FC;
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
  }
}

#spot {
  background: white;
  border-radius: 3px;
  height: 550px;
  position: relative;
  width: 800px;
  & .close-button {
    background: var(--close-button-color);
    border-bottom-left-radius: 3px;
    border-top-right-radius: 3px;
    height: 35px;
    position: absolute;
    right: 0;
    top: 0;
    width: 80px;
    @apply --hover-hand;
    & .fi-x {
      color: white;
      font-size: 18px;
      position: absolute;
      top: 6px;
      left: 35px;
    }
  }
  & .spot-content {
    overflow: scroll;
    height: 510px;
    padding-left: 50px;
    padding-top: 40px;
    width: 765px;
    & .spot-title {
      display: flex;
      align-items: center;
      position: relative;
      text-align: left;
      & .border {
        background: var(--main-color);
        height: 30px;
        margin-right: 10px;
        width: 6px;
      }
      & .name {
        color: var(--title-color);
        font-family: var(--sub-font);
        font-size: 24px;
        font-weight: 300;
        letter-spacing: 1.5px;
        margin: 0;
      }
    }
    & .spot-info {
      display: flex;
      margin-top: 25px;
      & .image img {
        border-radius: 3px;
        height: 210px;
        margin-right: 25px;
        width: 320px;
      }
      & .meta {
        text-align: left;
        & .fi-star {
          color: var(--star-color);
          font-size: 25px;
          margin-right: 5px;
        }
        & .place {
          color: var(--title-color);
          font-family: var(--sub-font);
          letter-spacing: 1.5px;
          margin-top: 8px;
          & .label {
            color: var(--label-color);
            font-size: 14px;
            margin: 0;
          }
          & .value {
            font-size: 18px;
            font-weight: 300;
            margin: 0;
          }
        }
        & .flex-wrapper {
          display: flex;
          margin-top: 10px;
          & .stay-time {
            margin-right: 50px;
          }
        }
        & .home-page {
          margin-top: 10px;
          & .value {
            font-family: var(--main-font);
            letter-spacing: 1px;
            text-decoration: none;
          }
        }
      }
    }
    & .description {
      margin-top: 20px;
      text-align: left;
      & p {
        color: var(--title-color);
        font-family: var(--sub-font);
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 1.5px;
        margin: 0;
        margin-bottom: 1.5px;
      }
    }
    & .association-articles {
      padding-bottom: 50px;
      margin-top: 60px;
      text-align: left;
      & .association-label {
        color: var(--title-color);
        font-family: var(--main-font);
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        margin: 0;
        margin-bottom: 25px;
      }
      & .spot-association-article-component {
        margin-bottom: 20px;
      }
    }
  }
}

.label {
  color: var(--label-color);
  font-size: 14px;
  font-family: var(--sub-font);
  letter-spacing: 1.5px;
  margin: 0;
}

.value {
  color: var(--title-color);
  font-size: 18px;
  font-family: var(--sub-font);
  font-weight: 300;
  letter-spacing: 1.5px;
  margin: 0;
}

.scroll-hidden-wrapper {
  height: 550px;
  overflow: hidden;
  width: 800px;
}
</style>
