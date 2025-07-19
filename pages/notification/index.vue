<template>
  <div class="p-4 w-full">
    <!-- Header -->
    <button @click="router.back()" class="flex items-center mb-4">
      <Icon name="tabler:arrow-left" class="text-black me-2" size="25" />
      <span class="text-lg font-semibold text-black">Notification</span>
    </button>

    <!-- Deposit -->
    <div class="p-3 border border-gray-300 rounded-lg mb-2 bg-white">
      <h2 class="text-lg font-semibold text-center mb-0 text-black">Deposit</h2>
      <p class="text-gray-500 text-center text-sm mt-0 mb-3">
        2024-01-01 12:00
      </p>
      <div class="flex flex-col justify-center items-center mb-3 text-black">
        <p><strong>Order ID:</strong> ORDER123456</p>
        <p><strong>Amount:</strong> $100</p>
      </div>
      <div class="flex flex-row justify-between items-center text-black">
        <p><strong>Network:</strong> BCA</p>
        <p><span class="text-yellow-500">Pending</span></p>
      </div>
    </div>

    <!-- Withdraw -->
    <div class="p-3 border border-gray-300 rounded-lg mb-2 bg-white">
      <h2 class="text-lg font-semibold text-center mb-0 text-black">
        Withdraw
      </h2>
      <p class="text-gray-500 text-center text-sm mt-0 mb-3">
        2024-01-02 14:30
      </p>
      <div class="flex flex-col justify-center items-center mb-3 text-black">
        <p><strong>Order ID:</strong> WD123456</p>
        <p><strong>Amount:</strong> $50</p>
      </div>
      <div class="flex flex-row justify-between items-center text-black">
        <p><strong>Network:</strong> DANA</p>
        <p><span class="text-green-500">Sukses</span></p>
      </div>
    </div>

    <!-- No Transaction Message -->
    <div class="text-center text-gray-500">No transaction history found.</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
