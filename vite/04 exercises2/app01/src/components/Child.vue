<template>
    <div>
           <h2>{{ cInComp }}</h2>

    </div>
</template>

<script>
export default {
    computed: {
        cInComp() {
            return this.$store.state.c
        }
    }
}
</script>

<style lang="css" scoped></style>