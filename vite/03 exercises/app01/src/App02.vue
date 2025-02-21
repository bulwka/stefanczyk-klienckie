<template>
    <div id="main">
      <h1>{{ title }}</h1>
      <div class="auta" v-for="car in json">
        <div :style="{ background: car.hex_color }">kolor auta</div>
        <div></div>
      <p>id: {{car.id}}<br>name: {{car.car_name}}</p></div>
    </div>
  </template>
  
  <script>
//   import MyButton from "./components/MyButton.vue";
  import JsonData from "./data/cars";
  export default {
    data() {
      return {
        title: "02 Cars -> template in App",
        json: JsonData,
      }
    },
    components: {
    //   MyButton,

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

  .auta {
    display: inline-block;
    width: 150px;
    margin: 10px;
  }
  p {
    background-color: pink;
    border-radius: 10px;
    padding: 5px;
    font-size: 13px;
    text-align:center;
  }
  </style>