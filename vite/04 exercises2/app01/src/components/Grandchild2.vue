<template>
    <div>
           <h2>{{ cInComp }}</h2>
        <button @click="addInComp">dodaj</button>
        <button @click="odejmijInComp">odejmij</button><br>

    </div>
</template>

<script>
export default {
    methods: {
        addInComp() {
            this.$store.commit("plus")
        },
        odejmijInComp() {
            this.$store.commit("minus")

        }
    },
    computed: {
        cInComp() {
            return this.$store.state.c
        }
    },

}
</script>

<style lang="css" scoped>
div {
    border: 2px outset magenta;
    margin: 10px;
    padding:10px;
}</style>