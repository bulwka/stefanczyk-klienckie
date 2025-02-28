<template>
  <div>
    <button @click="add">dodaj</button>
    <button @click="odejmij">odejmij</button><br>
    {{ count }}
  </div>
</template>

<script>

export default {
  methods: {
    add() {
      this.$store.commit("plus")
      console.log(this.$store.state.c)
    },
    odejmij() {
      this.$store.commit("minus")
    }
  },
  computed: {
    count() {
      return this.$store.state.c
    }
  }

}

</script>

<style lang="scss" scoped></style>