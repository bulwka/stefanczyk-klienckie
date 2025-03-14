<template>

    <div id="app">
       
    <RouterView />
     
  </div>
</template>

<script>

export default {
  //zadanie lekcja 9
  mounted() {
    this.$store.dispatch("GET_POSTS_ACTION");
  },
};
</script>

<style scoped></style>
