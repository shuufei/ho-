<template lang="pug">
div#share-count
  i.fi-heart
  p {{ count }}
</template>

<script>
export default {
  name: 'share-count',
  props: [
    'count'
  ]
}
</script>

<style>
:root {
  --main-color: #99CDFF;
  --title-color: #575757;
  --main-font: avenir;
}

#share-count {
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
    margin:0;
    padding: 0;
  }
}

</style>
