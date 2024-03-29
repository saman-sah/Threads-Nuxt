import { defineStore } from "pinia";

export const useUserStore = defineStore('user', () => {
  const posts =ref([])
  const isMenuOverlay =ref(false)
  const isLogoutOverlay =ref(false)

  async function getAllPosts() {
    let res = await $fetch('/api/posts')
    posts.value = res
    return res
  }

  return {
    posts,
    isMenuOverlay,
    isLogoutOverlay,
    getAllPosts
  }
})