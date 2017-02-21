<template lang="pug">
div#article
  global-menu.menu-content
  side-block-associate.associate-block
  div.blog-title-block
    div.blog-title-under-line
      p.blog-title BLOG
  div.article-main-content {{ getArticle() }}
    div.article-content-block
      div.article-content-title
        p.date {{ date }}
        p.title {{ title }}
        div.tags
          ul
            li.tag(v-for="tag in tags")
              p {{ tag }}
      div.article-content-image
        img(v-bind:src="image")
      div.article-content-share
        div.share-count
          i.fi-heart
          p.count {{ share }}
          p.share-label share
        share.share-component
      div.article-content-text
        p(v-for="line in text") {{ line }}
      div.article-content-author
        p.author-label
        img()
        p.author-name
        p.author-profile
      share.share-component-after

    div.dummy-associate-block

</template>

<script>
import menu from './../common/menu.vue'
import sideBlock from './sideBlock.vue'
import share from './../common/share.vue'

export default {
  name: 'article',
  props: ['id'],
  data () {
    return {
    }
  },
  methods: {
    getArticle: function (event) {
      this.title = '屋我地の魅力を伝えます';
      this.image = '/dist/yagaji6.jpg';
      this.date = '2016.11.18';
      this.tags = [ '観光地紹介', '屋我地' ];
      this.share = 149;
      this.author = '/dist/atufumi.jpg';
      this.text = [
        'はいさい、みなさん。',
        '今日は屋我地の魅力についてとことん語っていきますよ！',
        '古宇利島に行くときにだいたい通るはずなのですが、屋我地の存在を知っている人は意外と少ないんです。。',
        '　',
        'そんな陽の当たらない屋我地を今日はとことん陽を浴びせていこうと思います！これを機に屋我地が人で溢れるとそれもそれで寂しくなりますが。',
        '　',
        '旅行に行ったときに迷うものランキングでお土産の次にランクインすると行っても過言ではないですからね。',
        '　',
        '屋我地の星空は素晴らしいですよ！',
        'バーベキューして星空を眺めながら釣りをするのが最高なんですよまた。。',
        'ずっと屋我地は今のままでいて欲しいですね。',
        '　',
        'そんなこんなで屋我地の紹介終わり！！次回は恩納村くらいを紹介しようかな！！'
      ];
    }
  },
  components: {
    'global-menu': menu,
    'side-block-associate': sideBlock,
    'share': share
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
  }
}

#article {
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
.article-main-content {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  & .article-content-block {
    position: relative;
    width: 580px;
    margin-right: 30px;
    text-align: left;
    & .article-content-title {
      color: var(--title-color);
      & p {
        margin: 0;
      }
      & .date {
        margin-top: 5px;
        font-family: var(--main-font);
        font-size: 16px;
        letter-spacing: 1px;
      }
      & .title {
        font-family: var(--sub-font);
        font-size: 22px;
        font-weight: 300;
        letter-spacing: 3px;
        margin-top: 3px;
      }
      & .tags {
        text-align: left;
        margin-top: 20px;
        font-family: var(--sub-font);
        font-weight: 400;
        font-size: 14px;
        color: var(--title-color);
        display: flex;
        letter-spacing: 2px;
        & ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          & li {
            margin-top: 0;
            margin-bottom: 0;
            margin-right: 15px;
            opacity: 0.6;
            display: inline-block;
            padding: 0;
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
    }
    & .article-content-image img {
      margin-top: 40px;
      height: 359px;
      width: 580px;
      border-radius: 3px;
    }
    & .article-content-share {
      margin-top: 10px;
      & .share-count {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: var(--main-color);
        & i {
          font-size: 24px;
          margin-right: 3px;
        }
        & p {
          margin: 0;
        }
        & .count {
          font-size: 22px;
          font-family: var(--main-font);
          font-weight: 500;
          margin-right: 3px;
        }
        & .share-label {
          font-size: 16px;
          font-family: var(--main-font);
          font-weight: 300;
          padding-top: 3px;
        }
      }
      & .share-component {
        margin-top: 20px;
      }
    }
    & .article-content-text {
      margin-top: 100px;
      & p {
        font-family: var(--sub-font);
        color: var(--title-color);
        font-size: 15px;
        margin: 0px 0 0;
        line-height: 2;
      }
    }
    & .share-component-after {
      margin-top: 100px;
    }
  }
  & .dummy-associate-block {
    width: 350px;
    height: 500px;
  }
}

.associate-block {
  position: fixed;
  top: 180px;
  left: 65%;
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
</style>
