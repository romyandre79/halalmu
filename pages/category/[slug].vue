<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Breadcrumb -->
    <div class="flex items-center text-sm text-gray-500 mb-6">
        <NuxtLink to="/" class="hover:text-primary-600">Home</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-gray-900 font-medium capitalize">{{ categoryName }}</span>
    </div>

    <div class="flex gap-8">
        <!-- Sidebar Filters -->
        <div class="w-64 hidden lg:block flex-shrink-0">
            <div class="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
                <h3 class="font-bold mb-4">Filters</h3>
                
                <div class="mb-6">
                    <h4 class="text-sm font-medium mb-2 text-gray-700">Price Range</h4>
                    <div class="flex items-center gap-2 mb-2">
                        <input type="text" placeholder="Min" class="w-full px-2 py-1 text-sm border rounded">
                        <span>-</span>
                        <input type="text" placeholder="Max" class="w-full px-2 py-1 text-sm border rounded">
                    </div>
                    <button class="w-full bg-primary-50 text-primary-600 px-3 py-1 rounded text-sm font-medium hover:bg-primary-100">Apply</button>
                </div>

                <div class="mb-6">
                    <h4 class="text-sm font-medium mb-2 text-gray-700">Location</h4>
                    <div class="space-y-1">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500">
                            <span class="text-sm text-gray-600">Jabodetabek</span>
                        </label>
                         <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500">
                            <span class="text-sm text-gray-600">West Java</span>
                        </label>
                         <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500">
                            <span class="text-sm text-gray-600">East Java</span>
                        </label>
                    </div>
                </div>

                <div class="mb-6">
                    <h4 class="text-sm font-medium mb-2 text-gray-700">Halal Certification</h4>
                    <div class="space-y-1">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500">
                            <span class="text-sm text-gray-600">BPJPH (Indonesia)</span>
                        </label>
                         <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500">
                            <span class="text-sm text-gray-600">JAKIM (Malaysia)</span>
                        </label>
                         <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500">
                            <span class="text-sm text-gray-600">MUI</span>
                        </label>
                    </div>
                </div>

                <div class="mb-6">
                    <h4 class="text-sm font-medium mb-2 text-gray-700">Condition</h4>
                    <div class="space-y-1">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500">
                            <span class="text-sm text-gray-600">New</span>
                        </label>
                         <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500">
                            <span class="text-sm text-gray-600">Used</span>
                        </label>
                    </div>
                </div>

                <div class="mb-4">
                    <h4 class="text-sm font-medium mb-2 text-gray-700">Rating</h4>
                    <div class="space-y-1">
                        <label v-for="i in 5" :key="i" class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500">
                            <div class="flex text-yellow-400 text-xs">
                                <span v-for="star in (6-i)" :key="star">★</span>
                            </div>
                            <span class="text-xs text-gray-500">& Up</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <!-- Product Grid -->
        <div class="flex-1">
            <h1 class="text-2xl font-bold mb-2 capitalize">{{ categoryName }}</h1>
            <p class="text-gray-500 mb-6">Showing results for "{{ categoryName }}"</p>

            <div v-if="loading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                 <div v-for="i in 8" :key="i" class="animate-pulse">
                    <div class="bg-gray-200 aspect-square rounded-t-lg"></div>
                    <div class="p-3">
                        <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                 </div>
            </div>

            <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                 <div v-for="i in 12" :key="i" class="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 cursor-pointer flex flex-col h-full group">
                    <!-- Image -->
                    <div class="aspect-square bg-gray-100 relative overflow-hidden rounded-t-lg">
                        <img :src="`https://picsum.photos/seed/${categoryName}${i}/300/300`" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                        <span v-if="i % 3 === 0" class="absolute top-2 left-2 bg-primary-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">Halal</span>
                    </div>
                    
                    <!-- Info -->
                    <div class="p-3 flex flex-col flex-1">
                        <h3 class="text-sm text-gray-700 line-clamp-2 mb-2 leading-snug">Premium {{ categoryName }} Item #{{ i }} - High Quality</h3>
                        <div class="mt-auto">
                            <div class="text-primary-600 font-bold text-base mb-1">Rp {{ (i * 25000).toLocaleString('id-ID') }}</div>
                             <div class="flex items-center text-[10px] text-gray-400 gap-1">
                                <svg class="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                <span>4.9</span>
                                <span class="w-px h-2 bg-gray-300 mx-1"></span>
                                <span>Sold {{ i * 15 }}</span>
                            </div>
                            <div class="flex items-center gap-1 mt-2 mb-2 text-[10px] text-gray-500">
                                <span class="bg-gray-100 px-1 py-0.5 rounded">Jakarta</span>
                            </div>

                            <button 
                                @click.stop="addToCart({ id: i, name: `Premium ${categoryName} Item #${i}`, price: i * 25000 })"
                                class="w-full bg-primary-600 text-white text-xs font-bold py-1.5 rounded hover:bg-primary-700 transition flex items-center justify-center gap-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { addToCart } = useCart()
const categoryName = computed(() => (route.params.slug as string).replace('-', ' '))
const loading = ref(true)

useHead({
  title: `${categoryName.value} - Halalmu`
})

onMounted(() => {
    // Simulate loading
    setTimeout(() => {
        loading.value = false
    }, 800)
})
</script>
