<template lang="pug">
div#travel-info-map
  p.map-title MAP
  img.hontou-image(src="./../assets/hontou1.png")
</template>

<script>
export default {
  name: 'travel-info-map'
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

#travel-info-map {
  height: 330px;
  width: 460px;
  background: var(--map-background);
  border-radius: 3px;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  & .map-title {
    font-family: var(--main-font);
    font-weight: 600;
    color: var(--title-color);
    font-size: 14px;
    position: absolute;
    top: 20px;
    left: 30px;
    margin: 0;
  }
  & .hontou-image {
    height: 250px;
    width: 190px;
  }
  & .pin-image {
    position: absolute;
    height: 25px;
  }
}
</style>
