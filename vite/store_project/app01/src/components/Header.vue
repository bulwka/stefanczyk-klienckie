<template>
    <nav>
        <div>
            <RouterLink to="/" exact>Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/nnn">Not found</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
    /* background-color: hotpink; */
    /* height: 25px; */
    padding-top: 12px;
    margin-bottom: auto;
}

a {
    color: rgb(255, 241, 244);
    padding: 10px;

}

a:hover {
    text-decoration: underline;
    background-color: #d96683;
}

nav {
    background-color: #d96683;
    height: 50px;
}
</style>