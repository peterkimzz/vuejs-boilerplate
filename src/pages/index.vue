<template>
  <div class="home">
    <img 
      alt="Vue logo" 
      :src="require('src/assets/imgs/logo.png')">
    <h1>Vuejs Boilerplate</h1>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
img {
  background-color: $oc-gray-1;
  padding: 30px;
}
</style>