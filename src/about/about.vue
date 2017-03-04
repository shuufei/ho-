<template lang="pug">
div#about
  global-menu.menu-component
  div.title-block
    div.title-under-line
      p.title {{ pageTitle }}
</template>

<script>
import menu from '../common/menu.vue'

export default {
  name: 'about',
  components: {
    'global-menu': menu
  },
  data () {
    return {
      pageTitle: 'ABOUT'
    }
  },
  props: [],
  methods: {
    __method__: function (event) {

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


#about {
  text-align: center;
  -webkit-font-smoothing: antialiased;
}

.title-block {
  flex:1;
  position: relative;
  margin: 125px auto 0;
  width: 150px;
  text-align: center;
  @apply --hover-hand;
  & .title-under-line {
    position: relative;
    height: 10px;
    width: 95px;
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
      top: -23.5px;
      left: 1.5px;
  }
}


.menu-component {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
