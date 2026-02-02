<template>
  <div
    class="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8 rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
      <div class="text-center">
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Join Halalmu</h2>
        <p class="mt-2 text-sm text-gray-600">Create an account to start</p>
      </div>

      <!-- Role Tabs -->
      <div class="flex border-b border-gray-200">
        <button
          class="flex-1 border-b-2 px-1 pb-4 text-sm font-medium transition focus:outline-none"
          :class="
            role === 'customer'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
          "
          @click="role = 'customer'"
        >
          Customer
        </button>
        <button
          class="flex-1 border-b-2 px-1 pb-4 text-sm font-medium transition focus:outline-none"
          :class="
            role === 'tenant'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
          "
          @click="role = 'tenant'"
        >
          Tenant (Seller)
        </button>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="name" class="sr-only">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              required
              class="focus:ring-primary-500 focus:border-primary-500 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="focus:ring-primary-500 focus:border-primary-500 relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="new-password"
              required
              class="focus:ring-primary-500 focus:border-primary-500 relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <label for="password-confirm" class="sr-only">Confirm Password</label>
            <input
              id="password-confirm"
              name="password-confirm"
              type="password"
              autocomplete="new-password"
              required
              class="focus:ring-primary-500 focus:border-primary-500 relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 group relative flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Register as {{ role === 'customer' ? 'Customer' : 'Tenant' }}
          </button>
        </div>
      </form>

      <div class="text-center text-sm">
        <span class="text-gray-500">Already have an account? </span>
        <NuxtLink to="/login" class="text-primary-600 hover:text-primary-500 font-medium">
          Sign in
        </NuxtLink>
      </div>

      <div v-if="role === 'customer'" class="mt-4 text-center text-sm text-gray-500">
        Or register with
        <div class="mt-3 flex justify-center gap-4">
          <button class="rounded bg-blue-600 px-4 py-1 text-xs text-white">Facebook</button>
          <button class="rounded bg-red-500 px-4 py-1 text-xs text-white">Google</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const role = ref<'customer' | 'tenant'>('customer')

const handleRegister = () => {
  // TODO: Implement registration logic
}

useSeoMeta({
  title: 'Register - Halalmu',
  description:
    'Join Halalmu today. Create a customer or seller account to start shopping or selling halal products.',
})
</script>
