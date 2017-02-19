<template lang="pug">
div#content-order
  div.order-block
    select(name="order")
      option(value="newAsc") 新着順
      option(value="newDesc") 古い順
      option(value="popluarAsc") 人気順
    div.order-arrow
</template>

<script>
export default {
  name: 'content-order'
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

#content-order {

}

.order-block {
  & select {
    font-size: 14px;
    font-family: var(--sub-font);
    color: var(--title-color);
    margin: 10px;
    &:hover {
      @apply --hover-hand;
    }
  }
  & .order-arrow {
    position: relative;
    display: inline-block;
    &::before {
      content: '';
      width: 8px;
      height: 8px;
      border: 0px;
      border-top: solid 1.5px var(--title-color);
      border-right: solid 1.5px var(--title-color);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      transform: rotate(133deg);
      position: absolute;
      top: -12px;
    }
  }
}

select {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  border-radius: 0;
  outline: none;
  appearance: none;
}
</style>
