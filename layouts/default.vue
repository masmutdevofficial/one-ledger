<template>
  <div class="min-h-screen flex justify-center bg-black text-gray-900">
    <div class="w-full max-w-md bg-white min-h-screen flex flex-col">
      <!-- Header -->
      <header
        class="bg-[#f0f7fc] w-full max-w-4xl shadow-sm flex items-center px-6 py-4 space-x-8"
      >
        <!-- Logo -->
        <NuxtLink to="/dashboard" aria-label="Dashboard">
          <img
            alt="Logo with four hexagons"
            class="w-8 h-9"
            src="/img/logo.png"
          />
        </NuxtLink>

        <!-- Search Form -->
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

        <!-- Top Icons -->
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
          <button aria-label="Help" class="focus:outline-none">
            <Icon name="tabler:info-circle" size="24" />
          </button>
        </nav>
      </header>

      <!-- Main Content -->
      <main class="flex-1 overflow-y-auto">
        <slot />
      </main>

      <div
        class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md z-50"
      >
        <div class="max-w-md mx-auto flex justify-around items-center py-2">
          <!-- Home -->
          <NuxtLink to="/" class="flex flex-col items-center text-blue-600">
            <Icon name="tabler:hexagons" class="text-2xl" />
            <span class="text-xs mt-1 font-semibold">Home</span>
          </NuxtLink>

          <!-- Market -->
          <NuxtLink
            to="/market"
            class="flex flex-col items-center text-gray-400"
          >
            <Icon name="tabler:chart-line" class="text-2xl" />
            <span class="text-xs mt-1">Market</span>
          </NuxtLink>

          <!-- Trade -->
          <NuxtLink
            to="/trade"
            class="flex flex-col items-center text-gray-400"
          >
            <Icon name="tabler:arrows-left-right" class="text-2xl" />
            <span class="text-xs mt-1">Trade</span>
          </NuxtLink>

          <!-- Order History -->
          <NuxtLink
            to="/history"
            class="flex flex-col items-center text-gray-400"
          >
            <Icon name="tabler:history" class="text-2xl" />
            <span class="text-xs mt-1 text-center">Order History</span>
          </NuxtLink>

          <!-- Assets -->
          <NuxtLink
            to="/assets"
            class="flex flex-col items-center text-gray-400"
          >
            <Icon name="tabler:wallet" class="text-2xl" />
            <span class="text-xs mt-1">Assets</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
