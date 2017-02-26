<template lang="pug">
div#travel-info
  global-menu.menu-content
  div.title-block
    div.title-under-line
      p.title 旅INFO
  div.main-content
    div.main-content-flex-wrapper
      div.map-pins
        travel-info-map.map-component(v-bind:pinSpots="pinSpots")
        travel-info-pins.pin-component(v-bind:pinSpots="pinSpots")
      travel-info-spots.spot-component(v-on:modifyPinSpots="modifyPinSpots")
</template>

<script>

import menu from '../common/menu.vue'
import map from './map.vue'
import pins from './pins.vue'
import spots from './spots.vue'

export default {
  name: 'travel-info',
  components: {
    'global-menu': menu,
    'travel-info-map': map,
    'travel-info-pins': pins,
    'travel-info-spots': spots
  },
  data () {
    return {
      pinSpots: []
    }
  },
  methods: {
    modifyPinSpots: function (targetSpot, operate) {
      switch (operate) {
        case 'push':
          this.pinSpots.push(targetSpot);
          break;
        case 'pop':
          this.pinSpots.some((spot, index) => {
            if(spot.id === targetSpot.id) {
              this.pinSpots.splice(index, 1);
              return true;
            };
          });
          break;
        default:

      }
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
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
  }
}

#travel-info {
  text-align: center;
  -webkit-font-smoothing: antialiased;
  & .title-block {
    flex:1;
    position: relative;
    margin: 120px auto 0;
    width: 150px;
    text-align: center;
    @apply --hover-hand;
    & .title-under-line {
      position: relative;
      height: 10px;
      width: 97px;
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
        top: -25.5px;
        left: 0px;
    }
  }
  & .main-content {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    padding-bottom: 100px;
    & .main-content-flex-wrapper {
      display: flex;
      width: 910px;
      & .map-pins {
        margin-right: 50px;
        &. map-component {

        }
        & .pin-component {
          margin-top: 30px;
        }
      }
      & .spot-component {

      }
    }
  }
}

.menu-content {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
