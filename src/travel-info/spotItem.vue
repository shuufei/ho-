<template lang="pug">
div#spot-item
  div.image
    img(v-bind:src="image" v-on:click="pushSpot")
  div.info
    p.name(v-on:click="pushSpot") {{ name }}
    i.fi-star(v-for="i in score")
    div.pin-button(v-bind:class="isActive ? 'pin-active' : 'pin-inactive'" v-on:click="pushPinButon") PIN
</template>

<script>
export default {
  name: 'spot-item',
  props: [
    'id',
    'name',
    'score',
    'image'
  ],
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    pushPinButon: function (event) {
      this.isActive = !this.isActive;
      this.$emit('pushPinButon', this.id, this.isActive);
    },
    pushSpot: function (event) {
      this.$emit('pushSpot', this.id);
    }
  }
}
</script>

<style>
:root {
  --main-color: #99CDFF;
  --title-color: #575757;
  --fotter-color: #95989A;
  --star-color: #B7D4E6;
  --pin-active-color: #FF7272;
  --pin-inactive-color: #AAAAAA;
  --main-font: avenir;
  --sub-font: "Noto Sans Japanese";
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
  }
}

#spot-item {
  display: flex;
  & .image img {
    height: 111px;
    width: 170px;
    border-radius: 3px;
    margin-right: 12px;
    @apply --hover-hand;
  }
  & .info {
    position: relative;
    text-align: left;
    width: 200px;
    & .name {
      color: var(--title-color);
      font-family: var(--sub-font);
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 1.5px;
      margin-top: 0;
      margin-bottom: 5px;
      @apply --hover-hand;
    }
    & .fi-star {
      color: var(--star-color);
      font-size: 20px;
      margin-right: 5px;
    }
    & .pin-button {
      align-items: center;
      border-radius: 3px;
      bottom: 15px;
      color: white;
      display: flex;
      font-family: var(--main-font);
      font-weight: 600;
      height: 30px;
      justify-content: center;
      position: absolute;
      right: 0;
      width: 60px;
      @apply --hover-hand;
    }
    & .pin-active {
      background: var(--pin-active-color);
    }
    & .pin-inactive {
      background: var(--pin-inactive-color);
    }
  }
}

</style>
