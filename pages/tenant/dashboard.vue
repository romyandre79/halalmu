<template>
  <div>
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
        <div class="p-3 bg-blue-50 text-blue-600 rounded-full">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            ></path>
          </svg>
        </div>
        <div>
          <div class="text-gray-500 text-sm">Total Orders</div>
          <div class="text-2xl font-bold text-gray-800">128</div>
          <div class="text-green-500 text-xs font-medium flex items-center">
            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
            +12% from last week
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
        <div class="p-3 bg-green-50 text-green-600 rounded-full">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div>
          <div class="text-gray-500 text-sm">Total Revenue</div>
          <div class="text-2xl font-bold text-gray-800">Rp 15.4M</div>
          <div class="text-green-500 text-xs font-medium flex items-center">
            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
            +8.5% from last week
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
        <div class="p-3 bg-purple-50 text-purple-600 rounded-full">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            ></path>
          </svg>
        </div>
        <div>
          <div class="text-gray-500 text-sm">Product Views</div>
          <div class="text-2xl font-bold text-gray-800">3,452</div>
          <div class="text-red-500 text-xs font-medium flex items-center">
            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
            -2% from last week
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Orders -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-100">
      <div class="px-6 py-4 border-b flex justify-between items-center bg-gray-50">
        <h3 class="font-bold text-gray-700">Recent Orders</h3>
        <button class="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View All
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th class="px-6 py-3">Order ID</th>
              <th class="px-6 py-3">Customer</th>
              <th class="px-6 py-3">Product</th>
              <th class="px-6 py-3">Amount</th>
              <th class="px-6 py-3">Status</th>
              <th class="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" :key="i" class="border-b hover:bg-gray-50">
              <td class="px-6 py-4 font-medium text-gray-900">#ORD-2026-{{ 1000 + i }}</td>
              <td class="px-6 py-4">Budi Santoso</td>
              <td class="px-6 py-4 text-gray-500">Premium Dates (Pack of 3)</td>
              <td class="px-6 py-4">Rp 150.000</td>
              <td class="px-6 py-4">
                <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded"
                  >Paid</span
                >
              </td>
              <td class="px-6 py-4 text-gray-500">01 Feb 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Tenant Dashboard - Halalmu',
})
</script>
