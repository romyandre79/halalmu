<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Finance</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-primary-600 text-white p-6 rounded-lg shadow-md">
            <div class="text-primary-100 text-sm font-medium mb-1">Available Balance</div>
            <div class="text-3xl font-bold mb-6">Rp {{ balance.toLocaleString('id-ID') }}</div>
            <button @click="openModal" class="bg-white text-primary-600 px-4 py-2 rounded font-bold text-sm hover:bg-primary-50">Withdraw Funds</button>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
             <div class="text-gray-500 text-sm font-medium mb-1">Pending Clearance</div>
            <div class="text-3xl font-bold mb-6 text-gray-800">Rp 1.150.000</div>
            <p class="text-xs text-gray-400">Funds from completed orders will be available after 24h.</p>
        </div>
    </div>

    <!-- Withdraw Modal (Simplified) -->
    <div v-if="showWithdrawModal" class="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm">
        <div class="fixed inset-0 bg-gray-500 opacity-75" @click="showWithdrawModal = false"></div>
        
        <div class="bg-white rounded-lg p-6 w-full max-w-md z-10 shadow-xl relative">
            <h3 class="text-lg font-bold mb-4">Withdraw Funds</h3>
            
            <p class="text-sm text-gray-600 mb-4">
                Enter amount to withdraw to <b>BCA - 123****890</b>.
            </p>

            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Amount (Rp)</label>
                <input v-model="withdrawAmount" type="number" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Min. 50.000">
                <p v-if="errorMessage" class="text-red-500 text-xs mt-1">{{ errorMessage }}</p>
            </div>

            <div class="flex justify-end gap-2">
                <button @click="showWithdrawModal = false" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md font-medium">Cancel</button>
                <button @click="handleWithdraw" class="px-4 py-2 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700">Confirm</button>
            </div>
        </div>
    </div>

    <!-- Transaction History -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-100">
        <div class="p-4 border-b bg-gray-50">
            <h3 class="font-bold text-gray-700">Recent Transactions</h3>
        </div>
        <div class="divide-y">
            <!-- New Transactions -->
             <div v-for="withdrawal in withdrawals" :key="withdrawal.id" class="p-4 flex items-center justify-between bg-yellow-50">
                <div>
                     <div class="text-sm font-bold text-gray-900">Withdrawal to BCA</div>
                     <div class="text-xs text-gray-500">{{ withdrawal.date }}</div>
                </div>
                 <div class="text-right">
                     <div class="text-sm font-bold text-red-600">- Rp {{ withdrawal.amount.toLocaleString('id-ID') }}</div>
                     <div class="text-xs text-yellow-600">Processing</div>
                </div>
            </div>

            <div v-for="i in 5" :key="i" class="p-4 flex items-center justify-between">
                <div>
                     <div class="text-sm font-bold text-gray-900">Order Payment #INV-{{ 1000 + i }}</div>
                     <div class="text-xs text-gray-500">1 Feb 2026, 10:{{ i * 12 }}</div>
                </div>
                 <div class="text-right">
                     <div class="text-sm font-bold text-green-600">+ Rp {{ (i * 150000).toLocaleString('id-ID') }}</div>
                     <div class="text-xs text-gray-500">Completed</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard'
})

useHead({
  title: 'Finance - Halalmu Seller'
})

const balance = ref(4250000)
const showWithdrawModal = ref(false)
const withdrawAmount = ref('')
const errorMessage = ref('')
const withdrawals = ref([])

const openModal = () => {
    showWithdrawModal.value = true
}

const handleWithdraw = () => {
    const amount = parseInt(withdrawAmount.value)
    
    if (!amount || amount < 50000) {
        errorMessage.value = 'Minimum withdrawal is Rp 50.000'
        return
    }

    if (amount > balance.value) {
        errorMessage.value = 'Insufficient balance'
        return
    }

    // Success
    balance.value -= amount
    withdrawals.value.unshift({
        id: Date.now(),
        amount: amount,
        date: new Date().toLocaleDateString('en-GB')
    })
    
    showWithdrawModal.value = false
    withdrawAmount.value = ''
    errorMessage.value = ''
    alert('Withdrawal request submitted successfully!')
}
</script>
