<template>
  <div class="max-w-md mx-4 mt-5 space-y-4">
    <!-- Card Item -->
    <div
      v-for="(card, i) in cards"
      :key="i"
      class="border border-gray-200 rounded-lg p-4"
    >
      <!-- Header -->
      <div class="flex items-center space-x-3 mb-2">
        <img
          :src="card.logo"
          :alt="`${card.name} logo`"
          class="w-8 h-8 rounded-full flex-shrink-0"
        />
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-gray-900 text-sm leading-5 truncate">
            {{ card.name }}
          </p>
          <p class="text-gray-400 text-xs leading-4">
            {{ card.date }}
          </p>
        </div>
        <span
          class="text-xs font-semibold text-gray-600 bg-gray-200 rounded-md px-2 py-0.5"
        >
          Ended
        </span>
      </div>

      <!-- Body -->
      <div class="text-gray-400 text-xs leading-4 space-y-1">
        <p>Supported Network</p>
        <p>
          Participants
          <span class="float-right text-gray-900 font-semibold">
            {{ card.participants }}
          </span>
        </p>
        <p>
          Quest Rewards
          <span class="float-right text-gray-900 font-bold">
            {{ card.rewards }}
          </span>
        </p>
      </div>

      <!-- Footer -->
      <div class="flex justify-end mt-1">
        <img
          src="https://storage.googleapis.com/a1aa/image/41a39e34-908f-46ff-0e53-06e08adb3824.jpg"
          alt="Yellow coin icon"
          class="w-5 h-5"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    name: "KernelDAO",
    logo: "https://storage.googleapis.com/a1aa/image/a59d3685-1100-417c-014a-68774b24990f.jpg",
    date: "2025-04-14",
    participants: "1,758,158",
    rewards: "40M KERNEL",
  },
  {
    name: "Solv Protocol",
    logo: "https://storage.googleapis.com/a1aa/image/83186a02-f4f4-4161-b4a5-8427a4a6628f.jpg",
    date: "2025-01-18",
    participants: "1,327,684",
    rewards: "588M SOLV",
  },
  {
    name: "Lista",
    logo: "https://storage.googleapis.com/a1aa/image/e55fdbd9-a74d-431d-db49-a047495d5bd7.jpg",
    date: "2024-06-20",
    participants: "1,247,412",
    rewards: "100M LISTA",
  },
  {
    name: "BounceBit",
    logo: "https://storage.googleapis.com/a1aa/image/e5f7829e-9ecd-45cb-d8a1-af0aa7fc30d3.jpg",
    date: "2024-05-13",
    participants: "822,609",
    rewards: "168M BNB",
  },
];
</script>
