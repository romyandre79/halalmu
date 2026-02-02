<script setup lang="ts">
// const route = useRoute()

// State for dropdowns
const showNotifications = ref(false)
const showProfileMenu = ref(false)

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value
  showProfileMenu.value = false
}

const toggleProfile = () => {
  showProfileMenu.value = !showProfileMenu.value
  showNotifications.value = false
}

const closeDropdowns = () => {
  showNotifications.value = false
  showProfileMenu.value = false
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex" @click="closeDropdowns">
    <!-- Sidebar -->
    <aside
      class="w-64 bg-white border-r shadow-sm flex-shrink-0 hidden md:flex flex-col"
      @click.stop
    >
      <div class="h-16 flex items-center px-6 border-b">
        <NuxtLink to="/" class="text-primary-600 text-xl font-bold flex items-center gap-2">
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
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          Halalmu Seller
        </NuxtLink>
      </div>

      <nav class="flex-1 p-4 space-y-1 overflow-y-auto">
        <NuxtLink
          to="/tenant/dashboard"
          class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md"
          :class="
            $route.path === '/tenant/dashboard'
              ? 'bg-primary-50 text-primary-700'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          "
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            ></path>
          </svg>
          Dashboard
        </NuxtLink>
        <NuxtLink
          to="/tenant/products"
          class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md"
          :class="
            $route.path.startsWith('/tenant/products')
              ? 'bg-primary-50 text-primary-700'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          "
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            ></path>
          </svg>
          My Products
        </NuxtLink>
        <NuxtLink
          to="/tenant/orders"
          class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md"
          :class="
            $route.path.startsWith('/tenant/orders')
              ? 'bg-primary-50 text-primary-700'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          "
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            ></path>
          </svg>
          Orders
          <span class="ml-auto bg-red-100 text-red-600 py-0.5 px-2 rounded-full text-xs">3</span>
        </NuxtLink>
        <NuxtLink
          to="/tenant/analytics"
          class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md"
          :class="
            $route.path.startsWith('/tenant/analytics')
              ? 'bg-primary-50 text-primary-700'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          "
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            ></path>
          </svg>
          Analytics
        </NuxtLink>
        <NuxtLink
          to="/tenant/finance"
          class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md"
          :class="
            $route.path.startsWith('/tenant/finance')
              ? 'bg-primary-50 text-primary-700'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          "
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Finance
        </NuxtLink>
        <NuxtLink
          to="/tenant/notifications"
          class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md"
          :class="
            $route.path.startsWith('/tenant/notifications')
              ? 'bg-primary-50 text-primary-700'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          "
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
          Notifications
        </NuxtLink>
      </nav>

      <div class="p-4 border-t">
        <NuxtLink
          to="/login"
          class="flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
          Logout
        </NuxtLink>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="bg-white h-16 shadow-sm border-b flex items-center justify-between px-6 z-10">
        <h1 class="text-lg font-semibold text-gray-800">Dashboard</h1>
        <div class="flex items-center gap-4">
          <!-- Notification Bell -->
          <div class="relative">
            <button
              class="relative p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              @click.stop="toggleNotifications"
            >
              <span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span class="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            <!-- Notification Dropdown -->
            <div
              v-if="showNotifications"
              class="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              @click.stop
            >
              <div class="px-4 py-2 border-b border-gray-100 text-sm font-semibold text-gray-700">
                Notifications
              </div>
              <a href="#" class="block px-4 py-3 hover:bg-gray-50">
                <p class="text-sm font-medium text-gray-900">New Order #INV-1234</p>
                <p class="text-xs text-gray-500">You received a new order from Ahmad.</p>
              </a>
              <a href="#" class="block px-4 py-3 hover:bg-gray-50">
                <p class="text-sm font-medium text-gray-900">Stock Alert</p>
                <p class="text-xs text-gray-500">Product "Halal Beef" is running low.</p>
              </a>
              <div class="px-4 py-2 border-t border-gray-100 text-center">
                <NuxtLink
                  to="/tenant/notifications"
                  class="text-xs font-medium text-primary-600 hover:text-primary-500"
                  >View all notifications</NuxtLink
                >
              </div>
            </div>
          </div>

          <!-- Profile Dropdown -->
          <div class="relative">
            <button class="flex items-center gap-2 focus:outline-none" @click.stop="toggleProfile">
              <img
                class="h-8 w-8 rounded-full"
                src="https://ui-avatars.com/api/?name=Tenant+Shop&background=00A651&color=fff"
                alt=""
              />
              <span class="text-sm font-medium text-gray-700">Toko Berkah</span>
            </button>

            <!-- Profile Menu -->
            <div
              v-if="showProfileMenu"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              @click.stop
            >
              <NuxtLink
                to="/tenant/profile"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Your Profile</NuxtLink
              >
              <NuxtLink
                to="/tenant/settings"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Settings</NuxtLink
              >
              <NuxtLink to="/login" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >Sign out</NuxtLink
              >
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
        <slot />
      </main>
    </div>
  </div>
</template>
