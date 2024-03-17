<template>
  <div class="bg-black fixed w-[calc(100%+1px)] h-full">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useUserStore } from './stores/user'
const useUser = useUserStore()
</script>
