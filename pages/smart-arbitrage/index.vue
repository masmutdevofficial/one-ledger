<template>
  <div class="mx-4 mt-5">
    <!-- Header -->
    <h1 class="font-semibold text-base mb-4">Smart Arbitrage</h1>

    <!-- Total Balance Section -->
    <div class="flex justify-between items-center mb-4">
      <div>
        <div class="flex items-center space-x-1 mb-1">
          <span class="text-sm font-semibold">Total Balance</span>
          <Icon name="tabler:eye" class="text-gray-400 text-xs" size="20" />
          <Icon
            name="tabler:credit-card"
            class="text-gray-400 text-xs"
            size="20"
          />
        </div>
        <div
          class="flex items-center space-x-1 text-sm font-semibold cursor-pointer select-none"
        >
          <span>-- BTC</span>
          <Icon
            name="tabler:chevron-down"
            class="text-gray-400 text-xs"
            size="20"
          />
        </div>
        <div class="text-xs font-semibold text-black mt-1">
          30-Day Profit
          <span class="text-cyan-500 font-semibold">0.00 BTC</span>
        </div>
      </div>

      <!-- Robot Image -->
      <img
        src="/img/robot-logo.png"
        alt="Robot"
        class="w-20 h-20 object-contain"
        width="80"
        height="80"
      />
    </div>

    <!-- Arbitrage Items -->
    <div class="space-y-3">
      <template v-for="(item, i) in items" :key="i">
        <div
          class="flex justify-between items-center bg-gray-50 rounded-lg p-3"
          :class="item.disabled && 'opacity-40 cursor-not-allowed select-none'"
        >
          <!-- Left: Logos + Symbol -->
          <div class="relative w-7 h-6">
            <img
              :src="getIcons(item.symbol)[0]"
              alt="base"
              class="absolute left-0 top-0 w-20 h-7 z-0 rounded-full"
            />
            <img
              :src="getIcons(item.symbol)[1]"
              alt="quote"
              class="absolute left-4 top-3 w-6 h-6 z-10 rounded-full"
            />
          </div>
          <span
            class="font-semibold text-sm"
            :class="item.disabled ? 'text-gray-400' : 'text-black'"
          >
            {{ item.symbol }}
          </span>

          <!-- Right: Percentages -->
          <div class="text-right">
            <div class="text-cyan-600 font-semibold text-lg">
              {{ item.yield }}
            </div>
            <div class="text-xs text-gray-400">
              30d APR:
              <span class="text-black font-semibold">{{ item.apr }}</span>
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- Footer -->
    <div class="text-center text-gray-400 text-xs mt-6 select-none">
      No more data
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    symbol: "BTC/USDT",
    yield: "6.69%",
    apr: "2.88%",
  },
  {
    symbol: "ETH/USDT",
    yield: "6.91%",
    apr: "4.77%",
  },
  {
    symbol: "SOL/USDT",
    yield: "--",
    apr: "2.74%",
    disabled: true,
  },
  {
    symbol: "XRP/USDT",
    yield: "0.34%",
    apr: "5.19%",
  },
  {
    symbol: "DOGE/USDT",
    yield: "9.99%",
    apr: "4.43%",
  },
];

const getIcons = (symbol) => {
  const [base, quote] = symbol.toLowerCase().split("/");
  return [`/crypto/${base}.png`, `/crypto/${quote}.png`];
};
</script>
