<template lang="pug">
div#menu
  div.global-menu(v-on:click="openMenu()")
    span.top(v-bind:class="{ 'active': menuOpen, 'inactive': menuClose }")
    span.middle(v-bind:class="{ 'active': menuOpen, 'inactive': menuClose }")
    span.bottom(v-bind:class="{ 'active': menuOpen, 'inactive': menuClose }")
  div.menu-screen(v-bind:class="{'menu-screen-active': menuOpen}")
    div.menu-screen-ho
      p HO!
    div.menu-links
      div.menu-link
        p.label-home(v-on:click="locateHomePage()") HOME
        div.menu-border
      div.menu-link
        p.label-blog(v-on:click="locateBlogPage()") BLOG
        div.menu-border
      div.menu-link
        p.label-travel-info(v-on:click="locateTravelInfoPage()") 旅INFO
        div.menu-border
      div.menu-link
        p.label-about(v-on:click="locateAboutPage()") ABOUT
        div.menu-border
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      home: 'HOME',
      blog: 'BLOG',
      travelInfo: '旅INFO',
      about: 'ABOUT',
      gMenuOpen: false,
      hamburgerActive: false,
      menuOpen: false,
      menuClose: false
    }
  },
  methods: {
    openMenu: function (event) {
      if (this.menuOpen) {
        this.menuClose = true;
      } else {
        this.menuClose = false;
      }
      this.menuOpen = !this.menuOpen;
    },
    locateHomePage: function (event) {
      window.location.href = '/';
    },
    locateBlogPage: function (event) {
      window.location.href = '/blog';
    },
    locateTravelInfoPage: function (event) {
      window.location.href = '/travelinfo';
    },
    locateAboutPage: function (event) {
      window.location.href = '/about';
    }
  }
}
</script>

<style>
:root {
  --main-color: #99CDFF;
  --main-font: avenir;
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
  }
}

.menu-screen {
  transition: all 0.8s;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 90;
  background: var(--main-color);
  opacity: 0;
}

.menu-screen-ho {
  position: absolute;
  margin: 0;
  bottom: 20px;
  right: 80px;
  & p {
    font-family: susan;
    font-size: 200px;
    margin: 0;
    letter-spacing: 10px;
    color: #C3E1FF;
  }
}

.menu-screen-active {
  transition: all 0.8s;
  opacity: 1;
}

.menu-links {
  position: absolute;
  left: calc(50% - 150px);
  color: white;
  font-family: var(--main-font);
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 5px;
  margin: 180px auto;
  width: 300px;
  & .menu-link {
    margin: 50px 0;
    position: relative;
    & .menu-border {
      display: inline-block;
      background: white;
      height: 4px;
      width: 0px;
      position: absolute;
      top: 50px;
      left: calc(50% - 20px);
      border-radius: 3px;
    }
    & p:hover {
      @apply --hover-hand;
    }
    & .label-home:hover + .menu-border {
      animation: menu-border-motion-home 0.8s forwards;
    }
    & .label-blog:hover + .menu-border {
      animation: menu-border-motion-blog 0.8s forwards;
    }
    & .label-travel-info:hover + .menu-border {
      animation: menu-border-motion-travel-info 0.8s forwards;
    }
    & .label-about:hover + .menu-border {
      animation: menu-border-motion-about 0.8s forwards;
    }
  }
}

@keyframes menu-border-motion-home {
  0% {
    width: 0px;
    left: calc(50% - 0px);
  }
  100% {
    width: 123px;
    left: calc(50% - 61px);
  }
}

@keyframes menu-border-motion-blog {
  0% {
    width: 0px;
    left: calc(50% - 0px);
  }
  100% {
    width: 115px;
    left: calc(50% - 58px);
  }
}

@keyframes menu-border-motion-travel-info {
  0% {
    top: 55px;
    width: 0px;
    left: calc(50% - 0px);
  }
  100% {
    top: 55px;
    width: 145px;
    left: calc(50% - 73px);
  }
}

@keyframes menu-border-motion-about {
  0% {
    width: 0px;
    left: calc(50% - 0px);
  }
  100% {
    width: 150px;
    left: calc(50% - 75px);
  }
}

.global-menu, .global-menu span {
  transition: all .4s;
  box-sizing: border-box;
}

.global-menu {
  position: fixed;
  top: 60px;
  left: 95px;
  height: calc(3px * 3 + 11px * 2);
  width: 40px;
  z-index: 100;
  @apply --hover-hand;
}

.global-menu span {
    position: absolute;
    height: 4px;
    width: 40px;
    left: 0;
    background: var(--main-color);
    border-radius: 3px;
}

.top {
  top: 0;
}
.middle {
  top: 11px;
}
.bottom {
  top: 22px;
}

.top.active {
  animation: menu-top-open 0.5s forwards;
}
.top.inactive {
  animation: menu-top-close 0.5s forwards;
}

@keyframes menu-top-open {
  0% {
		transform: translateY(0) rotate(0);
	}
	50% {
		transform: translateY(11px) rotate(0);
	}
	100% {
		transform: translateY(11px) rotate(45deg);
    background: white;
	}
}
@keyframes menu-top-close {
  0% {
    transform: translateY(11px) rotate(45deg);
    background: white;
  }
  50% {
    transform: translateY(11px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}

.middle.active {
  transition: all 0.1s 0.25s;
  opacity: 0;
}
.middle.inactive {
  transition: all 0.1s 0.25s;
  opacity: 1;
}

.bottom.active {
  animation: menu-bottom-open 0.5s forwards;
}
.bottom.inactive {
  animation: menu-bottom-close 0.5s forwards;
}

@keyframes menu-bottom-open {
  0% {
		transform: translateY(0) rotate(0);
	}
	50% {
		transform: translateY(-11px) rotate(0);
	}
	100% {
		transform: translateY(-11px) rotate(-45deg);
    background: white;
	}
}
@keyframes menu-bottom-close {
  0% {
    transform: translateY(-11px) rotate(-45deg);
    background: white;
  }
  50% {
    transform: translateY(-11px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
</style>
