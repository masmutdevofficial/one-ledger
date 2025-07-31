<template>
  <div class="min-h-screen flex justify-center bg-black text-gray-900">
    <div class="w-full relative max-w-md bg-white min-h-screen flex flex-col">
      <!-- Tombol Login -->
      <div class="absolute top-4 right-6">
        <NuxtLink to="/login" class="text-sm font-bold text-gray-700">
          Login
        </NuxtLink>
      </div>
      <div class="mx-6 mt-12">
        <h2 class="text-lg font-semibold mb-4">Sign Up</h2>
        <!-- Email -->
        <input
          v-model="email"
          type="text"
          placeholder="Email"
          class="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 text-sm placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <!-- Username -->
        <input
          v-model="username"
          type="text"
          placeholder="Username"
          class="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 text-sm placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <!-- HP -->
        <input
          v-model="hp"
          type="text"
          placeholder="Phone Number"
          class="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 text-sm placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <!-- Password -->
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 text-sm placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <!-- Referral -->
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
          v-model="referral"
          type="text"
          placeholder="Enter Referral Code"
          class="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 text-sm placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <!-- Agreement -->
        <div class="mb-2 flex items-center gap-2">
          <input
            id="privacy"
            v-model="agreePrivacy"
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
            v-model="agreeTerms"
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
          type="button"
          :disabled="loading"
          @click="handleRegister"
          class="w-full bg-gray-800 text-white font-semibold text-sm rounded-full py-2 hover:bg-gray-700 disabled:opacity-60"
        >
          <span v-if="loading">Registering...</span>
          <span v-else>Create Account</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useApiAlertStore } from "~/stores/api-alert";

definePageMeta({ layout: false });

const showReferral = ref(false);

const email = ref("");
const username = ref("");
const hp = ref("");
const password = ref("");
const referral = ref("");
const agreePrivacy = ref(false);
const agreeTerms = ref(false);
const loading = ref(false);

const modal = useApiAlertStore();
const router = useRouter();

const handleRegister = async () => {
  if (!email.value || !username.value || !hp.value || !password.value) {
    modal.open("Failed", "All fields are required.");
    return;
  }
  if (!agreePrivacy.value || !agreeTerms.value) {
    modal.open("Failed", "You must agree to Privacy Policy and Terms.");
    return;
  }
  loading.value = true;
  try {
    const res = await fetch("https://ledger.masmutdev.id/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        username: username.value,
        hp: hp.value,
        password: password.value,
        referral: referral.value,
      }),
    });
    const data = await res.json();
    if (!res.ok || data.status !== "success") {
      // Tampilkan pesan error dari server atau error log validasi
      let msg = data.message || "Registration failed.";
      if (data.errors_log) {
        msg += " " + Object.values(data.errors_log).join(" ");
      }
      modal.open("Failed", msg);
      loading.value = false;
      return;
    }
    modal.open("Success", data.message || "Registration successful.");
    // Redirect otomatis ke login setelah modal (opsional)
    setTimeout(() => {
      modal.close();
      router.push("/verification");
    }, 1500);
  } catch {
    modal.open("Failed", "Network error. Please try again.");
  } finally {
    loading.value = false;
  }
};
</script>
