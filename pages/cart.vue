<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">Shopping Cart</h1>
    
    <div v-if="cart.length === 0" class="text-center py-12 bg-white rounded-lg border border-gray-100 shadow-sm">
        <div class="text-6xl mb-4">🛒</div>
        <h2 class="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
        <p class="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
        <NuxtLink to="/" class="bg-primary-600 text-white px-6 py-2 rounded-md font-bold hover:bg-primary-700 transition">Start Shopping</NuxtLink>
    </div>

    <div v-else class="flex flex-col lg:flex-row gap-8">
        <!-- Cart Items -->
        <div class="flex-1 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div class="p-4 border-b bg-gray-50 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="text-sm font-medium text-gray-700">Items ({{ cartCount }})</span>
                </div>
            </div>
            
            <div class="divide-y">
                <div v-for="(item, index) in cart" :key="item.id" class="p-4 flex gap-4">
                     <div class="flex items-center">
                        <input type="checkbox" checked class="rounded text-primary-600 focus:ring-primary-500">
                    </div>
                    <div class="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                        <img :src="`https://picsum.photos/seed/${item.name}/200/200`" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1">
                        <h3 class="text-sm font-medium text-gray-900 line-clamp-2">{{ item.name }}</h3>
                        <div class="mt-2 flex items-center justify-between">
                            <span class="text-primary-600 font-bold">Rp {{ item.price.toLocaleString('id-ID') }}</span>
                            <div class="flex items-center gap-4">
                                <div class="flex items-center border rounded-md">
                                    <button type="button" @click="updateQuantity(index, -1)" class="px-2 py-1 text-gray-600 hover:bg-gray-50 text-sm">-</button>
                                    <input type="text" :value="item.quantity" readonly class="w-10 text-center text-sm border-x py-1 focus:outline-none">
                                    <button type="button" @click="updateQuantity(index, 1)" class="px-2 py-1 text-gray-600 hover:bg-gray-50 text-sm">+</button>
                                </div>
                                <button type="button" @click="removeFromCart(index)" class="text-red-500 hover:text-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delivery & Address Section -->
        <div class="mt-6 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 class="text-lg font-bold mb-4">Delivery Details</h2>
            
            <!-- Location/Address -->
            <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">Shipping Address</label>
                <div class="flex gap-2 mb-2">
                    <button 
                        @click="detectLocation" 
                        type="button"
                        class="px-4 py-2 bg-primary-50 text-primary-600 rounded-md text-sm font-medium hover:bg-primary-100 flex items-center gap-2 transition"
                        :disabled="detectingLocation"
                    >
                        <svg v-if="detectingLocation" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {{ detectingLocation ? 'Detecting...' : 'Detect My Location' }}
                    </button>
                    <input type="text" v-model="address" placeholder="Or enter address details..." class="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 text-sm px-3 py-2 border">
                </div>
                <p v-if="coords" class="text-xs text-green-600 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    Location pinned: {{ coords.latitude.toFixed(4) }}, {{ coords.longitude.toFixed(4) }}
                </p>
            </div>

            <!-- Delivery Courier -->
            <div v-if="address || coords">
                <label class="block text-sm font-medium text-gray-700 mb-2">Select Delivery Method</label>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                        v-for="provider in deliveryProviders" 
                        :key="provider.id"
                        @click="selectedDelivery = provider"
                        :class="selectedDelivery?.id === provider.id ? 'border-primary-500 bg-primary-50 ring-1 ring-primary-500' : 'border-gray-200 hover:border-primary-200'"
                        class="border rounded-lg p-3 cursor-pointer transition relative flex items-center justify-between"
                    >
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-xl shadow-sm">
                                {{ provider.icon }}
                            </div>
                            <div>
                                <h4 class="font-bold text-sm text-gray-900">{{ provider.name }}</h4>
                                <p class="text-xs text-gray-500">{{ provider.etd }}</p>
                            </div>
                        </div>
                        <span class="font-bold text-primary-700">Rp {{ provider.price.toLocaleString('id-ID') }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-80">
            <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
                <h3 class="text-lg font-bold mb-4">Order Summary</h3>
                <div class="space-y-2 text-sm mb-4">
                    <div class="flex justify-between text-gray-600">
                        <span>Subtotal ({{ cartCount }} items)</span>
                        <span>Rp {{ subtotal.toLocaleString('id-ID') }}</span>
                    </div>
                     <div class="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span v-if="selectedDelivery" class="text-gray-900 font-medium">Rp {{ selectedDelivery.price.toLocaleString('id-ID') }}</span>
                        <span v-else class="text-gray-400 italic">Select courier</span>
                    </div>
                    <div class="flex justify-between text-gray-600">
                        <span>Savings</span>
                        <span class="text-green-600">-Rp 0</span>
                    </div>
                </div>
                <div class="border-t pt-4 mb-6">
                    <div class="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span class="text-primary-600">Rp {{ total.toLocaleString('id-ID') }}</span>
                    </div>
                </div>
                <button class="w-full bg-primary-600 text-white font-bold py-3 rounded-md hover:bg-primary-700 shadow-md transition">
                    Checkout
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { cart, cartCount } = useCart()

// Delivery & Location State
const address = ref('')
const coords = ref<{latitude: number, longitude: number} | null>(null)
const detectingLocation = ref(false)
const selectedDelivery = ref<{id: string, name: string, price: number, icon: string, etd: string} | null>(null)

const deliveryProviders = [
    { id: 'gojek', name: 'GoSend Instant', price: 25000, icon: '🛵', etd: '1-2 hours' },
    { id: 'grab', name: 'GrabExpress Instant', price: 24000, icon: '🟢', etd: '1-2 hours' },
    { id: 'jne', name: 'JNE Regular', price: 12000, icon: '📦', etd: '2-3 days' },
    { id: 'sicepat', name: 'SiCepat REG', price: 11500, icon: '⚡', etd: '2-3 days' },
]

const detectLocation = () => {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser')
        return
    }

    detectingLocation.value = true
    navigator.geolocation.getCurrentPosition(
        (position) => {
            coords.value = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
            // Mock converting coords to address
            address.value = "Jalan Sudirman No. 123, Jakarta Selatan (Detected)"
            detectingLocation.value = false
        },
        (error) => {
            console.error(error)
            alert('Unable to retrieve your location')
            detectingLocation.value = false
        }
    )
}

const subtotal = computed(() => {
    return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const total = computed(() => {
    return subtotal.value + (selectedDelivery.value?.price || 0)
})

const updateQuantity = (index: number, change: number) => {
    const item = cart.value[index]
    if (!item) return
    
    const newQuantity = item.quantity + change
    if (newQuantity < 1) {
        removeFromCart(index)
    } else {
        item.quantity = newQuantity
    }
}

const removeFromCart = (index: number) => {
    cart.value.splice(index, 1)
}

useHead({
  title: 'Shopping Cart - Halalmu'
})
</script>
