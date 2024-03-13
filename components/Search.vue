<template>
  <div
    style="position: absolute; right: 25px; bottom: 80px"
    class="flex items-center gap-4">
    <a-input-search
      v-show="visible"
      placeholder="请输入诗人姓名或古诗标题" />
    <div class="w-10 min-w-10">
      <a-button
        shape="circle"
        size="large"
        type="primary"
        style="width: 40px; height: 40px"
        @click="handleClick"
        ><icon-search
      /></a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const visible = ref(false)

const handleClick = () => {
  visible.value = true
}
const handleBeforeOk = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return true
  // prevent close
  // return false;
}
const handleCancel = () => {
  visible.value = false
}
</script>

<style scoped></style>
