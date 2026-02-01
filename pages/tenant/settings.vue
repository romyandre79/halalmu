<template>
  <div>
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Settings</h2>

    <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div class="p-4 border-b bg-gray-50">
            <h3 class="font-bold text-gray-700">General Settings</h3>
        </div>
        <div class="p-6 space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="text-sm font-medium text-gray-900">Email Notifications</h4>
                    <p class="text-sm text-gray-500">Receive emails about new orders and account updates.</p>
                </div>
                <div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle1" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 checked:right-0 checked:border-primary-600"/>
                    <label for="toggle1" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer checked:bg-primary-600"></label>
                </div>
            </div>
            <hr class="border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="text-sm font-medium text-gray-900">Vacation Mode</h4>
                    <p class="text-sm text-gray-500">Temporarily close your shop and hide all products.</p>
                </div>
                 <div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle2" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 checked:right-0 checked:border-primary-600"/>
                    <label for="toggle2" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer checked:bg-primary-600"></label>
                </div>
            </div>
             <hr class="border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="text-sm font-medium text-gray-900">Auto-Accept Orders</h4>
                    <p class="text-sm text-gray-500">Automatically accept incoming orders regardless of stock.</p>
                </div>
                 <div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle3" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 checked:right-0 checked:border-primary-600"/>
                    <label for="toggle3" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer checked:bg-primary-600"></label>
                </div>
            </div>
        </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mt-6">
        <div class="p-4 border-b bg-gray-50">
             <h3 class="font-bold text-gray-700">Security</h3>
        </div>
         <div class="p-6">
            <button @click="changePassword" class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50 w-full sm:w-auto">
                Change Password
            </button>
             <button @click="setupTwoFactor" class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50 w-full sm:w-auto mt-3 sm:mt-0 sm:ml-3">
                Two-Factor Authentication
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
  title: 'Settings - Halalmu Seller'
})

const changePassword = () => {
    alert('Change Password feature coming soon (Backend Integration Required).')
}

const setupTwoFactor = () => {
    alert('Two-Factor Authentication setup coming soon.')
}
</script>

<style scoped>
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68D391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68D391;
}
</style>
