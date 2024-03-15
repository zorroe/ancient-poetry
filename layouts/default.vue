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
      <GoHome />
      <Search />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
