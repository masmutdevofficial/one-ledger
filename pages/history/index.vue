<template>
  <div class="max-w-md m-4">
    <h2 class="text-black font-bold text-base mb-4">My Tasks</h2>

    <!-- Tab Buttons -->
    <div class="flex space-x-6 mb-3 text-sm font-semibold">
      <button class="text-black border-b-2 border-yellow-400 pb-1">
        Ongoing
      </button>
      <button class="text-gray-400">Past</button>
    </div>

    <!-- Task Card -->
    <div class="border border-gray-200 rounded-lg p-4">
      <!-- Task Description -->
      <div
        class="flex items-center space-x-2 mb-3 text-sm text-black font-normal"
      >
        <Icon name="tabler:target-arrow" class="w-4 h-4 text-black" />
        <span
          >Trade &gt; $5,000 on Futures or Spot, get 25 USDC token
          voucher.</span
        >
      </div>

      <!-- Progress -->
      <div class="text-xs text-gray-400 mb-1 flex justify-between">
        <span>Progress</span>
        <span><span class="text-cyan-400">0</span>/5000 USDT</span>
      </div>

      <!-- Reward -->
      <div class="text-xs text-gray-400 mb-1 flex justify-between">
        <span>Reward</span>
        <span class="flex items-center space-x-1">
          <Icon name="tabler:award" class="w-4 h-4 text-yellow-400" />
          <span>25 USDC Token Voucher</span>
        </span>
      </div>

      <!-- Time Left -->
      <div class="text-xs text-gray-400 mb-4 flex justify-between">
        <span>Time Left to Complete Task</span>
        <span>01D : 23H : 30M</span>
      </div>

      <!-- Button -->
      <div class="flex justify-end">
        <button
          class="bg-cyan-400 text-white text-xs font-semibold rounded px-4 py-1"
        >
          Do Task
        </button>
      </div>
    </div>
  </div>
</template>
