<template lang="pug">
div#travel-info(v-bind:class="{'scroll-inactive': isShowSpot}")
  global-menu.menu-content
  div.title-block
    div.title-under-line
      p.title 旅INFO
  div.main-content
    div.main-content-flex-wrapper
      div.map-pins
        travel-info-map.map-component(v-bind:pinSpots="pinSpots")
        travel-info-pins.pin-component(v-bind:pinSpots="pinSpots")
      travel-info-spots.spot-component(v-on:modifyPinSpots="modifyPinSpots" v-on:showSpot="showSpot")
  div.show-spot-background(v-show="isShowSpot")
    spot.spot-component(v-bind:spot="spot" v-on:closeSpot="closeSpot")
</template>

<script>

import menu from '../common/menu.vue'
import map from './map.vue'
import pins from './pins.vue'
import spots from './spots.vue'
import spot from './spot.vue'

export default {
  name: 'travel-info',
  components: {
    'global-menu': menu,
    'travel-info-map': map,
    'travel-info-pins': pins,
    'travel-info-spots': spots,
    'spot': spot
  },
  data () {
    return {
      pinSpots: [],
      spot: {},
      isShowSpot: false
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
      }
    },
    showSpot: function (targetSpot) {
      this.spot = targetSpot;
      this.isShowSpot = true;
    },
    closeSpot: function () {
      this.isShowSpot = false;
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
  position: absolute;;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  & .title-block {
    flex:1;
    position: relative;
    margin: 125px auto 0;
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
  & .show-spot-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 101;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.scroll-inactive {
    overflow: hidden;
}

.menu-content {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
