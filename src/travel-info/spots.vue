<template lang="pug">
div#travel-info-spots
  p.spot-title SPOT
  div.spot-filter
    i.fi-filter
  div.spot-items(v-scroll="spotsScroll" v-bind:class="{ 'spot-items-scroll': isScroll }")
    spot-item.spot-item-component(v-for="spot in spots"
      v-bind:id="spot.id"
      v-bind:name="spot.name"
      v-bind:score="spot.score"
      v-bind:image="spot.image"
      v-bind:active="spot.active"
      v-on:pushPinButon="modifyPinSpots"
      v-on:pushSpot="showSpot")
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
  methods: {
    modifyPinSpots: function (id, isActive) {
      let targetSpot;
      this.spots.some((spot) => {
        if (spot.id === id) {
          targetSpot = spot;
          return true;
        }
      });
      targetSpot.active = isActive;
      if (isActive) {
        console.log('push');
        this.$emit('modifyPinSpots', targetSpot, 'push');
      } else {
        console.log('pop');
        this.$emit('modifyPinSpots', targetSpot, 'pop');
      }
    },
    showSpot: function (id) {
      let targetSpot;
      this.spots.some((spot) => {
        if (spot.id === id) {
          targetSpot = spot;
          return true;
        }
      });
      this.$emit('showSpot', targetSpot);
    },
    spotsScroll: function (event, position) {
      if (position.scrollTop === 0) {
        this.isScroll = false;
      } else {
        this.isScroll = true;
      }
    }
  },
  data () {
    return {
      isScroll: false,
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
          id: 4,
          name: '美ら海水族館',
          score: 5,
          image: '/dist/tyuraumi.jpg'
        },
        {
          id: 5,
          name: '首里城',
          score: 4,
          image: '/dist/shuri.jpg'
        },
        {
          id: 6,
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
    margin-top: 80px;
    overflow-y: scroll;
    padding-right: 40px;
    padding-top: 20px;
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
  & .spot-items-scroll {
    box-shadow: inset 0 10px 10px -15px #333;
  }
}

</style>
