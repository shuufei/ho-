<template lang="pug">
div#blog-article
  img(v-bind:src="image")
  div.article-info
    p.article-info-date {{ date }}
    p.article-info-title {{ title }}
    div.article-info-tags
      ul
        li.article-info-tag(v-for="tag in tags")
          p {{ tag }}
  div.article-info-share
    i.fi-heart
    p {{ share }}
  div.article-info-author
    img(v-bind:src="author")
</template>

<script>
export default {
  name: 'article',
  props: [
    'date',
    'title',
    'image',
    'tags',
    'author',
    'share'
  ]
}
</script>

<style>
:root {
  --main-color: #99CDFF;
  --title-color: #575757;
  --image-width: 200px;
  --image-height: 123px;
  --main-font: avenir;
  --sub-font: "Noto Sans Japanese";
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
  }
}

#blog-article {
  height: 125px;
  width: 600px;
  background: white;
  display: flex;
  position: relative;
  & img {
    width: var(--image-width);
    height: var(--image-height);
    border-radius: 3px;
    margin-right: 18px;
  }
  & .article-info {
    & .article-info-date {
      font-family: var(--main-font) book;
      font-size: 12px;
      letter-spacing: 0.8px;
      margin-top: 6px;
      margin-bottom: 0;
      text-align: left;
      color: var(--title-color);
      text-align: left;
    }
    & .article-info-title {
      font-family: var(--sub-font);
      font-weight: 300;
      font-size: 16px;
      margin-bottom: 0;
      color: var(--title-color);
      margin-top: 0px;
      text-align: left;
    }
    & .article-info-tags {
      text-align: left;
      margin-top: 10px;
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
          margin-right: 20px;
          opacity: 0.8;
          font-weight: 500;
          display: inline-block;
          padding: 0;
          letter-spacing: 1px;
          padding-right: 15px;
          height: 15px;
          border-right: 1px solid #ABABAB;
          & p {
              margin-top: -2px;
              margin-bottom: 0;
          }
          &:last-child {
            border: none;
          }
        }
      }
    }
  }
  & .article-info-share {
    position: absolute;
    right: 75px;
    bottom: 6px;
    display: flex;
    align-items: center;
    & i {
      margin-right: 4px;
      font-size: 20px;
      color: var(--main-color);
    }
    & p {
      font-family: var(--main-font);
      color: var(--main-color);
      font-size: 16px;
      font-weight: 500;
    }
  }
  & .article-info-author {
    position: absolute;
    bottom: 0;
    right: 0;
    & img {
      size: 45px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}

p {
  margin:0;
  padding: 0;
}
</style>
