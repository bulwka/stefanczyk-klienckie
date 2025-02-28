<template>
    <div>
        <p>Parent</p>
        <button @click="add">dodaj</button>
        <button @click="odejmij">odejmij</button><br>
        {{ count }}
        <p>children</p>
        <Child></Child>
        <Child></Child>

    </div>
</template>

<script>
import Child from "./components/Child.vue";
export default {
    methods: {
        add() {
            this.$store.commit("plus")
            console.log(this.$store.state.c)
        },
        odejmij() {
            this.$store.commit("minus")
        }
    },
    computed: {
        count() {
            return this.$store.state.c
        }
    },
    components: {
        Child
    }
}
</script>

<style lang="css" scoped></style>