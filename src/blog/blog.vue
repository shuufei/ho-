<template lang="pug">
div#blog
  global-menu.menu-content
  div.blog-title-block
    div.blog-title-under-line
      p.blog-title BLOG
  div.blog-main-content
    div.article-block
      div.search-sort-info
        search
        content-order
      div.article-list
        blog-article.blog-article(v-for="article in articles"
          v-bind:image="article.image",
          v-bind:title="article.title"
          v-bind:date="article.date"
          v-bind:tags="article.tags"
          v-bind:share="article.share"
          v-bind:author="article.author")
    div.dummy-popular-block
  side-block-popular.popular-block
</template>

<script>

import menu from '../common/menu.vue'
import popularBlock from './sideBlock.vue'
import search from './../common/search.vue'
import contentOrder from './../common/contentOrder.vue'
import blogArticle from './blogArticle.vue'

export default {
  name: 'blog',
  data () {
    return {
      projectName: 'HO!',
      articles: [
        {
          title: '美ら海水族館を紹介するよ',
          image: './dist/new-article-image.jpg',
          date: '2016.12.08',
          tags: [ '観光地紹介', '海' ],
          share: 36,
          auther: 'パウエル',
          // image: './../assets/image/member/ryusuke.jpg'
          author: './dist/ryusuke.jpg'
        },
        {
          title: '屋我地の魅力を伝えます',
          image: './dist/yagaji6.jpg',
          date: '2016.11.18',
          tags: [ '観光地紹介', 'アウトドア' ],
          share: 149,
          auther: 'パウエル',
          // image: './../assets/image/member/ryusuke.jpg'
          author: './dist/atufumi.jpg'
        }
      ]
    }
  },
  components: {
    'global-menu': menu,
    'side-block-popular': popularBlock,
    'search': search,
    'content-order': contentOrder,
    'blog-article': blogArticle
  }
}
</script>

<style>
:root {
  --main-color: #99CDFF;
  --title-color: #575757;
  --main-font: avenir;
  --sub-font: "Noto Sans Japanese";
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
  }}

#blog {
  text-align: center;
  -webkit-font-smoothing: antialiased;
}

.menu-content {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

body {
  margin: 0;
}

.blog-title-block {
  position: relative;
  margin: 120px auto 0;
  width: 100px;
  text-align: center;
  & .blog-title-under-line {
    position: relative;
    height: 10px;
    width: 72.5px;
    background: var(--main-color);
  }
  & .blog-title {
    position: absolute;
    margin: 0;
    font-size: 26px;
    font-family: var(--main-font);
    font-weight: 400;
    color: var(--title-color);
    letter-spacing: 1.5px;
    top: -23.5px;
    left: -1.3px;;
  }
}

.blog-main-content {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.article-block {
  position: relative;
  background: white;
  width: 600px;
  margin-right: 30px;
  & .search-sort-info {
    position: relative;
    height: 25px;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & .article-list {
    margin: 50px 0;
    & .blog-article {
      margin-bottom: 30px;
    }
  }
}

.dummy-popular-block {
    width: 350px;
    height: 500px;
}

.popular-block {
  position: fixed;
  top: 180px;
  left: 65%;
}


</style>
