<template lang="pug">
div#share
  a.facebook-share(href="https://www.facebook.com/sharer/sharer.php")
    i.icon-facebook
  a.twitter-share(href="https://twitter.com/intent/tweet")
    i.icon-twitter
  a.hatebu-share(href="http://b.hatena.ne.jp/entry/")
    i.icon-googleplus
  a.pocket-share(href="http://widgets.getpocket.com/v1/button")
    i.icon-pocket
</template>

<script>
export default {
  name: 'share'
}
</script>

<style>

#share {
  display: flex;
  justify-content: center;
  position: relative;
  & a {
    text-decoration: none;
    color: white;
    display: inline;
    padding: 11px 40px 6px;
    border-radius: 3px;
    margin-right: 10px;
    font-size: 17px;
    &:visited {
      color: white;
    }
  }
  & .facebook-share {
    background: #5A73AB;
  }
  & .twitter-share {
    background: #77BDF1;
  }
  & .hatebu-share {
    background: #33A5E5;
  }
  & .pocket-share {
    background: #DC737B;
  }

}
</style>
