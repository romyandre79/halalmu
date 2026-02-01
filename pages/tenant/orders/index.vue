<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Orders</h2>

    <!-- Tabs -->
    <div class="border-b border-gray-200 mb-6">
        <nav class="-mb-px flex space-x-8">
            <button 
                v-for="tab in ['All Orders', 'Waiting Payment', 'To Ship', 'Shipped']"
                :key="tab"
                @click="activeTab = tab"
                :class="activeTab === tab ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
                class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
            >
                {{ tab }}
            </button>
        </nav>
    </div>

    <!-- Orders List -->
    <div class="space-y-4">
        <div v-for="order in filteredOrders" :key="order.id" class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <!-- Header -->
            <div class="bg-gray-50 px-6 py-4 flex items-center justify-between border-b border-gray-100">
                <div class="flex items-center gap-4 text-sm text-gray-500">
                    <span class="font-bold text-gray-700">{{ order.invoice }}</span>
                    <span>•</span>
                    <span>{{ order.date }}</span>
                </div>
                <div class="flex items-center gap-3">
                     <span class="px-2.5 py-0.5 rounded-full text-xs font-medium" :class="{
                        'bg-yellow-100 text-yellow-800': order.status === 'Waiting Payment',
                        'bg-blue-100 text-blue-800': order.status === 'To Ship',
                        'bg-green-100 text-green-800': order.status === 'Shipped'
                     }">
                        {{ order.status }}
                    </span>
                </div>
            </div>

            <!-- Body -->
            <div class="p-6">
                <div class="flex items-start gap-4">
                    <div class="h-16 w-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                        <img :src="`https://picsum.photos/seed/${order.productName}/100/100`" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1">
                        <h4 class="text-sm font-bold text-gray-900 mb-1">{{ order.productName }}</h4>
                        <p class="text-sm text-gray-500 mb-2">Variant: {{ order.variant }}</p>
                    </div>
                    <div class="text-right">
                        <div class="text-sm font-bold text-gray-900">Rp {{ order.price.toLocaleString('id-ID') }}</div>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-gray-50">
                    <div class="mr-auto text-sm">
                        <span class="text-gray-500">Total:</span> 
                        <span class="font-bold text-primary-600 text-lg ml-2">Rp {{ order.total.toLocaleString('id-ID') }}</span>
                    </div>
                    
                    <button v-if="order.status === 'To Ship'" @click="openPrintPage(order)" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Print Label</button>
                    <button v-if="order.status === 'To Ship'" @click="requestPickup(order)" class="px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700">Request Pickup</button>
                    
                     <span v-if="order.status === 'Waiting Payment'" class="text-sm text-gray-500 italic">Waiting for customer payment...</span>
                    
                    <button v-if="order.status === 'Shipped'" class="px-4 py-2 border border-blue-200 text-blue-600 bg-blue-50 rounded-md text-sm font-medium cursor-default">Track Shipment</button>
                </div>
            </div>
        </div>
        
        <div v-if="filteredOrders.length === 0" class="text-center py-12 bg-white rounded-lg border border-gray-100">
            <p class="text-gray-500">No orders found.</p>
        </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard'
})

useHead({
  title: 'Orders - Halalmu Seller'
})

const activeTab = ref('All Orders')

const orders = ref([
    { id: 1, invoice: 'INV/20260201/001', date: '1 Feb 2026, 14:30', status: 'To Ship', productName: 'Premium Halal Beef', variant: '1kg Pack', price: 150000, total: 165000 },
    { id: 2, invoice: 'INV/20260201/002', date: '1 Feb 2026, 15:15', status: 'Waiting Payment', productName: 'Organic Chicken Breast', variant: '500g', price: 45000, total: 55000 },
    { id: 3, invoice: 'INV/20260201/003', date: '1 Feb 2026, 09:00', status: 'Shipped', productName: 'Modest Tunic Dress', variant: 'Size M, Blue', price: 250000, total: 260000 },
    { id: 4, invoice: 'INV/20260201/004', date: '31 Jan 2026, 18:45', status: 'To Ship', productName: 'Halal Cosmetics Set', variant: 'Full Kit', price: 350000, total: 360000 },
    { id: 5, invoice: 'INV/20260130/099', date: '30 Jan 2026, 10:20', status: 'Shipped', productName: 'Instant Noodles Case', variant: 'Chicken Curry', price: 120000, total: 135000 },
])

const filteredOrders = computed(() => {
    if (activeTab.value === 'All Orders') return orders.value
    return orders.value.filter(o => o.status === activeTab.value)
})

const openPrintPage = (order) => {
    // Open in new window/tab for clarity and to prevent main app issues
    window.open(`/tenant/orders/print/${encodeURIComponent(order.invoice)}`, '_blank')
}

const requestPickup = (order) => {
    if(confirm(`Request pickup for ${order.invoice}?`)) {
        order.status = 'Shipped'
    }
}
</script>
