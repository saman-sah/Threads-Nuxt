import { defineStore } from "pinia";

export const useUserStore = defineStore('user', () => {
  const posts =ref([])
  const isMenuOverlay =ref(false)
  const isLogoutOverlay =ref(false)

  async function getAllPosts() {
    let res = await useFetch('/api/posts')
    posts.value = res.data
    return res.data
  }

  return {
    posts,
    isMenuOverlay,
    isLogoutOverlay,
    getAllPosts
  }
})