<template>
  <div class="bg-white p-6">
    <div class="max-w-md mx-auto">
      <!-- Title -->
      <h2 class="text-sm font-semibold text-black mb-3">Account Info</h2>

      <!-- Account Card -->
      <div
        class="flex items-center bg-white border border-gray-300 rounded-xl p-4 mb-6"
        style="box-shadow: 0 0 0 1px #d1eaea"
      >
        <div
          class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4"
        >
          <img
            src="/img/user.png"
            alt="User icon"
            class="w-12 h-12"
            width="40"
            height="40"
          />
        </div>
        <p class="text-gray-400 text-sm font-semibold select-none">Username</p>
        <button
          aria-label="Edit username"
          class="ml-auto text-[#6cc9c9] hover:text-[#4da6a6] focus:outline-none"
        >
          <Icon name="tabler:edit" class="w-5 h-5" />
        </button>
      </div>

      <!-- Grid Menu -->
      <div class="grid grid-cols-4 gap-y-6 gap-x-4">
        <NuxtLink
          v-for="(item, index) in menus"
          :key="index"
          :to="item.link"
          class="flex flex-col items-center text-center"
        >
          <div
            class="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-2"
          >
            <img
              :src="item.img"
              :alt="item.title"
              class="w-8 h-8"
              width="40"
              height="40"
            />
          </div>
          <p class="text-[10px] font-semibold text-black">{{ item.title }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const menus = [
  {
    title: "Language",
    link: "/language",
    img: "/img/language.png",
  },
  {
    title: "Smart Arbitrage",
    link: "/smart-arbitrage",
    img: "/img/robot-logo.png",
  },
  {
    title: "P2P",
    link: "/p2p",
    img: "/img/business-to-consumer.png",
  },
  {
    title: "Security",
    link: "/security",
    img: "/img/reset-password.png",
  },
  {
    title: "Hub Reward",
    link: "/reward",
    img: "/img/wallet.png",
  },
  {
    title: "LaunchPool",
    link: "/launchpool",
    img: "/img/rocket.png",
  },
  {
    title: "Megadrop",
    link: "/megadrop",
    img: "/img/dropshipping.png",
  },
  {
    title: "Weekly Event",
    link: "/event",
    img: "/img/calendar.png",
  },
  {
    title: "Legal Document",
    link: "/legal",
    img: "/img/compliant.png",
  },
  {
    title: "Verify",
    link: "/verify",
    img: "/img/social-media.png",
  },
  {
    title: "Logout",
    link: "/logout",
    img: "/img/logout.png",
  },
];
</script>
