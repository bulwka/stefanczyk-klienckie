<template>
    <div>
        <select>
            <option v-for="num in array">{{ num }}</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            array: [1, 2, 3]
        }
    },
}
</script>

<style lang="scss" scoped></style>