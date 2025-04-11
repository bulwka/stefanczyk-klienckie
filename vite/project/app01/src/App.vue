<template>

    <div id="app">
       
    <RouterView />
     
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  //zadanie lekcja 9
  mounted() {
    this.$store.dispatch("GET_POSTS_ACTION");
  },
  components: { Header }
};
</script>

<style scoped></style>
