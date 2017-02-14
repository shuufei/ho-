<template lang="pug">
div#blog
  global-menu.menu-content
  div.blog-title-block
    div.blog-title-under-line
      p.blog-title BLOG
</template>

<script>

import menu from '../common/menu.vue'

export default {
  name: 'blog',
  data () {
    return {
      projectName: 'HO!',
    }
  },
  components: {
    'global-menu': menu
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
  }}

#blog {
  text-align: center;
  -webkit-font-smoothing: antialiased;
}

.menu-content {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

body {
  margin: 0;
}

.blog-title-block {
  position: relative;
  margin: 120px auto;
  width: 100px;
  text-align: center;
  & .blog-title-under-line {
    position: relative;
    height: 10px;
    width: 72.5px;
    background: var(--main-color);
  }
  & .blog-title {
    position: absolute;
    margin: 0;
    font-size: 26px;
    font-family: var(--main-font);
    font-weight: 400;
    color: var(--title-color);
    letter-spacing: 1.5px;
    top: -23.5px;
    left: -1.3px;;
  }
}


</style>
