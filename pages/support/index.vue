<template>
  <div class="min-h-screen w-full bg-white text-black flex flex-col">
    <!-- Header -->
    <header class="flex items-center px-4 py-3">
      <NuxtLink to="/dashboard" class="text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </NuxtLink>
      <div class="flex-1 text-center">
        <p class="font-semibold text-black">Assistant Ledger X</p>
        <p class="text-xs text-black">Ask me anything</p>
      </div>
    </header>

    <!-- Chat Area -->
    <div class="flex-1 px-4 py-3 overflow-auto">
      <div v-if="messages.length > 0">
        <div v-for="message in messages" :key="message.id" class="mb-4">
          <div
            class="flex"
            :class="message.status === 0 ? 'items-end' : 'items-start'"
          >
            <div
              class="p-4 rounded-lg w-full flex flex-col"
              :class="
                message.status === 1
                  ? 'bg-green-200 text-black'
                  : 'bg-gray-300 text-white'
              "
            >
              <p>{{ message.pesan }}</p>
              <p class="text-xs opacity-75">{{ message.created_at }}</p>

              <img
                v-if="message.gambar"
                :src="message.gambar"
                class="w-24 h-24 rounded-lg mt-2"
                alt="Gambar pesan"
              />

              <div v-if="message.balasan.length > 0" class="mt-2">
                <p class="font-semibold text-xs text-gray-500">Balasan:</p>
                <div
                  v-for="reply in message.balasan"
                  :key="reply.id"
                  class="ml-4 p-2 bg-gray-200 rounded-lg"
                >
                  <p class="text-sm">{{ reply.pesan }}</p>
                  <img
                    v-if="reply.gambar"
                    :src="reply.gambar"
                    class="w-16 h-16 rounded-lg mt-2"
                    alt="Gambar balasan"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="bg-gray-300 p-4 rounded-lg text-center">
        <p class="text-black">Belum ada pesan. Kirim pesan pertama Anda!</p>
      </div>
    </div>

    <!-- Footer -->
    <footer class="px-4 py-2 flex items-center relative bg-white">
      <!-- Floating Preview -->
      <div
        v-if="imagePreview"
        class="absolute bg-white p-2 rounded-lg shadow-md top-[-120px] left-0"
      >
        <img
          :src="imagePreview"
          alt="Preview"
          class="max-w-full max-h-24 rounded-lg"
        />
      </div>

      <!-- Upload Icon -->
      <label
        for="imageUpload"
        class="cursor-pointer text-yellow-400 flex items-center"
        :class="{ 'cursor-not-allowed opacity-50': imageUploaded }"
      >
        <Icon name="tabler:photo-up" class="w-6 h-6" />
      </label>
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        class="hidden"
        @change="handleImageUpload"
        :disabled="imageUploaded"
      />

      <!-- Input Field -->
      <input
        type="text"
        v-model="message"
        placeholder="Ketik pesan..."
        class="flex-1 mx-4 px-4 py-2 rounded-lg bg-gray-300 text-sm text-black focus:outline-none"
      />

      <!-- Send Button -->
      <button @click="sendMessage" :disabled="loading" class="text-yellow-400">
        <svg
          v-if="!loading"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 10l18-7-7 18-4-8-7-3z"
          />
        </svg>
        <span v-else class="text-xs">Mengirim...</span>
      </button>
    </footer>

    <!-- Modal Alert -->
    <div
      v-if="alert.message"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div
        class="p-4 rounded-lg flex flex-col justify-center items-center text-center w-[300px] bg-black/70 text-white"
      >
        <p>{{ alert.message }}</p>
        <button
          @click="closeAlert"
          class="mt-4 px-4 py-2 bg-white text-black rounded"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Message {
  id: number;
  status: 0 | 1;
  pesan: string;
  created_at: string;
  gambar?: string;
  balasan: {
    id: number;
    pesan: string;
    gambar?: string;
  }[];
}

const messages = ref<Message[]>([
  {
    id: 1,
    status: 0, // 0 = user, 1 = system
    pesan: "Halo, saya butuh bantuan.",
    created_at: "2025-07-18 10:00",
    balasan: [
      {
        id: 11,
        pesan: "Tentu, ada yang bisa kami bantu?",
      },
    ],
  },
]);

const message = ref("");
const alert = ref<{ message: string }>({ message: "" });
const loading = ref(false);
const imageUploaded = ref(false);
const imagePreview = ref<string | null>(null);

// dummy upload handler
function handleImageUpload(event: Event) {
  const file = (event.target as HTMLInputElement)?.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.value = reader.result as string;
      imageUploaded.value = true;
    };
    reader.readAsDataURL(file);
  }
}

// dummy send handler
function sendMessage() {
  if (!message.value.trim()) return;

  loading.value = true;

  setTimeout(() => {
    messages.value.push({
      id: Date.now(),
      status: 0,
      pesan: message.value,
      created_at: new Date().toLocaleString(),
      gambar: imagePreview.value || undefined,
      balasan: [],
    });

    alert.value.message = "Pesan berhasil dikirim";
    message.value = "";
    imageUploaded.value = false;
    imagePreview.value = null;
    loading.value = false;
  }, 1000);
}

function closeAlert() {
  alert.value.message = "";
}
</script>
