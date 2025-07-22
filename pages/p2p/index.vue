<template>
  <div class="max-w-md mx-auto p-4">
    <!-- Top Filter Bar -->
    <div
      class="flex items-center justify-start space-x-6 border-b border-gray-200 pb-3 mb-4"
    >
      <button
        class="flex items-center space-x-1 text-gray-700 text-sm font-semibold"
      >
        <img
          src="https://storage.googleapis.com/a1aa/image/ca8f8cbf-eb2a-430f-342c-9820d3a64d15.jpg"
          alt="USDT icon"
          class="w-5 h-5 rounded-full"
        />
        <span>USDT</span>
        <Icon name="tabler:chevron-down" class="text-xs" />
      </button>
      <button
        class="flex items-center space-x-1 text-gray-700 text-sm font-semibold"
      >
        <span>Amount</span>
        <Icon name="tabler:chevron-down" class="text-xs" />
      </button>
      <button
        class="flex items-center space-x-1 text-gray-700 text-sm font-semibold"
      >
        <span>Payment</span>
        <Icon name="tabler:chevron-down" class="text-xs" />
      </button>
      <button
        aria-label="Filter"
        class="ml-auto text-gray-500 hover:text-gray-700"
      >
        <Icon name="tabler:filter" />
      </button>
    </div>

    <!-- Cards List -->
    <div v-for="card in cards" :key="card.name" class="mb-6">
      <div class="flex items-center space-x-2 mb-1">
        <img :src="card.img" :alt="card.name" class="w-6 h-6 rounded-full" />
        <span class="text-gray-900 font-semibold text-sm">{{ card.name }}</span>
        <span v-if="card.emoji" class="text-sm">{{ card.emoji }}</span>
        <Icon
          v-if="card.sync"
          name="tabler:refresh"
          class="text-xs text-gray-400"
        />
      </div>
      <div class="flex items-center space-x-2 text-xs text-gray-400 mb-1">
        <span>Trade(s)</span>
        <span>{{ card.trades }}</span>
        <span class="text-[6px]">&bull;</span>
        <span>{{ card.rating }}</span>
      </div>
      <div class="flex items-baseline space-x-1 mb-0.5">
        <span class="text-gray-700 text-sm">Rp</span>
        <span class="font-extrabold text-2xl text-gray-900">{{
          card.price
        }}</span>
        <span class="text-gray-400 text-xs">/USDT</span>
      </div>
      <div class="text-xs text-gray-400 mb-1">
        Limit
        <span class="text-gray-600 font-semibold">{{ card.limit }}</span>
      </div>
      <div class="text-xs text-gray-400 mb-3">
        Available
        <span class="text-gray-600 font-semibold"
          >{{ card.available }} USDT</span
        >
      </div>
      <div class="flex items-center justify-between text-xs text-gray-400 mb-1">
        <div class="flex flex-wrap items-center gap-1">
          <span v-for="method in card.methods" :key="method">{{ method }}</span>
        </div>
        <div class="flex items-center space-x-1">
          <Icon name="tabler:clock" class="text-gray-400" />
          <span>{{ card.time }}</span>
        </div>
      </div>
      <button
        class="bg-green-500 text-white text-xs font-semibold rounded-md px-6 py-1 hover:bg-green-600 transition w-full"
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    name: "LucasFastpay",
    img: "https://storage.googleapis.com/a1aa/image/924b4910-de06-4aa1-9e55-1968b35048ea.jpg",
    emoji: "👌",
    trades: "1366 (99,00%)",
    rating: "98,20%",
    price: "16.280",
    limit: "3.000.000 - 10.000.000 IDR",
    available: "6.348,05",
    methods: ["Yap! (BNI)"],
    time: "15 min",
  },
  {
    name: "Nap_Rut_Nhanh_Gon",
    img: "https://storage.googleapis.com/a1aa/image/fb2d0274-cda1-4127-b79a-4237612baa80.jpg",
    sync: true,
    trades: "2749 (100,00%)",
    rating: "75,86%",
    price: "16.280",
    limit: "8.000.001 - 20.000.000 IDR",
    available: "3.380,27",
    methods: ["Bank Transfer"],
    time: "30 min",
  },
  {
    name: "PANTHER_Z",
    img: "https://storage.googleapis.com/a1aa/image/941c01a6-560e-45d5-d1fe-e5cec5b32b2a.jpg",
    emoji: "⭐",
    trades: "850 (100,00%)",
    rating: "100,00%",
    price: "16.281",
    limit: "10.000.000 - 62.338.830 IDR",
    available: "3.828,93",
    methods: ["Bank Transfer", "Mandiri Pay"],
    time: "15 min",
  },
  {
    name: "INPUTCHANGER星FAST",
    img: "https://storage.googleapis.com/a1aa/image/b1a8a6d4-b95f-45b6-99d0-85a0a47a9032.jpg",
    emoji: "⭐",
    trades: "3616 (100,00%)",
    rating: "99,66%",
    price: "16.281",
    limit: "5.000.000 - 51.516.631 IDR",
    available: "3.164,21",
    methods: ["Permata Me", "Bank Transfer"],
    time: "15 min",
  },
];
</script>
