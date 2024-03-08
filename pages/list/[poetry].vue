<template>
  <div class="text-2xl">白日依山尽，黄河入海流</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { queryPoetry } from '~/api/index'

const route = useRoute()

const dynasty = ref('唐')
const pageNum = ref(1)
const pageSize = ref(10)

const queryData = async () => {
  const params = {
    dynasty: dynasty.value,
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  }

  const data = await queryPoetry(params)

  console.log(data)
}

onMounted(() => {
  const d = route.params.dynasty as string
  if (d) {
    dynasty.value = d
  }
  queryData()
})
</script>

<style scoped></style>
