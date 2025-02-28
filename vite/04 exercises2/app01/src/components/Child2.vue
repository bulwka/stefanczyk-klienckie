<template>
    <div>
           <h2>{{ cInComp }}</h2>
        <button @click="addInComp">dodaj</button>
        <button @click="odejmijInComp">odejmij</button><br>
        <!-- <button @click="change">change</button><br> -->

        <Grandchild></Grandchild>
    </div>
</template>

<script>
import Grandchild from "./Grandchild.vue";
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
        Grandchild
    },

}
</script>

<style lang="css" scoped></style>