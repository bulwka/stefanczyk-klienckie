<template>
  <div id="main">
    <h1>{{ title }}</h1>
    <h4>1. Button in component, style in component</h4>
    <MyButton></MyButton>
    <h4>2. Button in component, title and bg passed from app</h4>
    <MyButton2 :prop1="button2Title" :prop2="button2BgColor"></MyButton2>
  </div>
</template>

<script>
import MyButton from "./components/MyButton.vue";
import MyButton2 from "./components/MyButton2.vue";
export default {
  data() {
    return {
      title: "01 start Vue + Vite",
      
    }
  },
  components: {
    MyButton,
  },
  props: [
    "prop1", "prop2"
  ],
}
</script>

<style scoped>
h1 {
  color: hotpink;
}

h4 {
  text-decoration: underline;
  font-weight: lighter;
}
</style>