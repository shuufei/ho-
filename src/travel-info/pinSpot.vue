<template lang="pug">
div#pin-spot
  img(v-bind:src="image")
  div.spot-name-wrapper
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
  --pin-image-height: 55px;
  --pin-image-width: 85.5px;
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
  }
}

#pin-spot {
  text-align: left;
  width: var(--pin-image-width);
  position: relative;
  & img {
    height: var(--pin-image-height);
    width: var(--pin-image-width);
    border-radius: 3px;
  }
  & .spot-name-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--pin-image-width);
    height: var(--pin-image-height);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    opacity: 0;
    @apply --hover-hand;
    &:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.3);
    }
    & .spot-name {
      color: white;
      font-family: var(--sub-font);
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.5px;
      line-height: 1.3;
    }
  }
}

</style>
