<template>
    <div>
        <button type="button" @click="click">{{ title }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "button in component"
            
        }
    },
    methods: {
        click() {
            alert(this.title);
        },
    },
}
</script>

<style scoped>
button {
    
        background-color: hotpink;
        border-radius: 10px;
        border-color: rgb(236, 168, 202);
        padding: 6px;
        font-size: 10px;
        margin: 5px;
        clear: both;
        overflow: hidden;
    
}
</style>