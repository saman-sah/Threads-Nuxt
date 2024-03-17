<template>
  <div 
    id="IndexPage"
    class="w-full overflow-auto"
  >
    <div
      v-if="isPosts"
      class="mx-auto max-w-[500px] overflow-hidden"
    >
      <div
        v-for="post in posts"
        :key="post"
        class="text-white"
      >
        <Post
          :post="post"
          @isDeleted="posts = []"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/user"
const userStore = useUserStore()

let posts = ref([])
let isPosts = ref(true)
let isLoading = ref(false)

console.log('index page user store',userStore);
onBeforeMount(() => {
  posts.value = [
    {
      name: 'saman'
    }
  ]
})
</script>