<template>
    <div>
           <h2>{{ cInComp }}</h2>
        <button @click="addInComp">dodaj</button>
        <button @click="odejmijInComp">odejmij</button><br>
        <!-- <button @click="change">change</button><br> -->
        <div v-for="n in cInComp" class="kolka"></div>
        <Grandchild2></Grandchild2>
    </div>
</template>

<script>
import Grandchild2 from "./Grandchild2.vue";
export default {
    methods: {
        addInComp() {
            this.$store.commit("plus")
        },
        odejmijInComp() {
            this.$store.commit("minus")

        },
        // change() {
        //     this.$store.commit("changeInStore", 5);
        // }
    },
    computed: {
        cInComp() {
            return this.$store.state.c
        }
    },
    components: {
        Grandchild2
    },

}
</script>

<style lang="css" scoped>
.kolka {
    border-radius: 50%;
    background-color: pink;
    width: 20px;
    height: 20px;
    display: inline-block;
}</style>