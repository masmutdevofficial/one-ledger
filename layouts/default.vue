<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

// Halaman publik
const publicPages = [
  "/",
  "/login",
  "/register",
  "/verification",
  "/forgot-password",
  "/reset-password",
];
const isPublicPage = computed(() => publicPages.includes(route.path));

const isLoading = ref(true);
const isClient = ref(false);

const router = useRouter();
const route = useRoute();

onMounted(async () => {
  isClient.value = true; // Pastikan loader muncul dulu di client

  // Cek hanya di client
  if (!publicPages.includes(route.path)) {
    const token = localStorage.getItem("token");
    const hasToken = !!token && token.trim() !== "";
    if (!hasToken) {
      await router.replace({
        path: "/login",
        query: { reason: "unauthorized" },
      });
      // Jangan tampilkan slot, loader tetap sampai pindah halaman
      return;
    }
  }
  isLoading.value = false;
});
</script>

<template>
  <div class="min-h-screen flex justify-center bg-black text-gray-900">
    <div class="w-full max-w-md bg-white min-h-screen flex flex-col relative">
      <!-- Header -->
      <header
        class="bg-[#f0f7fc] w-full max-w-4xl shadow-sm flex items-center px-6 py-4 space-x-8"
      >
        <!-- Logo -->
        <NuxtLink to="/account" aria-label="Account">
          <img
            alt="Logo with four hexagons"
            class="w-8 h-9"
            src="/img/logo.png"
          />
        </NuxtLink>
        <!-- ... search & nav ... -->
        <form class="flex-1">
          <div class="relative w-full max-w-lg mx-auto">
            <input
              class="w-full border-[1px] border-black rounded-full py-2 pl-6 pr-10 text-black text-base focus:outline-none"
              placeholder="Search"
              type="search"
            />
            <button
              aria-label="Search"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-black text-lg"
              type="submit"
            >
              <Icon name="fa:search" />
            </button>
          </div>
        </form>
        <nav class="flex space-x-5 text-black text-xl">
          <NuxtLink
            to="/notification"
            aria-label="Notifications"
            class="focus:outline-none"
          >
            <Icon name="tabler:bell" size="24" />
          </NuxtLink>
          <NuxtLink
            to="/support"
            aria-label="Support"
            class="focus:outline-none"
          >
            <Icon name="fa6-solid:headset" />
          </NuxtLink>
        </nav>
      </header>

      <!-- Main Content -->
      <main class="flex-1 overflow-y-auto relative">
        <!-- Loader -->
        <div
          v-if="isLoading && !isPublicPage"
          class="absolute inset-0 flex flex-col items-center justify-center bg-white z-50"
        >
          <svg
            class="animate-spin h-8 w-8 text-blue-600 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
          <span class="text-gray-600">Loading...</span>
        </div>
        <!-- Konten utama -->
        <template v-else>
          <slot />

          <!-- Bottom Navigation -->
          <div
            class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 shadow-md z-50"
          >
            <div class="flex justify-around items-center py-2">
              <NuxtLink to="/" class="flex flex-col items-center text-blue-600">
                <Icon name="tabler:hexagons" class="text-2xl" />
                <span class="text-xs mt-1 font-semibold">Home</span>
              </NuxtLink>
              <NuxtLink
                to="/market"
                class="flex flex-col items-center text-gray-400"
              >
                <Icon name="tabler:chart-line" class="text-2xl" />
                <span class="text-xs mt-1">Market</span>
              </NuxtLink>
              <NuxtLink
                to="/trade"
                class="flex flex-col items-center text-gray-400"
              >
                <Icon name="tabler:arrows-left-right" class="text-2xl" />
                <span class="text-xs mt-1">Trade</span>
              </NuxtLink>
              <NuxtLink
                to="/history"
                class="flex flex-col items-center text-gray-400"
              >
                <Icon name="tabler:history" class="text-2xl" />
                <span class="text-xs mt-1 text-center">Order History</span>
              </NuxtLink>
              <NuxtLink
                to="/account"
                class="flex flex-col items-center text-gray-400"
              >
                <Icon name="tabler:wallet" class="text-2xl" />
                <span class="text-xs mt-1">Assets</span>
              </NuxtLink>
            </div>
          </div>
        </template>
      </main>
    </div>
  </div>
</template>
