<template>
  <div
    id="CreatPost"
    class="fixed z-50 bottom-0 h-full w-full overflow-hidden max-w-[500px]"
  >
    <div class="bg-black h-full w-full text-white overflow-auto">
      <div class="flex items-center justify-start py-4 max-w-[500px] mx-auto border-b border-b-gray-700">
        <button
          @click="
            userStore.isMenuOverlay = false;
            clearData();
          "
          class="rounded-full px-2"
        >
          <Icon name="mdi:close" size="25" />
        </button>
        <div class="text-[16px] font-semibold">
          New Thread
        </div>

      </div>

      <div
        id="Post"
        class="z-40 bottom-0 max-h-[100vh- 200px] w-full px-3 max-w-[500px] mx-auto"
      >
        <div class="py-2 w-full">
          <div class="flex items-center">
            <div class="flex items-center text-white">
              <img 
                src="https://picsum.photos/id/223/50" 
                alt=""
                class="rounded-full h-[35px]"
              >
              <div class="ml-2 font-semibold text-[18px]">
                John Weeks Dev
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { v4 as uuidv4 } from 'uuid'
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()
// const client = useSupabaseClient()
// const user = useSupabaseUser()

let file= ref(null)
let text = ref(null)
let fileData = ref(null)
let isLoading = ref(false)
let fileDisplay = ref(null)


const adjustTextareaHeight = () => {
  var textarea = document.getElementById("textarea");
  textarea.style.height = "auto"
  textarea.style.height = textarea.scrollHeight + "px"
}

const clearData = () => {
  text.value = null
  file.value = null
  fileDisplay.value = null
  fileData.value = null
}

const onChange = () => {
  fileDisplay.value = URL.createObjectURL(file.value.files[0])
  fileData.value =file.value.files[0]
}
</script>