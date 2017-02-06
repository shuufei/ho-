<template lang="pug">
div#menu
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
        li: a(href="#") {{ about }}
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
      gMenuOpen: false
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
    }
  }
}
</script>

<style>
:root {
  --main-color: #99CDFF;
}

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

.icono-hamburger {
  color: white;
  position: absolute;
  left: 0;
  top: 0;
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

</style>
