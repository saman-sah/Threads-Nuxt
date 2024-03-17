<template>
  <div
    id="CreatPost"
    class="fixed z-50 bottom h-full w-full overflow-hidden"
  >
    <div class="bg-black h-full w-full text-white overflow-auto">
      <div class="flex items-center justify-start py-4 max-w-[500px] mx-auto border-b border-b-gray-700">
        <button
          @click="
            useStore.isMenuOverlay = false;
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
    </div>
  </div>
</template>

<script setup>
import { v4 as uuidv4 } from 'uuid'
import { useUserStore } from '~/stores/user'
const useStore = useUserStore()
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