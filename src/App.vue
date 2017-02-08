<template lang="pug">
div#app.base-background
  div.top-title
    div.top-image1: img(src="./assets/image/yagaji1.jpg" height="556.89px" width="850px")
    div.top-image2
    div.top-image3
    div.top-title-wrapper
      p.ho-title.white-ho-title {{ projectName }}
      p.ho-sub-title もっと身近におきなわを
  div.top-accent-border
    div.top-accent-border1
    div.top-accent-border2
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

<style scoped>
:root {
  --main-color: #99CDFF;
  --accent-border-color: #94E6AD;
  --menu-border: {
      height: 1.5px;
      width: 0px;
      background: #99CDFF;
      display: inline-block;
      left: -10px;
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

.top-accent-border {
  position: absolute;
  top: 100%;
  height: 80px;
  width: 22px;
  margin-left: 50%;
}

.top-accent-border1 {
  display: inline-block;
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--main-color);
  height: 80px;
  width: 10px;
}

.top-accent-border2 {
  display: inline-block;
  position: absolute;
  top: -40px;
  left: 12px;
  background: var(--accent-border-color);
  height: 80px;
  width: 10px;
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
  margin: 8% auto 0 auto;
  position: relative;
  height: 556.89px;
  width: 850px;
}

.top-image1 {
  /*height: 450px;*/
  position: absolute;
  top: 0;
  left: 0;
}

.top-image1 img {
  border-radius: 3px;
  opacity: 0;
  animation: fadeIn 2s ease-in 1.5s normal;
  animation-fill-mode: forwards;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);

}

@keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
}

.top-title-wrapper {
  position: absolute;
  top: 0;
  left: 40px;
  bottom: 0;
  right: 0;
  margin: 140px auto;
}

.ho-title {
  margin: 0;
  font-family: susan;
  font-size: 260px;
  letter-spacing: 40px;
  color: var(--main-color);
  animation: title-white 1s ease 1.5s 1 normal;
  animation-fill-mode: forwards;
}


@keyframes title-white {
  0% {
    color: var(--main-color);
  }

  100% {
    color: white;
  }
}

/*.white-ho-title {
  color: white;
}*/

.ho-sub-title {
  font-family: YuGothic medium;
  font-size: 20px;
  margin-top: -30px;
  margin-left: -25px;
  color: var(--main-color);
  letter-spacing: 15px;
  animation: title-white 1s ease 1.5s 1 normal;
  animation-fill-mode: forwards;
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
/*ul.top-menu
  li
    a.link-font(href="/blog") BLOG
      div.link-border-blog
  li.top-link
    a.link-font(href="/travelInfo") 旅INFO
      div.link-border-travel-info
  li.top-link
    a.link-font(href="/about") ABOUT
      div.link-border-about

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
  margin: 25px 0 0 0;
}

.link-font {
  color: #848484;
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
  background: var(--main-color);
  width: 80px;
}

.link-font:hover > .link-border-travel-info {
  background: var(--main-color);
  width: 95px;
}

.link-font:hover > .link-border-about {
  background: var(--main-color);
  width: 96px;
}*/

</style>
