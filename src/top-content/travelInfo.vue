<template lang="pug">
div#top-content-travel-info
  p.content-title {{ contentName }}
  div.island-and-about
    div.island-image
      img(src="./../assets/hontou1.png")
      img.pin-image(src="./../assets/pin.png")
    div.travel-info-about
      div.label
        p 旅INFOでは観光地情報を紹介しています.
        p 観光地の位置情報と共に観光地について知ることができます.
        p 旅INFOを活用して旅行の計画立てに活用してみましょう!
      div.travel-info-link(v-on:click="locateTravelInfoPage()")
        p.travel-info-link-label 旅INFOへ
</template>

<script>
export default {
  name: 'top-content-travel-info',
  data () {
    return {
      contentName: '旅INFO'
    }
  },
  methods: {
    locateTravelInfoPage: function (event) {
      window.location.href = '/travelinfo';
    }
  }
}
</script>

<style scoped>
:root {
  --main-color: #99CDFF;
  --title-color: #575757;
  --island-width: 262.57px;
  --island-height: 350.2px;
  --main-font: avenir;
  --sub-font: "Noto Sans Japanese";
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
  }
}

#top-content-travel-info {
  padding-top: 100px;
  padding-bottom: 70px;
  background: #E2F2FC;
  text-align: center;
  -webkit-font-smoothing: antialiased;
}

.content-title {
  color: var(--title-color);
  font-family: var(--main-font);
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 1.5px;
  margin: 0 auto;
  height: auto;
}

.island-and-about {
  position: relative;
  display: flex;
  margin: 70px auto;
  text-align: left;
  height: var(--island-height);
  width: calc(var(--island-width) + 80px + 420px);
}

.island-image {
  position: relative;
}

.pin-image {
  position: absolute;
  left: 85px;
  top: 48px;
}

.travel-info-about {
  margin-left: 60px;
}

.label {
  font-family: var(--sub-font);
  font-weight: 400;
  font-size: 14px;
  color: var(--title-color);
  letter-spacing: 2px;
  margin-top: 100px;
  p {
    margin: 5px 0;
  }
}

.travel-info-link {
  height: 40px;
  width: 230px;
  border: 1px solid var(--title-color);
  text-align: center;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
}

.travel-info-link:hover {
  @apply --hover-hand;
}

.travel-info-link-label {
  font-family: var(--sub-font);
  font-weight: 200;
  font-size: 14px;
  letter-spacing: 2px;
}
</style>
