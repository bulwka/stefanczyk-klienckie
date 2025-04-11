<template>

  <div id="app">
    <RouterView />

  </div>
</template>

<script>

export default {

  mounted() {
    this.$store.dispatch("GET_POSTS_ACTION");
  },

};
</script>

<style scoped>
#app {
  padding: 0;
}
</style>
