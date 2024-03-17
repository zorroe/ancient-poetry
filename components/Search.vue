<template>
  <div
    style="position: absolute; right: 25px; bottom: 80px"
    class="flex items-center gap-4">
    <a-input
      v-show="visible"
      ref="searchInputRef"
      v-model="form.keyword"
      @press-enter="handleSearch"
      @blur="handleBlur"
      placeholder="请输入诗人姓名、标题或内容" />
    <div class="w-10 min-w-10">
      <a-button
        shape="circle"
        size="large"
        type="primary"
        style="width: 40px; height: 40px"
        @click="handleClick">
        <icon-search/>
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const visible = ref(false)
const searchInputRef = ref()
const searchVal = ref('')
import { Message } from '@arco-design/web-vue'

const form = ref({
  keyword: '',
})

const handleClick = () => {
  if (visible.value === false) {
    visible.value = true
    setTimeout(() => {
      searchInputRef.value.focus()
    }, 0)
  } else {
    handleSearch()
  }
}

const handleSearch = () => {
  // 执行搜索操作
  if (form.value.keyword.trim() === '') {
    Message.error('请输入搜索关键字')
    return
  }
  // 跳转到搜索页面，将搜索参数隐式传递过去
  router.push({
    path: '/search',
    query: {
      keyword: form.value.keyword.trim(),
      a: '1',
      t: '1',
      c: '1',
    },
  })
  visible.value = false
}

const handleBlur = () => {
  visible.value = false
  searchVal.value = ''
}
</script>

<style scoped></style>
