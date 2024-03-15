<template>
  <div class="w-full h-full flex justify-center">
    <a-input-search
      :style="{ width: '320px', height: '40px', marginTop: '40px' }"
      placeholder="请输入诗人姓名或古诗标题" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
</script>

<style scoped></style>
