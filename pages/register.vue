<template>
  <div class="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div class="text-center">
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Join Halalmu</h2>
        <p class="mt-2 text-sm text-gray-600">
          Create an account to start
        </p>
      </div>
      
      <!-- Role Tabs -->
      <div class="flex border-b border-gray-200">
        <button 
            @click="role = 'customer'"
            :class="role === 'customer' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
            class="flex-1 pb-4 px-1 border-b-2 font-medium text-sm transition focus:outline-none"
        >
            Customer
        </button>
        <button 
            @click="role = 'tenant'"
            :class="role === 'tenant' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
            class="flex-1 pb-4 px-1 border-b-2 font-medium text-sm transition focus:outline-none"
        >
            Tenant (Seller)
        </button>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name" class="sr-only">Full Name</label>
            <input id="name" name="name" type="text" autocomplete="name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" placeholder="Full Name">
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" placeholder="Email address">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="new-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" placeholder="Password">
          </div>
           <div>
            <label for="password-confirm" class="sr-only">Confirm Password</label>
            <input id="password-confirm" name="password-confirm" type="password" autocomplete="new-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm" placeholder="Confirm Password">
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-md transition">
            Register as {{ role === 'customer' ? 'Customer' : 'Tenant' }}
          </button>
        </div>
      </form>
      
       <div class="text-center text-sm">
        <span class="text-gray-500">Already have an account? </span>
        <NuxtLink to="/login" class="font-medium text-primary-600 hover:text-primary-500">
          Sign in
        </NuxtLink>
      </div>

       <div v-if="role === 'customer'" class="text-center text-sm text-gray-500 mt-4">
        Or register with
        <div class="flex justify-center gap-4 mt-3">
            <button class="bg-blue-600 text-white px-4 py-1 rounded text-xs">Facebook</button>
            <button class="bg-red-500 text-white px-4 py-1 rounded text-xs">Google</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const role = ref<'customer' | 'tenant'>('customer')

const handleRegister = () => {
    // Navigate to dashboard based on role (Mockup)
    if (role.value === 'tenant') {
        navigateTo('/tenant/dashboard')
    } else {
        navigateTo('/customer/dashboard') // or home
    }
}

useHead({
  title: 'Register - Halalmu'
})
</script>
