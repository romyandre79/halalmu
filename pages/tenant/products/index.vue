<template>
  <div>
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">My Products</h2>
        <NuxtLink to="/tenant/products/create" class="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Add Product
        </NuxtLink>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 pb-2">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-gray-500 text-sm font-medium">Total Products</h3>
                <span class="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </span>
            </div>
            <div class="flex items-baseline">
                <span class="text-2xl font-bold text-gray-900">24</span>
            </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 pb-2">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-gray-500 text-sm font-medium">Active</h3>
                <span class="p-2 bg-green-50 text-green-600 rounded-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
            </div>
             <div class="flex items-baseline">
                <span class="text-2xl font-bold text-gray-900">18</span>
            </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 pb-2">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-gray-500 text-sm font-medium">Sold Out</h3>
                <span class="p-2 bg-red-50 text-red-600 rounded-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
            </div>
             <div class="flex items-baseline">
                <span class="text-2xl font-bold text-gray-900">2</span>
            </div>
        </div>
    </div>

    <!-- Products Table -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div class="p-4 border-b bg-gray-50 flex items-center justify-between">
            <h3 class="font-bold text-gray-700">Product List</h3>
            <div class="flex items-center gap-2">
                <input v-model="searchQuery" type="text" placeholder="Search products..." class="border rounded-md px-3 py-1.5 text-sm focus:ring-primary-500 focus:border-primary-500">
                <select v-model="statusFilter" class="border rounded-md px-3 py-1.5 text-sm focus:ring-primary-500 focus:border-primary-500 bg-white">
                    <option value="">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Draft">Draft</option>
                    <option value="Sold Out">Sold Out</option>
                </select>
            </div>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="product in filteredProducts" :key="product.id">
                    <!-- Product -->
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-md overflow-hidden">
                                <img :src="`https://picsum.photos/seed/${product.name}/100/100`" class="h-10 w-10 object-cover">
                            </div>
                            <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">{{ product.name }}</div>
                                <div class="text-xs text-gray-500">SKU: {{ product.sku }}</div>
                            </div>
                        </div>
                    </td>
                    <!-- Price -->
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">Rp {{ product.price.toLocaleString('id-ID') }}</div>
                    </td>
                    <!-- Stock -->
                    <td class="px-6 py-4 whitespace-nowrap">
                         <div class="text-sm text-gray-900">{{ product.stock }}</div>
                    </td>
                    <!-- Status -->
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" :class="{
                            'bg-green-100 text-green-800': product.status === 'Active',
                            'bg-gray-100 text-gray-800': product.status === 'Draft',
                            'bg-red-100 text-red-800': product.status === 'Sold Out'
                        }">
                            {{ product.status }}
                        </span>
                    </td>
                    <!-- Actions -->
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <NuxtLink :to="`/tenant/products/edit/${product.id}`" class="text-primary-600 hover:text-primary-900 mr-3">Edit</NuxtLink>
                        <button @click="deleteProduct(product.id)" class="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                </tr>
                <tr v-if="filteredProducts.length === 0">
                    <td colspan="5" class="px-6 py-8 text-center text-gray-500">
                        No products found.
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Pagination -->
        <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
             <div class="flex-1 flex justify-between sm:hidden">
                <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
                <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p class="text-sm text-gray-700">
                        Showing <span class="font-medium">1</span> to <span class="font-medium">{{ filteredProducts.length }}</span> of <span class="font-medium">{{ products.length }}</span> results
                    </p>
                </div>
                 <div>
                    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                         <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span class="sr-only">Previous</span>
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                        </a>
                        <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
                        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span class="sr-only">Next</span>
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
                        </a>
                    </nav>
                 </div>
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
  title: 'My Products - Halalmu Seller'
})

// Mock Data
const products = ref([
    { id: 1, name: 'Premium Halal Beef', sku: 'H-P001', price: 150000, stock: 24, status: 'Active' },
    { id: 2, name: 'Organic Chicken Breast', sku: 'H-P002', price: 75000, stock: 50, status: 'Active' },
    { id: 3, name: 'Halal Marshmallows', sku: 'H-P003', price: 35000, stock: 100, status: 'Active' },
    { id: 4, name: 'Modest Tunic Dress', sku: 'H-P004', price: 250000, stock: 12, status: 'Draft' },
    { id: 5, name: 'Wudu-Friendly Nail Polish', sku: 'H-P005', price: 95000, stock: 0, status: 'Sold Out' },
])

const searchQuery = ref('')
const statusFilter = ref('')

const filteredProducts = computed(() => {
    return products.value.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                              product.sku.toLowerCase().includes(searchQuery.value.toLowerCase())
        const matchesStatus = statusFilter.value ? product.status === statusFilter.value : true
        return matchesSearch && matchesStatus
    })
})

const deleteProduct = (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
        products.value = products.value.filter(p => p.id !== id)
    }
}
</script>
