<template lang="pug">
div#travel-info-spots
  p.spot-title SPOT
  div.spot-filter
    i.fi-filter
  div.spot-items
    spot-item.spot-item-component(v-for="spot in spots"
      v-bind:id="spot.id"
      v-bind:name="spot.name",
      v-bind:score="spot.score",
      v-bind:image="spot.image")
    div.more-loading
      p もっと見る
</template>

<script>

import search from './../common/search.vue'
import contentOrder from './../common/contentOrder.vue'
import spotItem from './spotItem.vue'

export default {
  name: 'travel-info-spots',
  components: {
    'search': search,
    'content-order': contentOrder,
    'spot-item': spotItem
  },
  data () {
    return {
      spots: [
        {
          id: 1,
          name: '美ら海水族館',
          score: 5,
          image: '/dist/tyuraumi.jpg'
        },
        {
          id: 2,
          name: '首里城',
          score: 4,
          image: '/dist/shuri.jpg'
        },
        {
          id: 3,
          name: 'パイナップルパーク',
          score: 2,
          image: '/dist/pinapo.jpg'
        },
        {
          id: 1,
          name: '美ら海水族館',
          score: 5,
          image: '/dist/tyuraumi.jpg'
        },
        {
          id: 2,
          name: '首里城',
          score: 4,
          image: '/dist/shuri.jpg'
        },
        {
          id: 3,
          name: 'パイナップルパーク',
          score: 2,
          image: '/dist/pinapo.jpg'
        }
      ]
    }
  }
}
</script>

<style>
:root {
  --main-color: #99CDFF;
  --title-color: #575757;
  --main-font: avenir;
  --sub-font: "Noto Sans Japanese";
  --map-background: #E2F2FC;
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
  }
}

#travel-info-spots {
  position: relative;
  width: 450px;
  & .spot-title {
    font-family: var(--main-font);
    font-weight: 600;
    color: var(--title-color);
    font-size: 14px;
    position: absolute;
    top: 20px;
    left: 0;
    margin: 0;
  }
  & .spot-filter {
    position: absolute;
    top: 20px;
    right: 30px;
   & .fi-filter {
      color: var(--title-color);
      font-size: 20px;
      @apply --hover-hand;
    }
  }
  & .spot-items {
    height: 440px;
    margin-top: 100px;
    overflow-y: scroll;
    padding-right: 40px;
    & .spot-item-component {
      margin-bottom: 30px;
    }
    & .more-loading {
      margin: 50px auto 30px;
      @apply --hover-hand;
      & p {
        font-family: var(--sub-font);
        color: var(--title-color);
        font-size: 14px;
        letter-spacing: 1px;
      }
    }
  }
}

</style>
