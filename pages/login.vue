<template>
  <div
    class="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8 rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
      <div class="text-center">
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Welcome to Halalmu</h2>
        <p class="mt-2 text-sm text-gray-600">Please sign in to continue</p>
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

      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="focus:ring-primary-500 focus:border-primary-500 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="focus:ring-primary-500 focus:border-primary-500 relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="focus:ring-primary-500 h-4 w-4 rounded border-gray-300 text-primary-600"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>

          <div class="text-sm">
            <a href="#" class="text-primary-600 hover:text-primary-500 font-medium">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 group relative flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                class="text-primary-500 group-hover:text-primary-400 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign in as {{ role === 'customer' ? 'Customer' : 'Tenant' }}
          </button>
        </div>
      </form>

      <div v-if="role === 'customer'" class="text-center text-sm text-gray-500">
        Or sign in with
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

const handleLogin = () => {
  // TODO: Implement login logic
}

useSeoMeta({
  title: 'Login - Halalmu',
  description: 'Sign in to your Halalmu account to check orders, manage store, and more.',
})
</script>
