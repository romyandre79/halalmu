<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Your Profile</h2>

    <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div class="flex items-center gap-6 mb-8">
            <div class="relative">
                <img class="h-24 w-24 rounded-full object-cover border-4 border-white shadow-sm" src="https://ui-avatars.com/api/?name=Tenant+Shop&background=00A651&color=fff&size=200" alt="">
                <button class="absolute bottom-0 right-0 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full border border-gray-200 text-gray-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            </div>
            <div>
                <h3 class="text-xl font-bold text-gray-900">Toko Berkah</h3>
                <p class="text-gray-500">toko.berkah@example.com</p>
                <div class="mt-2 flex gap-2">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Verified Seller
                    </span>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Top Rated
                    </span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Shop Name</label>
                <input type="text" value="Toko Berkah" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border px-3 py-2">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" value="toko.berkah@example.com" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border px-3 py-2" disabled>
            </div>
             <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-1">Bio / Description</label>
                <textarea rows="3" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border px-3 py-2">Providing high quality halal products for your daily needs.</textarea>
            </div>
             <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="text" value="0812-3456-7890" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border px-3 py-2">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input type="text" value="Jakarta Selatan, DKI Jakarta" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border px-3 py-2">
            </div>
        </div>

        <div class="mt-8 flex justify-end">
            <button class="bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors">
                Save Changes
            </button>
        </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard'
})

useHead({
  title: 'Profile - Halalmu Seller'
})
</script>
