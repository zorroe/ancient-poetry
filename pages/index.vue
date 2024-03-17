<template>
  <div class="w-full h-full flex flex-col items-center">
    <a-input-search
      style="width: 300px; height: 40px; margin-top: 40px"
      placeholder="请输入诗人姓名、标题或内容"
      v-model="form.keyword"
      @search="handleSearch"
      @press-enter="handleSearch" />
    <div class="w-full flex justify-center gap-4 mt-10">
      <a-checkbox v-model="form.isAuthor"> 搜索诗人名 </a-checkbox>
      <a-checkbox v-model="form.isTitle"> 搜索古诗名 </a-checkbox>
      <a-checkbox v-model="form.isContent"> 搜索内容 </a-checkbox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Message } from '@arco-design/web-vue'

const router = useRouter()

definePageMeta({
  layout: 'home',
})

const form = ref({
  keyword: '',
  isAuthor: true,
  isTitle: true,
  isContent: true,
})

const handleSearch = async () => {
  console.log('开始搜索')
  const params = form.value

  if (!params.keyword) {
    Message.error('请输入搜索关键字')
    return
  }

  if (!params.isAuthor && !params.isTitle && !params.isContent) {
    Message.error('请选择搜索类型')
    return
  }
  router.push({
    path: '/search',
    query: {
      keyword: params.keyword,
      a: params.isAuthor ? '1' : '0',
      t: params.isTitle ? '1' : '0',
      c: params.isContent ? '1' : '0',
    },
  })
}
</script>

<style scoped></style>
