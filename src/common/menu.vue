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
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
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
</style>
