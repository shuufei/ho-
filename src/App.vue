<template lang="pug">
div#app.base-background
  global-menu
  div.top-content
    div.top-title
      div.top-images {{ startModifyImages() }}
        div: img(v-bind:class="[isActiveImage1 ? 'active-image' : '', isInvalidImage1 ? 'invalid-image' : '', 'top-image']" src="./assets/image/yagaji1.jpg" height="556.89px" width="850px")
        div: img(v-bind:class="[isActiveImage2 ? 'active-image' : '', isInvalidImage2 ? 'invalid-image' : '', 'top-image']" src="./assets/image/yagaji3.jpg" height="556.89px" width="850px")
        div: img(v-bind:class="[isActiveImage3 ? 'active-image' : '', isInvalidImage3 ? 'invalid-image' : '', 'top-image']" src="./assets/image/yagaji5.jpg" height="556.89px" width="850px")
      div.top-title-wrapper
        p.ho-title.white-ho-title {{ projectName }}
        p.ho-sub-title もっと身近におきなわを
    div.top-accent-border
      div.top-accent-border1
      div.top-accent-border2
  top-content-blog.blog
</template>

<script>

import menu from './common/menu.vue'
import topBlog from './top-content/blog.vue'

// let topInstance = {
export default {
  name: 'app',
  data () {
    return {
      projectName: 'HO!',
      msg: 'Welcome to Your Vue.js App',
      count: 1,
      isActiveImage1: false,
      isInvalidImage1: false,
      isActiveImage2: false,
      isInvalidImage2: false,
      isActiveImage3: false,
      isInvalidImage3: false,
      modifyStartFlag: false,
      modifyTime: 8000
    }
  },
  components: {
    'global-menu': menu,
    'top-content-blog': topBlog
  },
  methods: {
    startModifyImages: function (event) {
      if (!this.modifyStartFlag) {
        setTimeout(this.topImageState1, 3000);
        this.modifyStartFlag = true;
      }
    },
    topImageState1: function (event) {
      this.isActiveImage1 = true;
      setTimeout(this.topImageState2, this.modifyTime);
    },
    topImageState2: function (event) {
      this.isActiveImage2 = true;
      this.isInvalidImage1 = true;
      this.isActiveImage3 = false;
      this.isInvalidImage3 = false;
      setTimeout(this.topImageState3, this.modifyTime);
    },
    topImageState3: function (event) {
      this.isActiveImage3 = true;
      this.isInvalidImage2 = true;
      this.isActiveImage1 = false;
      this.isInvalidImage1 = false;
      setTimeout(this.topIageState4, this.modifyTime);
    },
    topIageState4: function (event) {
      this.isInvalidImage3 = true;
      this.isActiveImage1 = true;
      this.isInvalidImage2 = false;
      this.isActiveImage2 = false;
      setTimeout(this.topImageState1, 1000);
    }
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

/*base*/
@font-face {
  font-family: susan;
  src: url(/Users/hanashiroshuuhei/Desktop/material/font/Susan.ttf) format("opentype");
}
#app {
  text-align: center;
  -webkit-font-smoothing: antialiased;
}
.base-background {
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.top-content {
  height: calc(100% + 40px);
  width: 100%;
}


/*border*/
.top-accent-border {
  position: absolute;
  top: calc(100% - 40px);
  height: 80px;
  width: 22px;
  margin-left: calc(50% - 11px);
}
.top-accent-border1 {
  display: inline-block;
  position: absolute;
  left: 0;
  background: var(--main-color);
  height: 80px;
  width: 10px;
}
.top-accent-border2 {
  display: inline-block;
  position: absolute;
  left: 12px;
  background: var(--accent-border-color);
  height: 80px;
  width: 10px;
}


/*top title*/
.top-title {
  margin: 8% auto 0 auto;
  position: relative;
  height: 556.89px;
  width: 850px;
}

/*top title image*/
.top-image {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
  opacity: 0;
}
.active-image {
  animation: fadeIn 2s ease-in 0s normal forwards;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
}
@keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
}
.invalid-image {
  animation: fadeOut 2s ease-in 0s normal forwards;
}
@keyframes fadeOut {
    0% {opacity: 1}
    100% {opacity: 0}
}

/*top-title-logo*/
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
  animation: title-white 1s ease 3s 1 normal;
  animation-fill-mode: forwards;
}
@keyframes title-white {
  0% {color: var(--main-color);}
  100% {color: white;}
}
.ho-sub-title {
  font-family: YuGothic medium;
  font-size: 20px;
  margin-top: -40px;
  margin-left: -25px;
  color: var(--main-color);
  letter-spacing: 15px;
  animation: title-white 1s ease 3s 1 normal;
  animation-fill-mode: forwards;
}


/*top blog content*/
.blog {
  position: relative;
  margin-top: 150px;
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
