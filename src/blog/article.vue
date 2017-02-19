<template lang="pug">
div#article
  h1 {{ id }}
</template>

<script>
export default {
  name: 'article',
  props: ['id'],
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
