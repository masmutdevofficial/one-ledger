<template>
  <div class="w-full bg-[#eaf3ec] rounded-lg text-center relative p-4">
    <!-- Ilustrasi Koin -->
    <div class="flex justify-center">
      <img
        src="/img/coin-box.png"
        alt="Gift box with coins"
        class="w-28 h-32 object-contain"
        width="120"
        height="140"
      />
    </div>

    <!-- Judul & Subjudul -->
    <h1 class="mt-2 text-lg sm:text-xl font-semibold text-black">
      <span class="text-[#00b38a] font-semibold">11,000 USDT</span> Bonus for
      New Users
    </h1>
    <p class="mt-1 text-sm text-gray-500">
      Sign up now for limited-time rewards
    </p>

    <!-- Countdown -->
    <div
      class="mt-3 flex justify-center space-x-2 text-xs text-gray-700 font-semibold"
    >
      <div class="bg-white rounded-md px-2 py-1 shadow-sm">13</div>
      <div class="pt-1">d</div>
      <div class="bg-white rounded-md px-2 py-1 shadow-sm">23</div>
      <div class="pt-1">h</div>
      <div class="bg-white rounded-md px-2 py-1 shadow-sm">59</div>
      <div class="pt-1">m</div>
      <div class="bg-white rounded-md px-2 py-1 shadow-sm">21</div>
      <div class="pt-1">s</div>
    </div>

    <!-- Cards -->
    <div class="mt-5 flex justify-between space-x-3 px-2">
      <!-- Sign Up -->
      <div class="bg-white rounded-lg p-3 flex-1 shadow-sm text-left">
        <p class="font-semibold text-sm text-black">Sign Up</p>
        <p class="text-[#00b38a] font-semibold text-sm mt-1">20 USDT</p>
        <p class="text-xs text-gray-400 mt-0.5">Max Reward</p>
      </div>

      <!-- Deposit / Trade -->
      <div class="bg-white rounded-lg p-3 flex-1 shadow-sm text-left">
        <p class="font-semibold text-sm text-black">Deposit/Trade</p>
        <p class="text-[#00b38a] font-semibold text-sm mt-1">8,000 USDT</p>
        <p class="text-xs text-gray-400 mt-0.5">Futures Trial Funds</p>
      </div>

      <!-- Earn -->
      <div class="bg-white rounded-lg p-3 flex-1 shadow-sm text-left">
        <p class="font-semibold text-sm text-black">Earn</p>
        <p class="text-[#00b38a] font-semibold text-sm mt-1">100%</p>
        <p class="text-xs text-gray-400 mt-0.5">Max APR</p>
      </div>
    </div>
  </div>
</template>
