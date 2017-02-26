<template lang="pug">
div#travel-info-pins(v-bind:class="{'empty-message-box': isEmptyMessage()}")
  p.pins-title PIN
  p.empty-message(v-if="pins.length === 0") 気になったSPOTのPINボタンを押してください
</template>

<script>
export default {
  name: 'travel-info-pins',
  data () {
    return {
      pins: []
    }
  },
  methods: {
    isEmptyMessage: function (event) {
      if (this.pins.length === 0) { return true; }
      return false;
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

#travel-info-pins {
  width: 460px;
  height: 180px;
  border-radius: 3px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
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
}

.empty-message-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
