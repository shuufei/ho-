<template lang="pug">
div#tags
  ul
    li.article-info-tag(v-for="tag in tags" v-on:click="locationArticleList(tag)")
      p {{ tag }}
</template>

<script>
export default {
  name: 'tags',
  props: [
    'tags'
  ],
  methods: {
    locationArticleList: function (event) {
      return true;
    }
  }
}
</script>

<style lang="css">
:root {
  --main-color: #99CDFF;
  --title-color: #575757;
  --main-font: avenir;
  --sub-font: "Noto Sans Japanese";
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
  }
}

#tags {
  text-align: left;
  font-family: var(--sub-font);
  font-size: 12px;
  color: var(--title-color);
  display: flex;
  & ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    & .article-info-tag {
      margin-top: 0;
      margin-bottom: 0;
      margin-right: 15px;
      opacity: 0.6;
      font-weight: 500;
      display: inline-block;
      padding: 0;
      letter-spacing: 1px;
      padding-right: 12px;
      height: 13px;
      border-right: 1px solid #ABABAB;
      &:hover {
        @apply --hover-hand;
      }
      & p {
          margin-top: -3px;
          margin-bottom: 0;
      }
      &:last-child {
        border: none;
      }
    }
  }
}

</style>
