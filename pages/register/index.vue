<template>
  <div class="min-h-screen flex justify-center bg-black text-gray-900">
    <div class="w-full relative max-w-md bg-white min-h-screen flex flex-col">
      <!-- Tombol Login di pojok kanan atas -->
      <div class="absolute top-4 right-6">
        <NuxtLink to="/login" class="text-sm font-bold text-gray-700">
          Login
        </NuxtLink>
      </div>

      <div class="mx-6 mt-12">
        <h2 class="text-lg font-semibold mb-4">Sign Up</h2>

        <input
          type="text"
          placeholder="Email / Phone Number"
          class="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 text-sm placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />

        <button
          type="button"
          class="w-full flex justify-between items-center text-xs text-gray-500 mb-4"
          @click="showReferral = !showReferral"
        >
          <span>Referral Code (Optional)</span>
          <Icon
            name="fa6-solid:chevron-down"
            :class="[
              'transition-transform duration-200',
              showReferral ? 'rotate-180' : '',
            ]"
          />
        </button>

        <input
          v-if="showReferral"
          type="text"
          placeholder="Enter Referral Code"
          class="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 text-sm placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />

        <div class="mb-2 flex items-center gap-2">
          <input
            id="privacy"
            type="checkbox"
            class="h-4 w-4 text-gray-800 focus:ring-gray-400 border-gray-300 rounded"
          />
          <label for="privacy" class="text-xs text-gray-700">
            I have read and agree to the
            <a href="#" class="underline text-black font-semibold"
              >Privacy Policy</a
            >.
          </label>
        </div>

        <div class="mb-6 flex items-center gap-2">
          <input
            id="terms"
            type="checkbox"
            class="h-4 w-4 text-gray-800 focus:ring-gray-400 border-gray-300 rounded"
          />
          <label for="terms" class="text-xs text-gray-700">
            I have read and agree to the
            <a href="#" class="underline text-black font-semibold"
              >Terms of Use</a
            >.
          </label>
        </div>

        <button
          type="submit"
          class="w-full bg-gray-800 text-white font-semibold text-sm rounded-full py-2 hover:bg-gray-700"
        >
          Create Account
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: false,
});

const showReferral = ref(false);
</script>
