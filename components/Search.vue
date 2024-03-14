<template>
  <div
    style="position: absolute; right: 25px; bottom: 80px"
    class="flex items-center gap-4">
    <a-input
      v-show="visible"
      ref="searchInputRef"
      v-model="searchVal"
      @press-enter="handleSearch"
      @blur="handleBlur"
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
const router = useRouter()
const visible = ref(false)
const searchInputRef = ref()
const searchVal = ref('')

const handleClick = () => {
  if (visible.value === false) {
    visible.value = true
    console.log(searchInputRef.value)
    setTimeout(() => {
      searchInputRef.value.focus()
    }, 0)
  } else {
    handleSearch()
  }
}

const handleSearch = () => {
  // 执行搜索操作
  visible.value = false
  console.log('执行搜索操作')
}

const handleBlur = () => {
  const params = {
    key: searchVal.value,
  }
  router.push({
    path: '/search',
    query: params,
  })
  visible.value = false
  searchVal.value = ''
}
</script>

<style scoped></style>
