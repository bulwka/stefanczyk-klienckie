<template>
  <div id="main">
    <h1>{{ title }}</h1>
    <h4>1. Button in component, style in component</h4>
    <MyButton></MyButton>
    <h4>2. Button in component, title and bg passed from app</h4>
    <MyButton2 :prop1="button2Title" :prop2="button2BgColor"></MyButton2>
    <h4>3. Select in component, array in component</h4>
    <MySelect></MySelect>
    <h4>4. Select in component, array passed from app</h4>
    <MySelect2 :array1="numbers"></MySelect2>

  </div>
</template>

<script>
import MyButton from "./components/MyButton.vue";
import MyButton2 from "./components/MyButton2.vue";
import MySelect from "./components/MySelect.vue";
import MySelect2 from "./components/MySelect2.vue";
export default {
  data() {
    return {
      title: "01 start Vue + Vite",
      button2Title: "button in component title passed from app",
      button2BgColor: "red",
      numbers: [
        {name:"aaa", color: "hotpink"},
        {name: "bbb", color: "pink"}, 
        {name: "ccc", color:"lightpink"}
      ],

    }
  },
  components: {
    MyButton,
    MyButton2,
    MySelect,
    MySelect2,
  },
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