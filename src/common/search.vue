<template lang="pug">
div#search
  i.fi-magnifying-glass(v-on:click="activeSearch")
  div.search-input-block
    input.search-input(type="text" placeholder="検索ワードを入力してください" v-show="searchOn")
    div.search-border(v-bind:class="{ 'search-active-border': searchOn }")
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      searchOn: false
    }
  },
  methods: {
    activeSearch: function (event) {
      this.searchOn = !this.searchOn;
    }
  }
}
</script>

<style>
:root {
  --main-color: #99CDFF;
  --main-font: avenir;
  --sub-font: "Noto Sans Japanese";
  --title-color: #575757;
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
  }
}

#search {
  display: flex;
  align-items: center;
  & i {
    font-size: 28px;
    color: var(--title-color);
    margin-right: 15px;
    &:hover {
      @apply --hover-hand;
    }
  }
  & .search-input-block {
    position: relative;
    height: 25px;
    width: 250px;
    & .search-input {
      font-size: 16px;
      font-family: var(--sub-font);
      color: var(--title-color);
      width: 250px;
      height: 20px;
    }
    & .search-border {
      transition: all 0.8s 0s ease-out;
      background: var(--title-color);
      height: 1.3px;
      width: 0;
      position: absolute;
      top: 27px;
      left: -5px;
    }
    & .search-active-border {
      width: 250px;
    }
  }

}

input {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  border-radius: 0;
  outline: none;
  appearance: none;
}
</style>
