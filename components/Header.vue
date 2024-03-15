<template>
  <header>
    <a-alert
      banner
      center
      closable
      :show-icon="false"
      v-show="alertShow"
      @close="handleClose"
      >{{ props.msg }}</a-alert
    >
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-center gap-8">
        <NuxtLink
          :to="'/list/' + dynasty"
          v-for="dynasty in dynasties"
          class="text-gray-500 transition hover:text-gray-500/75">
          {{ dynasty }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const dynasties = ['唐', '宋', '元', '明', '清']

const props = defineProps({
  msg: {
    type: String,
    required: false,
    default: '',
  },
})

const alertShow = ref(false)

const handleClose = () => {
  alertShow.value = false
  localStorage.setItem('alert-hidden', '1')
}

onMounted(() => {
  const alertHidden = localStorage.getItem('alert-hidden') ? 1 : 0
  if (!alertHidden) {
    alertShow.value = true
  }
})
</script>

<style></style>
