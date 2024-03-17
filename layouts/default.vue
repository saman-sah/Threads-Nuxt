<template>
  <div 
    id="MainLayout" 
    class="h-screen"
  >
    <div class="w-full max-w-[500px] mx-auto">
      <div
        id="TopMenu"
        class="w-full flex items-center justify-center px-2 h-10 my-2"
      >
      <img 
        src="/threads-logo.png" 
        alt="threads logo"
        class="w-[35px]"
      >
      </div>
    </div>

    <div class="flex w-full max-w-[500px] mx-auto h-screen">
      <slot />
    </div>

    <div 
      id="BottomNav"
      class="fixed z-50 bottom-0 flex w-full h-[70px] border-t border-t-gray-700 bg-black"
    >
      <div class="flex w-full max-w-[500px] mx-auto items-center justify-around">
        <button
          @click="navigateTo('/')"
          class="w-full h-full"
        >
          <Icon 
            name="material-symbols:home-outline-rounded" 
            color="#ffffff"
            size="35"
          />
        </button>
        <button
          @click="useStore.isMenuOverlay = true"
          class="w-full h-full"
        >
          <Icon 
            name="material-symbols:edit-square-outline-rounded" 
            color="#ffffff"
            size="32"
            class="mb-1"
          />
        </button>
        <button
          @click="useStore.isLogoutOverlay = true"
          class="w-full h-full"
        >
          <Icon 
            name="ph:sign-out" 
            color="#ffffff"
            size="32"
            class="mb-1"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/user"
const userStore = useUserStore()

console.log('userStore', userStore.posts);
</script>