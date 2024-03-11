<template>
  <div class="flex flex-col items-center">
    <div class="text-lg mt-16 font-bold">{{ props.data.title }}</div>
    <div class="text-xs text-gray-600 mt-4">
      {{ props.data.author }} - {{ props.data.dynasty }}
    </div>
    <div
      class="text-base mt-2 text-gray-800 text-center leading-loose"
      v-html="poetryContent"></div>
  </div>
</template>

<script setup lang="ts">
interface Poetry {
  id: number
  title: string
  author: string
  dynasty: string
  content: string
}

const props = defineProps<{
  data: Poetry
}>()

const poetryContent = computed(() => {
  const paragraphs = props.data.content.trim().split('。')
  var len = 0
  const newP = paragraphs.map(paragraph => {
    len += paragraph.length
    if (paragraph.length > 0) {
      if (len > 10) {
        len = 0
        return `${paragraph}。</br>`
      } else {
        return `${paragraph}。`
      }
    }
  })
  return newP.join('')
})
</script>

<style scoped></style>
