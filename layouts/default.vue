<template>
  <div style="position: relative; height: 100%; overflow: auto">
    <div
      id="header"
      style="height: 100%; overflow: auto">
      <Header></Header>
      <NuxtPage />
      <a-back-top
        id="back-top"
        target-container="#header"
        style="position: absolute" />
      <Search />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
</script>

<style scoped></style>
