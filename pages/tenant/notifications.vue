<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Notifications</h2>
      <button class="text-sm text-primary-600 hover:text-primary-700 font-medium">
        Mark all as read
      </button>
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div class="divide-y divide-gray-100">
        <div
          v-for="notification in notifications"
          :key="notification.id"
          class="p-4 hover:bg-gray-50 transition-colors"
          :class="{ 'bg-blue-50': !notification.read }"
        >
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 mt-1">
              <span
                class="inline-flex items-center justify-center h-8 w-8 rounded-full"
                :class="{
                  'bg-green-100 text-green-600': notification.type === 'order',
                  'bg-yellow-100 text-yellow-600': notification.type === 'stock',
                  'bg-blue-100 text-blue-600': notification.type === 'system',
                }"
              >
                <svg
                  v-if="notification.type === 'order'"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
                <svg
                  v-else-if="notification.type === 'stock'"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </span>
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <h4 class="text-sm font-semibold text-gray-900">{{ notification.title }}</h4>
                <span class="text-xs text-gray-500">{{ notification.time }}</span>
              </div>
              <p class="text-sm text-gray-600">{{ notification.message }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="bg-gray-50 px-4 py-3 border-t border-gray-200 flex items-center justify-center">
        <button class="text-sm text-gray-500 hover:text-gray-700 font-medium">Load More</button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Notifications - Halalmu Seller',
})

const notifications = ref([
  {
    id: 1,
    type: 'order',
    title: 'New Order #INV-1234',
    message: 'You received a new order from Ahmad Fulan for Premium Halal Beef.',
    time: '2 mins ago',
    read: false,
  },
  {
    id: 2,
    type: 'stock',
    title: 'Stock Alert: Halal Beef',
    message: 'Inventory for "Premium Halal Beef" is running low (5 items left).',
    time: '1 hour ago',
    read: false,
  },
  {
    id: 3,
    type: 'system',
    title: 'Payout Processed',
    message: 'Your withdrawal of Rp 500.000 has been processed successfully.',
    time: 'Yesterday',
    read: true,
  },
  {
    id: 4,
    type: 'order',
    title: 'New Order #INV-1233',
    message: 'You received a new order from Sarah for Organic Chicken Breast.',
    time: '2 days ago',
    read: true,
  },
  {
    id: 5,
    type: 'system',
    title: 'Welcome to Halalmu!',
    message: 'Thank you for joining Halalmu Seller Center. Start by adding your first product.',
    time: '1 week ago',
    read: true,
  },
])
</script>
