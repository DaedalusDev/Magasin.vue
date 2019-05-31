<template>
  <div class="flex flex-center content-start">
    <img alt="Quasar logo" src="../../assets/logo.png">
    {{ id }}
  </div>
</template>

<script>
export default {
  name: 'Local',
  props: {
    id: {}
  }
}
</script>

<style scoped>

</style>
