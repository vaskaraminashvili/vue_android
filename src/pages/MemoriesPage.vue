<template>
  <base-layout pageTitle="asdasd as">
    <h2>This are all memorues</h2>
    <ion-list>
      <ion-item
        v-for="memory in memories"
        v-text="memory.title"
        :key="memory.id"
        :router-link="`/memories/${memory.id}`"
      ></ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem } from "@ionic/vue";
export default {
  components: {
    IonList,
    IonItem,
  },
  data() {
    return {};
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>