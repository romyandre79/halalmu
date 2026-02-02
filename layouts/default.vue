<template>
  <div class="min-h-screen bg-gray-50 font-sans text-gray-800">
    <!-- Navbar -->
    <header class="bg-primary-500 sticky top-0 z-50 shadow-md">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="text-white text-2xl font-bold tracking-tight flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          Halalmu
        </NuxtLink>

        <!-- Search Bar -->
        <div class="flex-1 max-w-2xl hidden md:flex relative">
          <input
            type="text"
            placeholder="Search for halal products..."
            class="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 text-sm"
          />
          <button
            class="absolute right-0 top-0 h-full px-4 bg-primary-700 text-white rounded-r-md hover:bg-primary-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <!-- Right Nav -->
        <div class="flex items-center gap-6 text-white text-sm font-medium">
          <NuxtLink to="/cart" class="flex items-center gap-1 hover:text-primary-100 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span
              v-if="cartCount > 0"
              class="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold"
            >
              {{ cartCount }}
            </span>
          </NuxtLink>

          <div class="hidden sm:flex items-center gap-4">
            <NuxtLink to="/login" class="hover:text-primary-100">Login</NuxtLink>
            <div class="h-4 w-px bg-primary-400"></div>
            <NuxtLink to="/register" class="hover:text-primary-100">Register</NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t mt-12 py-12">
      <div class="container mx-auto px-4 text-center text-gray-500 text-sm">
        &copy; 2026 Halalmu Marketplace. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { cartCount } = useCart()
</script>
