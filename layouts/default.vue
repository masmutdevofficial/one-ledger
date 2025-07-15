<template>
  <div class="min-h-screen flex justify-center bg-black text-gray-900">
    <div class="w-full max-w-md bg-white min-h-screen flex flex-col">
      <!-- Header -->
      <header
        class="bg-[#f0f7fc] w-full max-w-4xl shadow-sm flex items-center px-6 py-4 space-x-8"
      >
        <!-- Logo -->
        <img
          alt="Logo with four hexagons"
          class="w-8 h-9"
          src="/img/logo.png"
        />

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
          <button aria-label="Notifications" class="focus:outline-none">
            <Icon name="tabler:bell" size="24" />
          </button>
          <button aria-label="Support" class="focus:outline-none">
            <Icon name="fa6-solid:headset" />
          </button>
          <button aria-label="Help" class="focus:outline-none">
            <Icon name="tabler:info-circle" size="24" />
          </button>
        </nav>
      </header>

      <!-- Main Content -->
      <main class="flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
