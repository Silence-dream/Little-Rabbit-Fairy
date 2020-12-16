<template>
  <div>{{ name }}</div>
  <p>{{ useName }}</p>
  <router-view />
</template>

<script>
export default {
  computed: {
    useName() {
      return this.$store.state.login.useName;
    },
    name() {
      return this.$store.state.Liu.useName;
    },
  },
};
</script>

<style>
</style>