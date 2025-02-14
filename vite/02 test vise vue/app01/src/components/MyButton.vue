<template>
      <button class="b" @click="click">{{ title }}</button>
</template>

<script>
export default {
    data() {
        return {
            title: "button title",
        };
    },
    methods: {
        click() {
            alert(this.title);
        },
    },
};
</script>

<style scoped>
.b {
    font-size: 10px;
}
</style>