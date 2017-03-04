<template lang="pug">
div#side-block-associate
  p.side-block-title SPOT
  div.associate-spot-block
    div.associate-spot(v-for="spot in spots")
      img(v-bind:src="spot.image")
      div.info
        p.name {{ spot.name }}
        i.fi-star(v-for="i in spot.score")
</template>

<script>
export default {
  name: 'side-block-associate',
  data () {
    return {
      title: 'side-block-associate',
      spots: [
        {
          id: 1,
          name: '美ら海水族館',
          score: 5,
          image: '/dist/tyuraumi.jpg'
        },
        {
          id: 2,
          name: '首里城',
          score: 4,
          image: '/dist/shuri.jpg'
        },
        {
          id: 3,
          name: 'パイナップルパーク',
          score: 2,
          image: '/dist/pinapo.jpg'
        }
      ]
    }
  }
}
</script>

<style>
:root {
  --main-color: #99CDFF;
  --title-color: #575757;
  --fotter-color: #95989A;
  --star-color: #B7D4E6;
  --main-font: avenir;
  --sub-font: "Noto Sans Japanese";
  --hover-hand: {
    cursor: pointer;
    cursor: hand;
  }
}

#side-block-associate {
  height: 500px;
  width: 350px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  text-align: left;
  color: var(--title-color);
  & .side-block-title {
    margin-top: 25px;
    margin-left: 25px;
    font-family: var(--main-font);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 2px;
  }
  & .associate-spot-block {
    margin-top: 30px;
    margin-left: 25px;
    & .associate-spot {
      display: flex;
      margin-bottom: 25px;
      & img {
        height: 98px;
        width: 150px;
        border-radius: 3px;
        @apply --hover-hand;
      }
      & .info {
        margin-left: 10px;
        width: 135px;
        & .name {
          margin: 0;
          font-family: var(--sub-font);
          color: var(--title-color);
          letter-spacing: 2px;
          font-size: 13px;
          font-weight: 300;
          margin-bottom: 5px;
          @apply --hover-hand;
        }
        & .fi-star {
          color: var(--star-color);
          margin-right: 3px;
        }
      }
    }

  }
}
</style>
