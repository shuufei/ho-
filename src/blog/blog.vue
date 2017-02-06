<template lang="pug">
div#blog
  p.blog-title BLOG
  div.blog-box
  global-menu
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
}

.blog-title {
  margin: 100px auto;
  font-size: 24px;
  font-family: avenir;
}

.blog-box {
  size: 200px;
  margin: 100px auto;
  border: 0.5px solid black;
}

</style>
