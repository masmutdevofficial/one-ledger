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

    <div class="mt-5">
      <!-- Header -->
      <div class="flex items-center justify-between mb-3">
        <span class="text-gray-700 text-sm font-normal">Rewards Hub</span>
        <Icon name="fa:arrow-right" class="text-gray-400 text-sm" />
      </div>

      <!-- CTA Button -->
      <button
        class="w-full bg-black text-white font-semibold text-base rounded-full py-3 mb-4"
        type="button"
      >
        Sign Up / Log In
      </button>

      <!-- Crypto Card -->
      <div class="bg-white rounded-xl shadow px-4 py-3 flex flex-col space-y-3">
        <!-- Row: Bitcoin Info -->
        <div class="w-full flex justify-between items-center space-x-2">
          <div class="flex items-center space-x-1">
            <!-- Bitcoin Icon -->
            <div
              class="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs font-bold"
            >
              <Icon name="fa-brands:bitcoin" />
            </div>
            <span class="font-semibold text-gray-900 text-base">BTC</span>
            <span class="text-gray-400 text-sm font-normal">$109,465.86</span>
          </div>

          <span
            class="ml-auto text-gray-500 text-xs font-normal border border-gray-300 rounded px-2 py-0.5"
          >
            Top Cryptocurrencies
          </span>
        </div>

        <!-- Row: Performance -->
        <div class="text-left">
          <span class="text-green-600 font-semibold">+76.04%</span>
          <span class="text-gray-400 text-xs font-normal"
            >Past 1 year(s) to date</span
          >
        </div>
        <!-- Row: Indicator dots -->
        <div class="flex space-x-1">
          <div class="w-2 h-2 rounded-full bg-green-400"></div>
          <div class="w-2 h-2 rounded-full bg-green-300"></div>
          <div class="w-2 h-2 rounded-full bg-green-200"></div>
        </div>
      </div>
    </div>
  </div>
</template>
