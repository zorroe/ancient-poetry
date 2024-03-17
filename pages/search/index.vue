<template>
  <div v-for="poetry in poetries">
    <Poetry :data="poetry"></Poetry>
  </div>
  <div
    class="w-full flex justify-center my-4"
    v-show="total > pageSize">
    <a-pagination
      :total="total"
      :page-size="pageSize"
      show-total
      @change="handleChange" />
  </div>
</template>

<script setup lang="ts">
import { queryPoetryByEs } from '~/api/index'
const route = useRoute()

const keyword = ref('')
const isAuthor = ref(true)
const isTitle = ref(true)
const isContent = ref(true)
const pageNum = ref(1)
const pageSize = ref(10)
const total = ref(0)

const poetries = ref()

const handleSearch = async () => {
  const params = {
    keyword: keyword.value,
    isAuthor: isAuthor.value,
    isTitle: isTitle.value,
    isContent: isContent.value,
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  }
  if (!params.keyword) {
    Message.error('请输入搜索关键字')
    return
  }

  if (!params.isAuthor && !params.isTitle && !params.isContent) {
    Message.error('请选择搜索类型')
    return
  }
  const { status, data } = await queryPoetryByEs(params)
  if (status !== 200) {
    Message.error('查询失败')
    return
  }
  poetries.value = data.list
  total.value = data.total
}

const handleChange = async (page: number) => {
  pageNum.value = page
  await handleSearch()
  document.getElementById('back-top')?.click()
}

watch(
  () => route.query.keyword,
  newVal => {
    keyword.value = newVal as string
    handleSearch()
  }
)

const initParams = () => {
  keyword.value = route.query.keyword as string
  const a = route.query.a as string
  const t = route.query.t as string
  const c = route.query.c as string
  if (a === '1') {
    isAuthor.value = true
  } else {
    isAuthor.value = false
  }
  if (t === '1') {
    isTitle.value = true
  } else {
    isTitle.value = false
  }
  if (c === '1') {
    isContent.value = true
  } else {
    isContent.value = false
  }
}

onMounted(() => {
  initParams()
  handleSearch()
})
</script>

<style scoped></style>
