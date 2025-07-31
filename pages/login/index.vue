<!-- pages/login.vue -->
<template>
  <div class="min-h-screen flex justify-center bg-black text-gray-900">
    <div class="relative w-full max-w-md bg-white min-h-screen flex flex-col">
      <NuxtLink
        to="/register"
        class="absolute top-4 right-6 text-sm font-bold text-gray-700 hover:underline"
      >
        Sign Up
      </NuxtLink>

      <div class="mx-6 mt-12">
        <h2 class="text-lg font-semibold mb-4">Log In</h2>

        <!-- Email / Phone -->
        <input
          type="text"
          placeholder="Email / Phone Number"
          class="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 text-sm placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />

        <!-- Password + Toggle Eye -->
        <div class="relative mb-3">
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            class="w-full border border-gray-300 rounded-md py-2 px-3 pr-10 text-sm placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <Icon
            :name="showPassword ? 'fa6-solid:eye-slash' : 'fa6-solid:eye'"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 w-5 h-5 cursor-pointer"
            @click="showPassword = !showPassword"
          />
        </div>

        <!-- Forgot Password -->
        <NuxtLink
          to="/forgot-password"
          class="text-sm font-bold text-gray-700 hover:underline"
        >
          Forgot Password?
        </NuxtLink>

        <!-- Submit -->
        <button
          type="submit"
          class="mt-4 w-full bg-gray-800 text-white font-semibold text-sm rounded-full py-2 hover:bg-gray-700"
        >
          Log In
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useModalStore } from "~/stores/modal-alert";

definePageMeta({
  layout: false, // halaman ini tanpa layout global
});

const route = useRoute();
const modal = useModalStore();

onMounted(() => {
  if (route.query.reason === "unauthorized") {
    modal.open("You must be logged in to access this page.");
  }
});

const showPassword = ref(false);
</script>
