<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Analytics</h2>

    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 class="font-bold text-gray-700 mb-4">Sales Overview</h3>
        <div class="h-64 bg-gray-50 rounded flex items-center justify-center text-gray-400">
            [Chart Placeholder: Sales vs Time]
        </div>
         <div class="grid grid-cols-4 gap-4 mt-8">
            <div class="p-4 border rounded-lg">
                <div class="text-sm text-gray-500 mb-1">Total Revenue</div>
                <div class="text-xl font-bold text-primary-600">Rp 12,500,000</div>
            </div>
             <div class="p-4 border rounded-lg">
                <div class="text-sm text-gray-500 mb-1">Orders</div>
                <div class="text-xl font-bold text-gray-800">142</div>
            </div>
             <div class="p-4 border rounded-lg">
                <div class="text-sm text-gray-500 mb-1">Conversion Rate</div>
                <div class="text-xl font-bold text-gray-800">2.4%</div>
            </div>
             <div class="p-4 border rounded-lg">
                <div class="text-sm text-gray-500 mb-1">Avg. Order Value</div>
                <div class="text-xl font-bold text-gray-800">Rp 88,000</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})

useHead({
  title: 'Analytics - Halalmu Seller'
})
</script>
