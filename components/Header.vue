<template>
  <header class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="hidden md:block">
          <nav aria-label="Global">
            <ul class="flex items-center gap-6 text-sm">
              <li v-for="dynasty in dynasties">
                <a
                  class="text-gray-500 transition hover:text-gray-500/75"
                  href="#">
                  {{ dynasty }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const dynasties = ['先秦', '秦', '汉', '唐', '宋', '元', '明', '清', '其他']
</script>

<style></style>
