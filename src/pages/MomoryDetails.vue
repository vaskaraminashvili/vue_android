<template>
  <base-layout :pageTitle="memory.title" PageDefaultBackLink="/memories">
    <h2 v-if="!memory">Could not find</h2>
    <h2 v-else>{{ memory.title }}</h2>
    <p>{{ memory.description }}</p>
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  computed: {
    memory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  // watch: {
  //   $router(currentRoute) {
  //     this.memoryId = currentRoute.params.id;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
</style>