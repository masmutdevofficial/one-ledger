<template>
  <div>
    <!-- Section: Total Value Summary -->
    <section class="bg-white mb-6 px-4 mt-5">
      <!-- Header -->
      <div
        class="flex items-center space-x-1 text-gray-700 text-sm font-normal mb-1"
      >
        <span>Est. Total Value</span>
        <Icon name="tabler:eye" />
      </div>

      <!-- Total Value -->
      <div
        class="flex items-baseline space-x-1 font-semibold text-3xl text-black mb-1"
      >
        <span>1,12</span>
        <span class="text-base font-normal">USDT</span>
        <Icon name="tabler:caret-down-filled" class="text-base" />
      </div>

      <!-- USD Equivalent -->
      <div class="text-gray-400 text-sm mb-2">≈ $1,12</div>

      <!-- PNL -->
      <div class="text-xs flex items-center text-black mb-4">
        Today's PNL
        <span class="text-[#3ABBA3] font-semibold">
          +0,00938701 USDT (+0,84%)
        </span>
        <Icon
          name="tabler:chevron-right"
          class="ml-1 text-gray-400"
          size="15"
        />
      </div>

      <!-- Action Buttons -->
      <div class="flex space-x-3">
        <NuxtLink
          to="/add-funds"
          class="bg-[#7FD7D5] text-white rounded-md px-6 py-2 text-base font-normal"
        >
          Add Funds
        </NuxtLink>
        <NuxtLink
          to="/send"
          class="bg-[#E6E6E6] text-black rounded-md px-6 py-2 text-base font-semibold"
        >
          Send
        </NuxtLink>
        <NuxtLink
          to="/transfer"
          class="bg-[#E6E6E6] text-black rounded-md px-6 py-2 text-base font-semibold"
        >
          Transfer
        </NuxtLink>
      </div>
    </section>

    <!-- Section: Traders League and Market Table -->
    <section
      class="w-full bg-[#f0f7fc] rounded-2xl p-5 space-y-6 drop-shadow-md"
    >
      <!-- Top Banner -->
      <div
        class="flex flex-row justify-between items-center bg-white rounded-2xl p-5"
      >
        <div class="flex flex-col">
          <div
            class="text-[10px] text-[#9ca3af] font-normal leading-none tracking-wide uppercase"
          >
            TRADERS LEAGUE SEASON 2:
          </div>
          <div
            class="font-semibold text-[14px] mt-1 leading-none text-black tracking-tight"
          >
            SHARE $6M IN REWARDS!
          </div>
        </div>
        <img
          src="/img/fire.png"
          alt="Golden crown icon with 3D shading"
          class="w-6 h-6"
          width="24"
          height="24"
        />
      </div>

      <!-- Market Table -->
      <div class="bg-white rounded-2xl p-5 space-y-6">
        <!-- Tabs -->
        <div class="flex space-x-6 text-[13px] font-semibold text-[#6b7280]">
          <button class="text-black font-bold">Crypto</button>
          <button>Futures</button>
        </div>

        <!-- Table Header -->
        <div
          class="grid grid-cols-[1fr_1fr_1fr] text-[12px] text-[#9ca3af] font-normal"
        >
          <div>Name</div>
          <div class="text-right">Last Price</div>
          <div class="text-right">24h chg%</div>
        </div>

        <!-- Table Rows -->
        <div class="space-y-4">
          <div
            class="grid grid-cols-[1fr_1fr_1fr] items-center"
            v-for="item in marketData"
            :key="item.name"
          >
            <div
              class="flex items-center space-x-1 font-semibold text-[14px] text-black"
            >
              <span>{{ item.name }}</span>
              <img
                :src="item.icon"
                :alt="item.name + ' icon'"
                class="w-3.5 h-3.5"
                width="14"
                height="14"
              />
            </div>
            <div class="text-right">
              <div class="font-bold text-[16px] leading-none">
                {{ item.price }}
              </div>
              <div class="text-[12px] text-[#9ca3af] mt-0.5">
                ${{ item.price }}
              </div>
            </div>
            <div>
              <button
                class="bg-green-500 text-white text-[12px] font-semibold rounded-md px-3 py-1 ml-auto block"
              >
                +{{ item.change }}%
              </button>
            </div>
          </div>
        </div>

        <!-- View More -->
        <div
          class="text-center text-[12px] text-[#9ca3af] font-normal cursor-pointer select-none"
        >
          View more
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const marketData = [
  { name: "BNB", price: "660,95", change: "0,93", icon: "/img/fire.png" },
  { name: "BTC", price: "109.164,81", change: "2,16", icon: "/img/fire.png" },
  { name: "ETH", price: "2.590,16", change: "6,03", icon: "/img/fire.png" },
  { name: "SOL", price: "154,93", change: "4,03", icon: "" },
  { name: "XRP", price: "2,2678", change: "3,76", icon: "" },
];
</script>

<style scoped>
/* Tambahan gaya jika perlu */
</style>
