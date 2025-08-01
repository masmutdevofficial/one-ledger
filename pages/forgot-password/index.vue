<template>
  <div class="min-h-screen flex justify-center bg-black text-gray-900">
    <div class="relative w-full max-w-md bg-white min-h-screen flex flex-col">
      <NuxtLink
        to="/login"
        class="absolute top-4 left-5 text-sm font-bold text-black hover:underline"
      >
        <Icon name="tabler:arrow-narrow-left" size="30" />
      </NuxtLink>

      <div class="mx-6 mt-20">
        <h2 class="text-lg font-semibold mb-0">Forgot Password</h2>
        <h5 class="text-sm font-normal text-gray-500 mb-4">
          Enter your email address and we’ll send you a reset link.
        </h5>

        <!-- Email Input -->
        <div class="relative mb-3">
          <input
            v-model="email"
            :disabled="loading"
            type="email"
            placeholder="Your Email"
            class="w-full border border-gray-300 rounded-md py-2 px-3 text-sm placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>

        <!-- Submit -->
        <button
          type="button"
          :disabled="loading"
          class="mt-4 w-full bg-gray-800 text-white font-semibold text-sm rounded-full py-2 hover:bg-gray-700 disabled:opacity-60"
          @click="submitEmail"
        >
          <span v-if="loading">Processing...</span>
          <span v-else>Send Reset Link</span>
        </button>

        <h5
          class="text-sm text-center font-semibold text-black mb-4 underline mt-6"
        >
          Please check your email after submitting.
        </h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useApiAlertStore } from "~/stores/api-alert";

definePageMeta({ layout: false });

const email = ref("");
const loading = ref(false);
const _router = useRouter();
const modal = useApiAlertStore();

async function submitEmail() {
  if (!email.value) {
    modal.open("Error", "Email is required.");
    return;
  }

  loading.value = true;
  try {
    const res = await fetch("http://localhost:8000/api/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: email.value }),
    });

    const data = await res.json();

    // 🔁 Cek jika belum verifikasi
    if (data.status === "unverified") {
      modal.open(
        "Verification Required",
        data.message || "Please verify your email first."
      );
      if (data.user_id) {
        localStorage.setItem("idReg", data.user_id);
        setTimeout(() => {
          modal.close();
          _router.push("/verification");
        }, 1500);
      }
      return;
    }

    // ✅ Jika success kirim reset token
    if (data.status === "success") {
      modal.open("Success", data.message || "Reset link sent to your email.");
    } else {
      modal.open("Failed", data.message || "Email not found.");
    }
  } catch (error) {
    let msg = "Failed to connect to server.";
    if (error instanceof Error) msg += " " + error.message;
    modal.open("Error", msg);
  } finally {
    loading.value = false;
  }
}
</script>
