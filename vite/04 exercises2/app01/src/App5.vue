<template>

    <div id="parent">
        <button @click="add">dodaj</button>
        <button @click="odejmij">odejmij</button><br>
        <h2>{{ count }}</h2>


        <div v-for="n in count" class="kolka"></div>
        
            <div class="child">
                <Child3></Child3>
            </div> 
                       <div class="child">
                <Child3>
                    
                    </Child3>
            </div> 
    </div>


</template>

<script>
import Child3 from "./components/Child3.vue";

export default {
    methods: {
        add() {
            this.$store.commit("plus")
          
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
        Child3
    }
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
.kolka {
    border-radius: 50%;
    background-color: hotpink;
    width: 20px;
    height: 20px;
    display: inline-block;
}

</style>