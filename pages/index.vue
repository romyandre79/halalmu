<template>
  <div class="pb-12">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-8">
        <div class="bg-primary-500 rounded-xl overflow-hidden shadow-lg relative h-64 md:h-96 flex items-center">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop" alt="Halal Food" class="absolute inset-0 w-full h-full object-cover">
            
            <div class="relative z-20 px-8 md:px-16 text-white max-w-2xl">
                <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">Authentic Halal Products Delivered</h1>
                <p class="text-lg md:text-xl text-primary-100 mb-8">Shop with confidence. 100% Halal certified marketplace for your daily needs.</p>
                <button class="bg-white text-primary-600 px-8 py-3 rounded-md font-bold shadow hover:bg-primary-50 transition">Shop Now</button>
            </div>
        </div>
    </div>

    <!-- Categories -->
    <div class="container mx-auto px-4 mb-12">
        <h2 class="text-xl font-bold mb-6 text-gray-800">Categories</h2>
        <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            <NuxtLink 
                v-for="cat in categories" 
                :key="cat.slug" 
                :to="`/category/${cat.slug}`"
                class="flex flex-col items-center gap-2 group cursor-pointer"
            >
                <div class="w-20 h-20 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm group-hover:border-primary-500 group-hover:shadow-md transition text-3xl">
                    {{ cat.icon }}
                </div>
                <span class="text-xs font-medium text-gray-600 group-hover:text-primary-600 text-center">{{ cat.name }}</span>
            </NuxtLink>
        </div>
    </div>

    <!-- Daily Discover/Products -->
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold text-gray-800">Daily Discover</h2>
            <a href="#" class="text-primary-600 text-sm font-semibold hover:underline">See All</a>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div v-for="i in 12" :key="i" class="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 cursor-pointer flex flex-col h-full">
                <!-- Image -->
                <div class="aspect-square bg-gray-100 relative group overflow-hidden rounded-t-lg">
                    <img :src="`https://picsum.photos/seed/${i}/300/300`" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <span v-if="i % 3 === 0" class="absolute top-2 left-2 bg-primary-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">Halal</span>
                </div>
                
                <!-- Info -->
                <div class="p-3 flex flex-col flex-1">
                    <h3 class="text-sm text-gray-700 line-clamp-2 mb-2 leading-snug">Premium Halal Product Name {{ i }} - High Quality Import</h3>
                    <div class="mt-auto">
                        <div class="text-primary-600 font-bold text-base mb-1">Rp {{ (i * 15000).toLocaleString('id-ID') }}</div>
                        <div class="flex items-center text-[10px] text-gray-400 gap-1 mb-2">
                            <svg class="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                            <span>4.8</span>
                            <span class="w-px h-2 bg-gray-300 mx-1"></span>
                            <span>Sold {{ i * 42 }}</span>
                        </div>
                        
                        <button 
                            @click.stop="addToCart({ id: i, name: `Premium Halal Product Name ${i}`, price: i * 15000 })"
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

        <div class="mt-8 flex justify-center">
            <button class="px-8 py-2 border border-gray-300 bg-white rounded hover:bg-gray-50 text-gray-600 text-sm">Load More</button>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { addToCart } = useCart()

useHead({
  title: 'Halalmu - Uncompromisingly Halal'
})

const categories = [
    { name: 'Halal Food', slug: 'halal-food', icon: '🍲' },
    { name: 'Modest Fashion', slug: 'modest-fashion', icon: '🧕' },
    { name: 'Herbal & Health', slug: 'herbal-health', icon: '🌿' },
    { name: 'Islamic Books', slug: 'islamic-books', icon: '📚' },
    { name: 'Home & Living', slug: 'home-living', icon: '🏠' },
    { name: 'Electronics', slug: 'electronics', icon: '📱' },
    { name: 'Travel & Hajj', slug: 'travel-hajj', icon: '✈️' },
    { name: 'Services', slug: 'services', icon: '🤝' },
]
</script>
