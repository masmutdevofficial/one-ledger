<!-- pages/login.vue -->
<template>
  <div class="min-h-screen flex justify-center bg-black text-gray-900">
    <div class="relative w-full max-w-md bg-white min-h-screen flex flex-col">
      <NuxtLink
        to="/register"
        class="absolute top-4 left-5 text-sm font-bold text-black hover:underline"
      >
        <Icon name="tabler:arrow-narrow-left" size="30" />
      </NuxtLink>

      <div class="mx-6 mt-20">
        <h2 class="text-lg font-semibold mb-0">Security Verification</h2>
        <h5 class="text-sm font-normal text-gray-500 mb-4">
          To continue, please finish all verification steps.
        </h5>

        <!-- Email Verification Code -->
        <div class="relative mb-3">
          <input
            type="text"
            placeholder="Email Verification Code"
            class="w-full border border-gray-300 rounded-md py-2 px-3 pr-20 text-sm placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />

          <!-- Countdown or Resend -->
          <span
            v-if="timer > 0"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500 select-none"
          >
            {{ formattedTime }}
          </span>

          <button
            v-else
            @click="resendCode"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-black hover:underline font-semibold"
          >
            Resend
          </button>
        </div>

        <h5 class="text-sm font-normal text-gray-500 mb-4">
          A verification code will be sent to ***@***.com
        </h5>

        <!-- Submit -->
        <button
          type="submit"
          class="mt-4 w-full bg-gray-800 text-white font-semibold text-sm rounded-full py-2 hover:bg-gray-700"
        >
          Submit
        </button>

        <h5
          class="text-sm text-center font-semibold text-black mb-4 underline mt-6"
        >
          Security Verification Unavailable
        </h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const timer = ref(60);
let interval = null;

const formattedTime = computed(() => {
  const min = String(Math.floor(timer.value / 60)).padStart(2, "0");
  const sec = String(timer.value % 60).padStart(2, "0");
  return `${min}:${sec}`;
});

function startTimer() {
  clearInterval(interval);
  timer.value = 60;
  interval = setInterval(() => {
    if (timer.value > 0) {
      timer.value--;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

function resendCode() {
  // Kirim ulang kode verifikasi lewat API kalau perlu
  // contoh: await $fetch('/api/resend-code', { method: 'POST' })

  startTimer();
}

onMounted(startTimer);
onUnmounted(() => clearInterval(interval));
definePageMeta({
  layout: false, // halaman ini tanpa layout global
});
</script>
