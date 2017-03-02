<template lang="pug">
div#travel-info-pins(v-bind:class="{'empty-message-box': isEmptyMessage()}")
  p.pins-title PIN
  p.empty-message(v-show="pinSpots.length === 0") 気になったSPOTのPINボタンを押してください
  div.pin-spots-block(v-show="pinSpots.length !== 0")
    pin-spot.pin-spot-component(v-for="spot in pinSpots"
      v-bind:id="spot.id"
      v-bind:name="spot.name"
      v-bind:score="spot.score"
      v-bind:image="spot.image")
</template>

<script>

import pinSpot from './pinSpot.vue'

export default {
  name: 'travel-info-pins',
  props: [
    // pinSpots: [{
    //  id: integer,
    //  name: string,
    //  score: integer,
    //  image: string
    // }]
    'pinSpots'
  ],
  data () {
    return {
    }
  },
  methods: {
    isEmptyMessage: function (event) {
      if (this.pinSpots.length === 0) { return true; }
      return false;
    }
  },
  components: {
    'pin-spot': pinSpot
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

#travel-info-pins {
  width: 460px;
  height: 180px;
  border-radius: 3px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  overflow: scroll;
  position: relative;
  & .pins-title {
    font-family: var(--main-font);
    font-weight: 600;
    color: var(--title-color);
    font-size: 14px;
    position: absolute;
    top: 20px;
    left: 30px;
    margin: 0;
  }
  & .empty-message {
    font-family: var(--sub-font);
    color: var(--title-color);
    letter-spacing: 1px;
    font-size: 14px;
    opacity: 0.7;
  }
  & .pin-spots-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 30px;
    margin-top: 55px;
    padding-bottom: 15px;
    position: absolute;
    width: calc(130px * 3);
    & .pin-spot-component {
      margin-right: 12px;
      margin-bottom: 10px;
    }
  }
}

.empty-message-box {
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
