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
        <input type="email" v-model="userData.email" class="bg-black">
        <hr class="my-4">
            <input type="password" v-model="userData.password" class="bg-black">
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
      </div>
    </div>
  </div>
</template>

<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

watchEffect(() => {
  if(user.value) {
    return navigateTo('/')
  }
})
const userData = reactive({
  email: null,
  password: null
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

async function signInWithEmail() {
  const { data, error } = await client.auth.signInWithPassword({
    email: userData.email,
    password: userData.password,
  })
  console.log('data', data);
}
async function signUpNewUser() {
  try {
    const { data, error } = await client.auth.signUp({
      email: userData.email,
      password: userData.password,
      fullname: 'Saman Sahraei',
      avatar: 'http://picsum.photos/id/99/50',
      options: {
        emailRedirectTo: '/',
      },
    })
    console.log('data', data);

  } catch (error) {
    console.log('error', error);
  }
}
</script>
