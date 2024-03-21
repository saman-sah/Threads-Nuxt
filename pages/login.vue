<template>
  <div
    id="AuthPage"
    class="w-full h-screen pt-32"
  >
    <div class="w-full">
      <div class="w-full flex items-center justify-center gap-2.5 p-2">
        <img 
          src="/threads-logo.png" 
          alt="Threads Logo"
          class="w-[35px]"
        >
        <span class="font-bold text-2xl text-white">
          Threads
        </span>
      </div>
      <div class="max-w-[350px] mx-auto px-2 text-white">
        <div class="text-center mb-6 mt-4">
          Login / register
        </div>
        


        <div>

          <input type="email" v-model="userData.email" class="bg-black border-white ">
          <hr class="my-4">
            <input type="password" v-model="userData.password" class="bg-black border-white ">
            <hr class="my-4">
            <input type="text" v-model="userData.fullname" class="bg-black border-white ">


          <div class="w-full">
                <div class="flex flex-col gap-2 py-1">
                  <div v-if="fileDisplay">
                    <img 
                      :src="fileDisplay" 
                      alt=""
                      class="mx-auto w-full mt-2 rounded-lg"
                    >
                  </div>
                  <label for="fileInput">
                    <Icon 
                      name="clarity:paperclip-line"
                      color="#ffffff"
                      size="25"
                    />
                    <input 
                      ref="file"
                      type="file"
                      id="fileInput"
                      @input="onChange"
                      hidden
                      accept=".jpg, .jpeg, .png"
                    />
                  </label>
                </div>
              </div>




        </div>
        
        <button
          @click="signInWithEmail" 
          class="flex items-center justify-center gap-3 p-1.5 w-full border rounded-full text-lg font-semibold"
        >
          <div class="flex items-center gap-2 justify-center">
            
            <img 
              src="/github-logo.png" 
              alt="github logo"
              class="w-full max-w-[30px] rounded-full"
            >
            Sign In
          </div>
        </button>
        <button
          @click="signUpNewUser" 
          class="flex items-center justify-center gap-3 p-1.5 w-full border rounded-full text-lg font-semibold"
        >
          <div class="flex items-center gap-2 justify-center">
            
            <img 
              src="/github-logo.png" 
              alt="github logo"
              class="w-full max-w-[30px] rounded-full"
            >
            Sign Up
          </div>
        </button>
        <button
          @click="uploadfile" 
          class="flex items-center justify-center gap-3 p-1.5 w-full border rounded-full text-lg font-semibold"
        >
          <div class="flex items-center gap-2 justify-center">
            
            <img 
              src="/github-logo.png" 
              alt="github logo"
              class="w-full max-w-[30px] rounded-full"
            >
            Upload File
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { v4 as uuidv4 } from 'uuid'

const client = useSupabaseClient()
const user = useSupabaseUser()

let file= ref(null)
let fileData = ref(null)
let fileDisplay = ref(null)

watchEffect(() => {
  if(user.value) {
    return navigateTo('/')
  }
})
const userData = reactive({
  email: null,
  password: null,
  fullname: null,
})
// const login = async (prov) => {
//   try {
//     const  { data, error } = await client.auth.signInWithOAuth({
//       provider: prov,
//       redirectTo: window.location.origin
//     })
//   } catch (error) {
//     console.log('error', error);
//   }
// }
const onChange = () => {
  fileDisplay.value = URL.createObjectURL(file.value.files[0])
  fileData.value =file.value.files[0]
}
async function signInWithEmail() {
  const { data, error } = await client.auth.signInWithPassword({
    email: userData.email,
    password: userData.password,
  })
  console.log('data', data);
}

async function uploadfile() {
  console.log(fileData.value);
  if(fileData.value) {
      const { data, error } = await client.storage
      .from('threads-nuxt')
      .upload(`111.jpg`, fileData.value)
      console.log('data', data);
      console.log('error', error);
    }

}

async function signUpNewUser() {
  let dataOut = null;
  let errorOut = null;
  try {
    const { data, error } = await client.auth.signUp({
      email: userData.email,
      password: userData.password,
      options: {
        emailRedirectTo: '/',
      },
    })
    console.log('data', data);
    if(fileData.value) {
      const { data, error } = await client.storage
      .from('threads-nuxt')
      .upload(`${uuidv4}.jpg`, fileData.value)

      dataOut = data;
      errorOut = error;
    }
    if(errorOut) {
      console.log(errorOut)
      return errorOut
    }

    let pic =''
    let userId = data.user.value.identities[0].user_id
    console.log('userId', userId);
    if(dataOut) {
      pic = dataOut.path ? dataOut.path : ''
    }
    try {
      
      await $fetch('/api/user', {
        method: 'POST',
        body: {
          userId: userId,
          name: userData.fullname,
          image: pic,
        }
      })

      await userStore.getAllPosts()
      userStore.isMenuOverlay = false;
      clearData();
      isLoading.value = false
    } catch (error) {
      console.log('error', error);
      isLoading = false
    }
  } catch (error) {
    console.log('error', error);
  }
}
</script>
