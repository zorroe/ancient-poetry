<template>
  <div v-for="poetry in poetries">
    <Poetry :data="poetry"></Poetry>
  </div>
  <div class="w-full flex justify-center my-4">
    <a-pagination
      :total="total"
      :page-size="pageSize"
      show-total
      @change="handleChange" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { queryPoetry, queryPoetryCount } from '~/api/index'

const route = useRoute()

const dynasty = ref('唐')
const pageNum = ref(1)
const pageSize = ref(10)
const total = ref(0)

const poetries = ref([])

const queryData = async () => {
  const params = {
    dynasty: dynasty.value,
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  }

  const { data } = await queryPoetry(params)
  poetries.value = data
}

const queryCount = async () => {
  const params = {
    dynasty: dynasty.value,
  }
  const { data } = await queryPoetryCount(params)
  total.value = data
  pageNum.value = Math.ceil(data / pageSize.value)
}

const loadData = async () => {
  await queryData()
  await queryCount()
}

const handleChange = async (page: number) => {
  pageNum.value = page
  await queryData()
  document.getElementById('back-top')?.click()
}

onMounted(() => {
  const d = route.params.dynasty as string
  if (d) {
    dynasty.value = d
  }
  loadData()
})
</script>

<style scoped></style>
