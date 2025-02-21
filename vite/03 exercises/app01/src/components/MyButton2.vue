<template>
    <div>
        <button :style="{ background: prop2 }" type="button" @click="click"> {{ prop1 }} </button>
        <p>background passed from app: {{ prop2 }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "button"
        }
    },
    methods: {
        click() {
            alert(this.title);
        },
    },
    props: ["prop1", "prop2"]
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