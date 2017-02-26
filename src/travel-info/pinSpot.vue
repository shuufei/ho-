<template lang="pug">
div#pin-spot
  img(v-bind:src="image")
  p.spot-name {{ name }}
</template>

<script>
export default {
  name: 'pin-spot',
  props: [
    'id',
    'name',
    'score',
    'image'
  ]
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

#pin-spot {
  text-align: left;
  width: 100px;
  & img {
    height: 65px;
    width: 100px;
    border-radius: 3px;
  }
  & .spot-name {
    color: var(--title-color);
    font-family: var(--sub-font);
    font-size: 10px;
    letter-spacing: 0.5px;
    line-height: 1.3;
    margin: 0;
    margin-top: 0;
  }
}

</style>
