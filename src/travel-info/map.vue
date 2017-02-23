<template lang="pug">
div#travel-info-map
  p map
</template>

<script>
export default {
  name: 'travel-info-map'
}
</script>

<style>
:root {
  --map-background: #E2F2FC;
}

#travel-info-map {
  height: 330px;
  width: 460px;
  background: var(--map-background);
  border-radius: 3px;
}
</style>
