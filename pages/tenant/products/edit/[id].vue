<template>
  <div>
    <div class="mb-6 flex items-center gap-4">
      <NuxtLink to="/tenant/products" class="p-2 rounded-full hover:bg-gray-200 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </NuxtLink>
      <h2 class="text-2xl font-bold text-gray-800">Edit Product</h2>
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6 max-w-3xl">
      <form class="space-y-6" @submit.prevent="saveProduct">
        <!-- Basic Info -->
        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-900 border-b pb-2">Basic Information</h3>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
            <input
              v-model="form.name"
              type="text"
              class="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border px-3 py-2"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              v-model="form.category"
              class="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border px-3 py-2 bg-white"
            >
              <option value="food">Halal Food</option>
              <option value="fashion">Modest Fashion</option>
              <option value="cosmetics">Halal Cosmetics</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              v-model="form.description"
              rows="4"
              class="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border px-3 py-2"
            ></textarea>
          </div>
        </div>

        <!-- Pricing & Stock -->
        <div class="space-y-4 pt-4">
          <h3 class="text-lg font-medium text-gray-900 border-b pb-2">Pricing & Stock</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Price (Rp)</label>
              <div class="relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm">Rp</span>
                </div>
                <input
                  v-model="form.price"
                  type="number"
                  class="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border px-3 py-2"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Stock</label>
              <input
                v-model="form.stock"
                type="number"
                class="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border px-3 py-2"
              />
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center justify-end gap-3 pt-6 border-t">
          <NuxtLink
            to="/tenant/products"
            class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >Cancel</NuxtLink
          >
          <button
            type="submit"
            class="px-6 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700 shadow-sm"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Edit Product - Halalmu Seller',
})

// const route = useRoute()
const router = useRouter()

// Mock fetching data
const form = ref({
  name: 'Premium Halal Beef',
  category: 'food',
  description: 'High quality premium halal beef sourced from reliable farms.',
  price: 150000,
  stock: 24,
})

const saveProduct = () => {
  // Mock update
  alert('Product updated successfully!')
  router.push('/tenant/products')
}
</script>
