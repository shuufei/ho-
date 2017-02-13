<template lang="pug">
div#top-content-about
  p.content-title {{ contentName }}
  p.project-title-long Hello Okinawa !
  div.about-label-box
    p.label 「もっと身近におきなわを」をコンセプトに沖縄に関する情報を情報発信するサイト。
    p.label BLOGと旅INFOというコンテンツを通して、沖縄の暮らしと土地を感じることができるよう制作しています。
    p.label みなさんにとって沖縄をより身近に、そして、より好きになってもらえれば幸いです。
  div.members
    div.member(v-for="member in members")
      div.member-image
        img(v-bind:src="member.image")
      div.member-name
        p {{ member.name }}
      div.member-work
        p {{ member.work }}
  div.about-link(v-on:click="locateAboutPage()")
    p.about-link-label 詳細
</template>

<script>
export default {
  name: 'top-content-about',
  data () {
    return {
      contentName: 'ABOUT',
      members: [
        {
          image: './dist/atufumi.jpg',
          name: 'ふみふみ',
          work: 'bloger'
        },
        {
          image: './dist/ryusuke.jpg',
          name: 'パウエル',
          work: 'bloger'
        },
        {
          image: './dist/masahiro.jpg',
          name: 'ハマひろ',
          work: 'bloger'
        },
        {
          image: './dist/fei.jpg',
          name: 'fei',
          work: 'engineer'
        }
      ]
    }
  },
  methods: {
    locateAboutPage: function (event) {
      window.location.href = '/about';
    }
  }
}
</script>

<style scoped>
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

/*base*/
/*@font-face {
  font-family: susan;
  src: url(/Users/hanashiroshuuhei/Desktop/material/font/Susan.ttf) format("opentype");
}*/

#top-content-about {
  text-align: center;
  position: relative;
  -webkit-font-smoothing: antialiased;
  padding-top: 100px;
  padding-bottom: 100px;
}

.content-title {
  font-family: avenir;
  font-weight: 500;
  font-size:24px;
  color: #575757;
  letter-spacing: 1.5px;
}

.project-title-long {
  color: var(--main-color);
  font-family: susan;
  font-size: 26px;
  letter-spacing: 4px;
  margin-top: 100px;
  margin-left: 8px;
}

.about-label-box {
  font-family: var(--sub-font);
  font-size: 15px;
  font-weight: 300;
  color: var(--title-color);
  margin: 10px auto;
  letter-spacing: 2px;
}


.members {
  display: flex;
  width: calc(170px * 3 + 100px);
  margin: 100px auto 0;
}

.member {
  margin-right: 70px;
}

.member-image img {
  size: 100px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
}

.member-name {
  font-family: var(--sub-font);
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1px;
  color: var(--title-color);
  margin: 15px auto 0px;
}

.member-name p {
  margin-top: 0;
  margin-bottom: 0;
}

.member-work {
  font-family: avenir;
  font-style: oblique;
  font-size: 15px;
  color: var(--title-color);
  margin: 5px auto 0;
}

.member-work p {
  margin-top: 0;
  margin-bottom: 0;
}

.about-link {
  height: 40px;
  width: 230px;
  border: 1px solid var(--title-color);
  margin: 70px auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @apply --hover-hand;
  background: white;
}

.about-link-label {
  font-family: var(--sub-font);
  font-weight: 200;
  font-size: 14px;
  letter-spacing: 2px;
}

</style>
