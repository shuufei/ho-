<template lang="pug">
div#menu
  div.g-menu-icon
    button.hamburger.hamburger--squeeze.g-menu(type="button" v-on:click="changeHamburgerState" v-bind:class="getHamburgerState()")
      span.hamburger-box.g-menu
        span.hamburger-inner.g-menu
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
      hamburgerActive: false
    }
  },
  methods: {
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

.g-menu-icon {
  position: fixed;;
  top: 46.5px;
  left: 80px;
  z-index: 100;
}

.hamburger-inner {
  color: var(--main-color);
  background: var(--main-color);
}

.hamburger-inner::before {
  background: var(--main-color);
}

.hamburger-inner::after {
  background: var(--main-color);
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
