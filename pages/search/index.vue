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
import { queryPoetryByAuthorOrTitle } from '~/api/index'
const route = useRoute()
const router = useRouter()

const key = ref('')
const pageNum = ref(1)
const pageSize = ref(10)
const total = ref(0)

const poetries = ref()

const handleSearch = async () => {
  const params = {
    key: key.value,
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  }
  const { data } = await queryPoetryByAuthorOrTitle(params)
  poetries.value = data.list
  total.value = data.total
}

const handleChange = async (page: number) => {
  pageNum.value = page
  await handleSearch()
  document.getElementById('back-top')?.click()
}

watch(
  () => route.query.key,
  newVal => {
    key.value = newVal as string
    handleSearch()
  }
)

onMounted(() => {
  const params = route.query
  key.value = params.key as string
  handleSearch()
})
</script>

<style scoped></style>
