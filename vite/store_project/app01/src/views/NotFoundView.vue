<template>
    <Header></Header>
    <div>
        <h1>PAGE NOT FOUND</h1>
    </div>

    <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
    components: {
        Header, Footer

    }
}
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>