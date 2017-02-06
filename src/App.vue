<template lang="pug">
div#app.base-background
  div.top-title
    p.ho-title {{ projectName }}
    p.ho-sub-title もっと身近におきなわを
  ul.top-menu
    li
      a.link-font(href="/blog") BLOG
        div.link-border-blog
    li.top-link
      a.link-font(href="/travelInfo") 旅INFO
        div.link-border-travel-info
    li.top-link
      a.link-font(href="/about") ABOUT
        div.link-border-about
  global-menu
</template>

<script>

import menu from './common/menu.vue'

export default {
  name: 'app',
  data () {
    return {
      projectName: 'HO!',
      msg: 'Welcome to Your Vue.js App',
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
  --menu-border: {
      height: 1.5px;
      width: 10px;
      background: #575757;
      display: inline-block;
      left: -20px;
      top: 8px;
      transition: all 500ms 0s ease;
      position: absolute;
  }
}

.base-background {
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.top-menu {
  font-family: avenir heavy;
  font-size: 16px;
  letter-spacing: 5px;
  position: absolute;
  bottom: 50px;
  right: 125px;
  text-align: left;
}

.top-menu li {
  margin: 35px 0 0 0;
}

.link-font {
  color: #575757;
  text-decoration: none;
  position: relative;
}

.link-border-blog {
  @apply --menu-border;
}

.link-border-travel-info {
  @apply --menu-border;
}

.link-border-about {
  @apply --menu-border;
}

.link-font:hover > .link-border-blog {
  left: -15px;
  background: var(--main-color);
  width: 90px;
}

.link-font:hover > .link-border-travel-info {
  left: -15px;
  background: var(--main-color);
  width: 105px;
}

.link-font:hover > .link-border-about {
  left: -15px;
  background: var(--main-color);
  width: 106px;
}

@font-face {
  font-family: susan;
  src: url(/Users/hanashiroshuuhei/Desktop/material/font/Susan.ttf) format("opentype");
}

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}

.top-title {
  margin: 250px auto 0 auto;
}

.ho-title {
  margin: 0;
  font-family: susan;
  font-size: 223px;
  letter-spacing: 40px;
  color: var(--main-color);
}

.ho-sub-title {
  font-family: YuGothic bold;
  font-size: 18px;
  margin-top: -25px;
  margin-left: -25px;
  color: var(--main-color);
  letter-spacing: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
}

/*li {
  display: inline-block;
  margin: 0 10px;
}*/

/* pc */
/*@media screen and (min-width: 961px) {
  .box {
    background: red;
  }
}*/

/* tablet  */
/*@media only screen and (min-width: 641px) and (max-width: 960px) {
  .box {
    background: blue;
  }
}*/

/* smartPhone */
/*@media screen and (max-width: 640px) {
  .box {
    background: green;
  }
}*/
/*
@media screen and (width >= 200px) and (width <= 500px) {
  .red-box {
    @apply --box-common;
  }
}

@media screen and (width >= 501px) and (width <= 1500px) {
  .red-box {
    @apply --box-common;
    background: blue;
  }
}*/
</style>
