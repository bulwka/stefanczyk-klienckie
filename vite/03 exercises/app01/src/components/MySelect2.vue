<template>
    <div>
        <select>
            <option v-for="ar in array1" :style="{ background: ar.color }" @click="alert('a')">{{ ar.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: ["array1", "colorsProp"],
    methods: {

    },
}
</script>

<style lang="scss" scoped></style>