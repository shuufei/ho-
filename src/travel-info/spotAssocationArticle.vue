<template lang="pug">
div#spot-association-article
  img(v-bind:src="image")
  div.article-info
    p.date {{ date }}
    p.title {{ title }}
    tags.tags-component(v-bind:tags="tags")
    share-count.share-count-component(v-bind:count="share")

</template>

<script>
import tags from './../common/tags.vue'
import shareCount from './../common/shareCount.vue'

export default {
  name: 'spot-association-article',
  props: [
    'id',
    'date',
    'title',
    'image',
    'tags',
    'athor',
    'share'
  ],
  components: {
    'tags': tags,
    'share-count': shareCount
  }
}
</script>

<style>
:root {
  --main-color: #99CDFF;
  --title-color: #575757;
  --close-button-color: #D0D0D0;
  --star-color: #B7D4E6;
  --label-color: #8E8E8E;
  --main-font: avenir;
  --sub-font: "Noto Sans Japanese";
  --map-background: #E2F2FC;
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
  }
}

#spot-association-article {
  color: var(--title-color);
  display: flex;
  font-family: var(--main-font);
  text-align: left;
  & img {
    height: 110px;
    width: 180px;
    border-radius: 3px;
    margin-right: 10px;
    @apply --hover-hand;
  }
  & .article-info {
    position: relative;
    width: 250px;
    & .date {
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 1px;
      margin: 0;
      @apply --hover-hand;
    }
    & .title {
      font-family: var(--sub-font);
      font-size: 16px;
      font-weight: 300;
      margin: 0;
      @apply --hover-hand;
    }
    & .tags-component {
      margin: 0;
      margin-top: 10px;
    }
    & .share-count-component {
      bottom: 5px;
      right: 10px;
      position: absolute;
    }
  }
}
</style>
