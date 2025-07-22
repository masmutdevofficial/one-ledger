<template>
  <div class="max-w-md w-full mx-auto p-5 flex flex-col h-screen">
    <!-- Header -->
    <div class="flex items-center mb-6">
      <button aria-label="Back" class="text-gray-700 text-lg">
        <Icon name="tabler:arrow-left" class="w-5 h-5" />
      </button>
      <h1 class="flex-grow text-center font-semibold text-base text-black">
        Send USDT
      </h1>
      <div class="w-6"></div>
    </div>

    <!-- Address -->
    <div class="mb-4">
      <label for="address" class="block text-xs font-normal text-gray-600 mb-1"
        >Address</label
      >
      <div class="relative">
        <input
          id="address"
          type="text"
          placeholder="Long press to paste"
          class="w-full rounded-lg bg-gray-100 text-gray-400 text-xs font-normal py-2.5 pr-10 pl-3 placeholder-gray-400"
        />
        <div
          class="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-2 text-gray-400 text-xs"
        >
          <button
            aria-label="User icon"
            class="flex items-center justify-center"
          >
            <Icon name="tabler:user-circle" class="w-4 h-4" />
          </button>
          <button
            aria-label="Scan QR code"
            class="flex items-center justify-center"
          >
            <Icon name="tabler:scan" class="w-4 h-4" />
          </button>
        </div>
      </div>
      <p class="text-[10px] text-red-500 mt-1 font-normal">
        Please enter Recipient's Address
      </p>
    </div>

    <!-- Network -->
    <div class="mb-4">
      <label
        for="network"
        class="block text-xs font-normal text-gray-600 mb-1 flex items-center"
      >
        Network
        <button aria-label="Info" class="ml-1 text-gray-400 text-xs">
          <Icon name="tabler:info-circle" class="w-3.5 h-3.5" />
        </button>
      </label>
      <input
        id="network"
        type="text"
        readonly
        value="Tron (TRC20)"
        class="w-full rounded-lg bg-gray-100 text-gray-700 text-xs font-normal py-2.5 px-3 cursor-default"
      />
      <p class="text-[9px] text-gray-400 mt-1 font-normal leading-tight">
        CAUTION: Ensure the recipient address has been activated; otherwise,
        your withdrawal will fail.
      </p>
    </div>

    <!-- Amount -->
    <div class="mb-4">
      <label for="amount" class="block text-xs font-normal text-gray-600 mb-1"
        >Amount</label
      >
      <div class="flex items-center rounded-lg bg-gray-100 py-2.5 px-3">
        <input
          id="amount"
          type="text"
          placeholder="Minimum 10"
          class="flex-grow bg-transparent text-xs font-normal text-gray-400 placeholder-gray-400 outline-none"
        />
        <span class="text-xs font-normal text-gray-700 mr-3 select-none"
          >USDT</span
        >
        <button class="text-xs font-normal text-cyan-400">Max</button>
      </div>
      <div
        class="flex justify-end mt-1 text-[10px] text-gray-700 font-normal cursor-pointer select-none"
      >
        0,0022919 USDT
        <Icon name="tabler:chevron-down" class="w-3 h-3 ml-1 text-gray-400" />
      </div>
    </div>

    <!-- Contract Information -->
    <div class="text-[9px] text-gray-400 font-normal leading-tight mb-6">
      <p>* Contract Information</p>
      <p>
        * Do not withdraw directly to a crowdfund or ICO. We will not credit
        your account with tokens from that sale.
      </p>
      <p>* Do not transact with Sanctioned Entities.</p>
    </div>

    <!-- Footer -->
    <div
      class="mt-auto flex items-center justify-between border-t border-gray-100 pt-4"
    >
      <div>
        <p class="text-xs font-semibold text-gray-900 leading-none">
          Receive amount
        </p>
        <div class="flex items-center space-x-1">
          <p class="text-xl font-bold text-black leading-none">0,00</p>
          <p class="text-xs font-semibold text-gray-900 leading-none">USDT</p>
          <button
            aria-label="Switch receive amount"
            class="text-gray-400 text-xs"
          >
            <Icon name="tabler:arrows-left-right" class="w-4 h-4" />
          </button>
        </div>
        <p class="text-[10px] text-cyan-400 font-normal">
          Network fee 1,00 USDT
        </p>
      </div>
      <button
        type="button"
        class="bg-cyan-300 text-white text-sm font-semibold rounded-lg px-10 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </div>
  </div>
</template>
