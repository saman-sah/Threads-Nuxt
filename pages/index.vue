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
      >
        <Post
          :post="post"
          @isDeleted="posts = []"
        />
      </div>
    </div>
    <div v-else>
      <client-only>
        <div
          v-if="isLoading"
          class="mt-20 w-full flex items-center justify-center mx-auto"
        >
          <div class="text-white mx-auto flex flex-col items-center justify-center">
            <Icon
              name="eos-icons:bubble-loading"
              size="50"
              color="#ffffff"
            />
            <div class="w-full mt-1">
              Loading...
            </div>
          </div>
        </div>
        <div
          v-else
          class="mt-20 w-full flex items-center justify-center mx-auto"
        >
          <div class="text-white mx-auto flex flex-col items-center justify-center">
            <Icon
              name="tabler:mood-empty"
              size="50"
              color="#ffffff"
            />
            <div class="w-full mt-1">
              Make the first post!
            </div>
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/user"
const userStore = useUserStore()
const user = useSupabaseUser()

let posts = ref([])
let isPosts = ref(false)
let isLoading = ref(false)

watchEffect(() => {
  if (!user.value) {
      return navigateTo('/login')
  }
})

onBeforeMount(async () => {
  try {
    isLoading.value = true
    await userStore.getAllPosts()
  } catch (error) {
    console.log(error);
  } finally {
    isLoading = false
  }
})

onMounted(() => {
  watchEffect(() => {
    if (userStore.posts && userStore.posts.length ) {
        posts.value = userStore.posts
        isPosts.value = true
    }
  })
})

watch(() => posts.value, () => {
  if (userStore.posts && userStore.posts.length ) {
        posts.value = userStore.posts
        isPosts.value = true
    }
}, {deep: true})
</script>