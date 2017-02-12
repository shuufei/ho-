<template lang="pug">
div#menu
  div.global-menu(v-on:click="openMenu()")
    span.top(v-bind:class="{ 'active': menuOpen, 'inactive': menuClose }")
    span.middle(v-bind:class="{ 'active': menuOpen, 'inactive': menuClose }")
    span.bottom(v-bind:class="{ 'active': menuOpen, 'inactive': menuClose }")
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
    chageMenuState: function (event) {
      this.gMenuOpen = !this.gMenuOpen;
    },
    getMenuState: function (event) {
      if (this.gMenuOpen) {
        return 'g-menu-open';
      } else {
        return 'g-menu-close';
      }
    },
    changeHamburgerState: function (event) {
      this.hamburgerActive = !this.hamburgerActive;
    },
    getHamburgerState: function (event) {
      if (this.hamburgerActive) {
        return 'is-active';
      } else {
        return '';
      }
    }
  }
}
</script>

<style>
:root {
  --main-color: #99CDFF;
}
.global-menu, .global-menu span {
  transition: all .4s;
  box-sizing: border-box;
}

.global-menu {
  position: fixed;
  top: 60px;
  left: 95px;
  background: white;
  height: calc(3px * 3 + 11px * 2);
  width: 40px;
  z-index: 100;
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
  animation: menu-top-open 1s forwards;
}
.top.inactive {
  animation: menu-top-close 1s forwards;
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
	}
}
@keyframes menu-top-close {
  0% {
    transform: translateY(11px) rotate(45deg);
  }
  50% {
    transform: translateY(11px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}

.middle.active {
  transition: all 0.25s 0.5s;
  opacity: 0;
}
.middle.inactive {
  transition: all 0.25s 0.5s;
  opacity: 1;
}

.bottom.active {
  animation: menu-bottom-open 1s forwards;
}
.bottom.inactive {
  animation: menu-bottom-close 1s forwards;
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
	}
}
@keyframes menu-bottom-close {
  0% {
    transform: translateY(-11px) rotate(-45deg);
  }
  50% {
    transform: translateY(-11px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}

/*

.menu-icon {
  color: var(--main-color);
  font-size: 50px;
}

.icono-hamburger {
  color: var(--main-color);
  position: absolute;
  left: 0;
  top: 100px;
  /*font-size: 400px;*/
  /*size: 20px;*/
/*}

.g-menu-triger {
  height: 150px;
  width: 70px;
  background: var(--main-color);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.13);
  position: absolute;
  top: 270px;
  font-family: susan;
  color: white;
  letter-spacing: 2.5px;
  font-size: 24px;
  transition: all 500ms 0s ease;
}

.g-menu-title {
  position: absolute;
  height: 29px;
  left: 16.5px;
}

.g-menu-links {
  position: absolute;
  left: -100px;
}



.g-menu-icon {
  position: absolute;
  top: 95px;
  left: 17px;
  size: 33px;
}

.g-menu-close {
  left: 0px;
}

.g-menu-open {
  left: 400px;
}

.g-menu-icon:hover {
  cursor: pointer;
  cursor: hand;
}
div.g-menu
  div.g-menu-triger(v-bind:class="getMenuState()")
    p.g-menu-title HO!
    div.g-menu-icon(v-on:click="chageMenuState()")
      i.icono-hamburger
  div.g-menu-links
    ul
      li: a(href="/") {{ home }}
      li: a(href="/blog") {{ blog }}
      li: a(href="#") {{ travelInfo }}
      li: a(href="#") {{ about }}*/

</style>
