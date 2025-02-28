<template>

    <div>Parent
        <button @click="add">dodaj</button>
        <button @click="odejmij">odejmij</button><br>
        {{ count }}

        <div>
            children
            <Child2></Child2>
            <Child2></Child2>
        </div>
    </div>


</template>

<script>
import Child2 from "./components/Child2.vue";
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
        Child2
    }
}
</script>

<style lang="css" scoped>
div {
    border: 2px outset hotpink;
    margin: 10px
}
</style>