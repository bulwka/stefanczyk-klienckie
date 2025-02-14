<template>
    <div id="main">
        {{ message }}
     

    <!-- <MyButton></MyButton> -->
    <component>
    </component>
    <component>
    </component>
    <component>
    </component>
  </div>
</template>

<script>
import MyButton from "./components/MyButton.vue";
import component from "./components/component.vue";
export default {
  data() {
    return {
      message: 'To jest aplikacja',
    };
  },
  components: { MyButton, component }
};
</script>

<style>
#main {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: hotpink;
  border: 1px outset hotpink
}
</style>
