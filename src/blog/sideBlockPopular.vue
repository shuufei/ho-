<template lang="pug">
div#side-block-popular
  p.side-block-title POPULAR
  div.popular-article-block
    div.popular-article(v-for="article in articles")
      img(v-bind:src="article.image" v-on:click="locateArticlePage")
      div.info
        p.date(v-on:click="locateArticlePage") {{ article.date }}
        p.title(v-on:click="locateArticlePage") {{ article.title }}
        div.share-count
          i.fi-heart
          p.count {{ article.share }}
</template>

<script>
export default {
  name: 'side-block-popular',
  data () {
    return {
      title: 'side-block-popular',
      articles: [
        {
          id: 2,
          title: '屋我地の魅力を伝えます',
          image: '/dist/yagaji6.jpg',
          date: '2016.11.18',
          tags: [ '観光地紹介', '屋我地' ],
          share: 149,
          author: '/dist/atufumi.jpg'
        },
        {
          id: 6,
          title: 'ファイヤーファイヤー',
          image: '/dist/yagaji7.jpg',
          date: '2016.08.11',
          tags: [ 'アウトドア' ],
          share: 87,
          author: '/dist/ryusuke.jpg'
        },
        {
          id: 5,
          title: '沖縄そばの名店',
          image: '/dist/soba.jpg',
          date: '2016.08.20',
          tags: [ 'グルメ' ],
          share: 77,
          author: '/dist/fei.jpg'
        }
      ]
    }
  },
  methods: {
    locateArticlePage: function (event) {
      window.location.href = '/blog/articles/1';
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

#side-block-popular {
  height: 500px;
  width: 350px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  text-align: left;
  color: var(--title-color);
  & .side-block-title {
    margin-top: 25px;
    margin-left: 25px;
    font-family: var(--main-font);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 2px;
  }
  & .popular-article-block {
    margin-top: 30px;
    margin-left: 25px;
    & .popular-article {
      display: flex;
      margin-bottom: 25px;
      & img {
        height: 92px;
        width: 150px;
        border-radius: 3px;
        @apply --hover-hand;
      }
      & .info {
        margin-left: 10px;
        width: 135px;
        position: relative;
        & p {
          margin: 0;
        }
        & .date {
          font-family: var(--main-font);
          font-size: 11px;
          letter-spacing: 1px;
          @apply --hover-hand;
        }
        & .title {
          font-family: var(--sub-font);
          font-size: 12.5px;
          font-weight: 300;
          letter-spacing: 1px;
          margin-top: 3px;
          @apply --hover-hand;
        }
        & .share-count {
          color: var(--main-color);
          display: flex;
          align-items: center;
          position: absolute;
          bottom: 2px;
          right: 0;
          & .fi-heart {
            font-size: 16px;
            margin-right: 2px;
          }
          & .count {
            font-family: var(--main-font);
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 0.5px;
          }
        }
      }
    }
  }
}
</style>
