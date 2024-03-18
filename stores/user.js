import { defineStore } from "pinia";

export const useUserStore = defineStore('user', () => {
  const posts =ref([])
  const isMenuOverlay =ref(false)
  const isLogoutOverlay =ref(false)

  return {
    posts,
    isMenuOverlay,
    isLogoutOverlay
  }
})