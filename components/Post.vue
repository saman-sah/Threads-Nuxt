<template>
  <div class="z-50 bottom-0 w-full h-full">
    <div class="py-2 w-full">
      <div class="flex items-center justify-between">

        <div class="flex items-center text-white">
          <img 
            :src="post.image" 
            alt="post image"
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
              'flex items-center text-white p-1 h-[24px] w-[24px] hover:bg-gray-800 rounded-md'
            ]"
          >
            <Icon
              v-if="!isDeleting"
              name=""
              color="#ffff"
              size="18"
            />
            <Icon
              v-else
              name=""
              color="#ffff"
              size="18"
            />
          </button>
        </div>

      </div>
    </div>
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