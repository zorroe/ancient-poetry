<template>
  <div class="h-screen w-screen overflow-auto flex flex-col">
    <Header :msg="msg"></Header>
    <div class="flex-1">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const msg = ref('支持搜索任意诗人及古诗内容')
</script>

<style scoped></style>
