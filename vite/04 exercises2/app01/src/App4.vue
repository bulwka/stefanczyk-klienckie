<template>

    <div id="parent">
        <button @click="add">dodaj</button>
        <button @click="odejmij">odejmij</button><br>
        {{ count }}
            <div class="child">
                <Child2></Child2>
            </div> 
                       <div class="child">
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
    },

}
</script>

<style lang="css" scoped>
#parent {
    border: 2px outset hotpink;
    margin: 10px;
    padding:10px;
}
.child {
    border: 2px outset pink;
    margin: 10px;
    width: 80%;
    padding:10px;
}


</style>