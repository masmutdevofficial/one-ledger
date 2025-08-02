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
    <section class="w-full bg-[#f0f7fc] rounded-2xl p-5 drop-shadow-md">
      <!-- Top Banner -->
      <SliderDashboard />

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
                v-if="item.icon"
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
        <NuxtLink
          to="/market"
          class="block text-center text-[12px] text-[#9ca3af] font-normal cursor-pointer select-none hover:underline"
        >
          View more
        </NuxtLink>
      </div>
    </section>

    <section
      class="w-full bg-[#f0f7fc] rounded-2xl p-5 pt-0 mt-0 drop-shadow-md pb-20 space-y-4"
    >
      <div
        v-for="(news, index) in newsList"
        :key="index"
        class="bg-white rounded-2xl p-5 flex flex-col space-y-3 hover:bg-gray-50 transition-colors duration-150"
      >
        <!-- Header -->
        <div class="flex justify-between items-center">
          <div
            class="flex items-center space-x-1 text-gray-900 font-semibold text-sm"
          >
            <span class="text-[10px] leading-none">•</span>
            <span>{{ news.date }}</span>
          </div>
          <div class="font-extrabold text-sm text-black">News</div>
        </div>

        <!-- Time -->
        <div class="text-gray-400 text-xs font-normal select-none">
          {{ news.time }}
        </div>

        <!-- Content -->
        <div class="flex items-start space-x-4">
          <img
            :src="news.image"
            alt="News Image"
            class="w-24 h-16 object-cover rounded-lg"
          />
          <div class="flex-1 space-y-1">
            <div class="font-extrabold text-black text-sm leading-[1.1]">
              {{ news.title }}
            </div>
            <div class="text-xs text-gray-500">
              {{ truncate(news.description, 25) }}
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <NuxtLink
            :to="`/news/${news.slug}`"
            class="text-[#3ABBA3] text-xs font-semibold hover:underline"
          >
            Read more
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SliderDashboard from "~/components/dashboard/SliderDashboard.vue";

interface NewsItem {
  date: string;
  time: string;
  title: string;
  description: string;
  slug: string;
  image: string;
}

const truncate = (text: string, limit: number): string =>
  text.length > limit ? text.substring(0, limit) + "..." : text;

const newsList: NewsItem[] = [
  {
    date: "Jul 03 2025",
    time: "15:13",
    title: "U.S. House to Vote on 'One Big Beautiful Bill' Tonight",
    description:
      "The U.S. House is expected to vote tonight on a major piece of legislation.",
    slug: "us-house-to-vote-on-one-big-beautiful-bill-tonight",
    image: "https://placehold.co/400x200?text=News+1",
  },
  {
    date: "Jul 03 2025",
    time: "12:45",
    title: "Bitcoin surges above $110K as traders eye ETF approval",
    description:
      "Bitcoin reached new heights amid optimism for a spot ETF approval.",
    slug: "bitcoin-surges-above-110k-as-traders-eye-etf-approval",
    image: "https://placehold.co/400x200?text=News+2",
  },
  {
    date: "Jul 03 2025",
    time: "09:27",
    title: "Global markets react to Fed rate cut decision",
    description:
      "The Federal Reserve's rate cut decision triggered mixed reactions globally.",
    slug: "global-markets-react-to-fed-rate-cut-decision",
    image: "https://placehold.co/400x200?text=News+3",
  },
];

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
