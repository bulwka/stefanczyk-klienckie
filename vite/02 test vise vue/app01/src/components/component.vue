<template>
    <div>
        {{ title }}
        late>
          <button class="b" @click="click">{{ title2 }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "komponent! :3",
            title2: "button in component"
        }
    }
}
</script>

<style scoped>
div {
    border: 2px outset cadetblue;
    margin: 10px;
    color: cadetblue
}

.b {
    color: rgb(241, 223, 223)
}
</style>