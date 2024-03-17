<template>
  <div class="z-50 bottom-0 w-full h-full">
    <div class="py-2 w-full">
      <div class="flex items-center justify-between">

        <div class="flex items-center text-white">
          <img 
            :src="post.image" 
            alt="post image"
            class="rounded-full h-[35px]"
          >
          <div class="ml-2 font-semibold text-[18px]">
            {{ post.name }}
          </div>
        </div>

        <div
          @click="isMenu = !isMenu"
          class="relative"
        >
          <button
            :disabled="isDeleting"
            :class="[
              !isMenu || 'bg-gray-800',
              'flex items-center text-white p-1 h-[24px] w-[24px] hover:bg-gray-800 rounded-full cursor-pointer'
            ]"
          >
            <Icon
              v-if="!isDeleting"
              name="bi:three-dots"
              color="#ffffff"
              size="18"
            />
            <Icon
              v-else
              name="eos-icons:bubble-loading"
              color="#ffffff"
              size="18"
            />
          </button>
          <div
            v-if="isMenu"
            class="absolute border border-gray-600 right-0 z-20 mt-1 rounded"
          >
            <button class="flex items-center rounded gap-2 text-red-500 justify-between bg-black w-full pl-4 pr-3 py-1 hover:bg-gray-900">
              <div>Delete</div>
              <Icon
                name="solar:trash-bin-trash-broken"
                size="20"
              />
            </button>
          </div>
        </div>

      </div>
      <div class="relative flex items-center w-full">
        <div class="w-[42px] mx-auto">
          <div class="absolute ml-4 mt-1 top-0 w-[1px] bg-gray-700 h-full" />
        </div>
        <div class="bg-black rounded-lg w-[calc(100% - 50px)] text-sm w-full font-light">
          <div class="py-2 text-gray-300">
            {{ post.text }}
          </div>
          <img
            v-if="post.picture"
            :src="post.picture" 
            alt="Picture of Post"
            class="mx-auto w-full mt-2 pr-2 rounded"
          >
          <div class="absolute mt-2 w-full ml-2">
            <button
              :disabled="isLike"
              class="flex items-center gap-1"
            >
              <Icon
                name="mdi:cards-heart-outline"
                size="28"
                class="p-1 text-white hover:bg-gray-800 rounded-full cursor-pointer"
              />
            </button>
            <div class="relative text-sm text-gray-500">
              <div>
                <span>4</span>
                likes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative inline-block text-gray-500 pt-1 pb-1.5">
      <div class="flex items-center">
        <div class="flex items-center flex-wrap text-white gap-1 w-[42px]">
          <div class="flex gap-0.5">
            <img
              src="https://picsum.photos/id/202/50"
              alt=""
              class="rounded-full h-[14px] mt-2"
            >
            
            <img
              src="https://picsum.photos/id/223/50"
              alt=""
              class="rounded-full h-[14px] mt-2"
            >
          </div>
          <div class="flex items-center">
            <img 
              src="http://picsum.photos/id/99/50" 
              alt=""
              class="rounded-full h-[11px] ml-4"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="h-[1px] bg-gray-800 w-full mt-3" />
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/user"
const userStore = useUserStore()

const runTimeConfig = useRuntimeConfig()
let isMenu = ref(false)
let isLike = ref(false)
let isDeleting = ref(false)
defineProps({
  post: {
    type: Object,
    default: {}
  },
})

const emits = defineEmits([
  'isDeleted'
])

// const client = useSupabaseClient()
// const user = useSupabaseUser()
</script>