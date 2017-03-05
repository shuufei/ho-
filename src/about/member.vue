<template lang="pug">
div#member
  img(v-bind:src="image")
  div.profile
    p.name {{ name }}
    p.work {{ work }}
    p.description {{ description }}
    div.flex-wrapper
      div.sns-link
        i.icon-twitter(v-if="sns.twitter")
        i.icon-facebook(v-if="sns.facebook")
        i.icon-instagram(v-if="sns.instagram")
      p.articles-link 記事一覧へ
</template>

<script>
export default {
  name: 'member',
  components: {

  },
  data () {
    return {

    }
  },
  props: [
    'id',
    'name',
    'image',
    'work',
    'description',
    'sns'
  ],
  methods: {
    __method__: function (event) {

    }
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

#member {
  color: var(--title-color);
  display: flex;
  justify-content: center;
  & img {
    size: 100px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
    margin-right: 40px;
    margin-top: 20px;
  }
  & .profile {
    text-align: left;
    & .name {
      font-family: var(--sub-font);
      font-size: 18px;
      font-weight: 300;
      letter-spacing: 1px;
      margin: 0;
    }
    & .work {
      font-family: var(--main-font);
      font-size: 14px;
      font-style: oblique;
      font-weight: 200;
      letter-spacing: 1px;
      margin: 0;
      margin-top: 5px;
    }
    & .description {
      font-family: var(--sub-font);
      font-size: 13px;
      font-weight: 300;
      letter-spacing: 1px;
      margin: 0;
      margin-top: 20px;
      width: 320px;
    }
    & .flex-wrapper {
      align-items: center;
      display: flex;
      margin: 0;
      margin-top: 15px;
      & .sns-link {
        margin-right: 200px;
        & i {
          font-size: 18px;
          margin-right: 15px;
          @apply --hover-hand;
        }
        & .icon-twitter {
          color: #1DA1F2;
        }
        & .icon-facebook {
          color: #3B5998;
        }
        & .icon-instagram {
          color: #E4405F;
        }
      }
      & .articles-link {
        font-family: var(--sub-font);
        font-size: 14px;
        font-weight: 300;
        @apply --hover-hand;
      }
    }
  }
}
</style>
