<template lang="pug">
div#top-content-blog
  p.content-title BLOG
  div.blog-content
    div.article {{ getNewArticle() }}
      p.label NEW
      div.article-image
        img(src="./../assets/image/new-article-image.jpg")
      p.article-date {{ newArticle.date }}
      p.article-title {{ newArticle.title }}
      div.article-tags
        ul
          li.article-tag(v-for="tag in newArticle.tags")
            p {{ tag }}
    div.article {{ getPopularArticle() }}
      p.label POPULAR
      div.article-image
        img(src="./../assets/image/yagaji6.jpg")
      p.article-date {{ popularArticle.date }}
      p.article-title {{ popularArticle.title }}
      div.article-tags
        ul
          li.article-tag(v-for="tag in popularArticle.tags")
            p {{ tag }}
  div.blog-link
</template>

<script>
export default {
  name: 'top-content-blog',
  data () {
    return {
      contentName: 'blog',
      newArticle: {},
      popularArticle: {}
    }
  },
  methods: {
    getNewArticle: function (event) {
      let article = {
        title: '美ら海水族館紹介するよ',
        date: '2017.12.03',
        tags: [
          '観光地紹介',
          '海'
        ]
      };
      this.newArticle = article;
      return;
    },
    getPopularArticle: function (event) {
      let article = {
        title: '屋我地の魅力を伝えます',
        date: '2017.11.18',
        tags: [
          '観光地紹介',
          'アウトドア'
        ]
      };
      this.popularArticle = article;
      return;
    }
  }
}
</script>

<style>
:root {
  --main-color: #99CDFF;
  --title-color: #575757;
  --image-width: 370px;
  --image-height: 228.69px;
  --main-font: avenir;
  --sub-font: YuGothic;
}

#top-content-blog {
  text-align: center;
  -webkit-font-smoothing: antialiased;
}

.content-title {
  font-family: avenir heavy;
  font-size:24px;
  color: #575757;
  letter-spacing: 3px;
}

.blog-content {
  position: relative;
  display: flex;
  height: 400px;
  width: calc(370px * 2 + 45px);
  margin: 70px auto;
}

.article {
  /*position: absolute;*/
  height: 360px;
  width: var(--image-width);
  background: white;
  margin-right: 45px;
}

.label {
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  font-family: avenir black;
  font-size: 18px;
  color: var(--main-color);
}

.article-image {
  margin-top: 20px;
}

.article-image img {
  height: var(--image-height);
  width: var(--image-width);
  border-radius: 3px;
}

.article-date {
  font-family: var(--main-font) book;
  font-size: 14px;
  letter-spacing: 0.8px;
  margin-top: 10px;
  margin-bottom: 0;
  text-align: left;
  color: var(--title-color);
}

.article-title {
  font-family: var(--sub-font);
  font-weight: 500;
  font-size: 18px;
  margin-top: 3px;
  margin-bottom: 0;
  text-align: left;
  color: var(--title-color);
}

.article-tags {
  text-align: left;
  margin-top: 15px;
  font-family: var(--sub-font);
  font-size: 12px;
  color: var(--title-color);
  display: flex;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.article-tag {
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
}

.article-tag p {
  margin-top: -2px;
  margin-bottom: 0;
}

.article-tag:last-child {
  border: none;
}

</style>
