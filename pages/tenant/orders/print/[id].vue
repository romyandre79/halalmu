<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4 print:bg-white print:p-0">
    <div id="shipping-label" class="bg-white p-6 border-b-4 border-dashed border-gray-300 w-full max-w-md shadow-lg print:shadow-none print:w-full print:max-w-none print:border-none">
        <div class="border-2 border-black p-4">
            <div class="flex justify-between items-start mb-6 border-b-2 border-black pb-4">
                <div class="font-bold text-3xl tracking-widest">JNE</div>
                <div class="text-right">
                    <div class="font-bold text-lg">REGULER</div>
                    <div class="text-xs">Non-Cashless</div>
                </div>
            </div>
            
            <div class="mb-6 text-center">
                <!-- Mock Barcode -->
                <div class="h-16 bg-gray-800 w-3/4 mx-auto mb-2 flex items-center justify-center text-white text-xs tracking-widest overflow-hidden">
                    || ||| || ||||| || || |
                </div>
                <div class="text-xs mt-1 font-mono">{{ route.params.id }}</div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                    <div class="text-xs text-gray-500 uppercase font-bold">Sender:</div>
                    <div class="font-bold">Toko Berkah</div>
                    <div>0812-3456-7890</div>
                    <div class="text-xs">Jakarta Selatan</div>
                </div>
                <div>
                    <div class="text-xs text-gray-500 uppercase font-bold">Recipient:</div>
                    <div class="font-bold">Ahmad Fulan</div>
                    <div>0812-9876-5432</div>
                    <div class="text-xs">Jl. Kaliurang Km 5, Sleman, Yogyakarta</div>
                </div>
            </div>

            <div class="border-t-2 border-black pt-4">
                <div class="flex justify-between items-center">
                    <div>
                        <div class="text-xs text-gray-500">Product:</div>
                        <div class="font-bold text-sm">Premium Halal Beef</div>
                        <div class="text-xs">Var: 1kg Pack</div>
                    </div>
                    <div class="text-right">
                            <div class="text-xs text-gray-500">Weight:</div>
                            <div class="font-bold">1.0 Kg</div>
                    </div>
                </div>
                <div class="mt-4 text-xs text-gray-500">
                    Notes: Please handle with care. Fragile.
                </div>
            </div>
        </div>

        <div class="mt-6 flex gap-4 print:hidden">
            <button @click="print" class="flex-1 bg-primary-600 text-white py-2 rounded-md font-bold hover:bg-primary-700">Print Now</button>
            <button @click="close" class="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md font-bold hover:bg-gray-300">Close</button>
        </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blank' 
})

const route = useRoute()
const router = useRouter()

const print = () => {
    window.print()
}

const close = () => {
    // Try to close tab if opened in new tab, otherwise go back
    if (window.history.length > 1) {
        window.history.back()
    } else {
        window.close()
    }
}

onMounted(() => {
    // Optional: auto print
    // setTimeout(() => window.print(), 500)
})
</script>

<style scoped>
@media print {
    .print\:hidden {
        display: none !important;
    }
    .print\:shadow-none {
        box-shadow: none !important;
    }
    .print\:border-none {
        border: none !important;
    }
}
</style>
