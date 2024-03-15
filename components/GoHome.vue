<template>
  <div
    style="position: absolute; right: 25px; bottom: 140px"
    class="flex items-center gap-4">
    <div class="w-10 min-w-10">
      <a-button
        shape="circle"
        size="large"
        type="primary"
        style="width: 40px; height: 40px"
        @click="handleClick"
        ><icon-home
      /></a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const handleClick = () => {
  router.push('/')
}
</script>

<style scoped></style>
