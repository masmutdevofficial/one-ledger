<template>
  <div class="mx-4 mt-5">
    <h1 class="text-black text-lg font-semibold mb-4">Language</h1>

    <!-- Search Box -->
    <div>
      <input
        v-model="searchQuery"
        type="search"
        placeholder="Search"
        class="w-full text-sm text-gray-400 placeholder-gray-400 bg-gray-100 rounded-lg py-2 px-4 mb-6 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
    </div>

    <!-- Language List -->
    <ul class="space-y-4 text-black text-sm font-normal">
      <li
        v-for="lang in filteredLanguages"
        :key="lang"
        class="flex items-center justify-between cursor-pointer"
        :class="{
          'font-semibold text-black': lang === selectedLanguage,
          'text-gray-600': lang !== selectedLanguage,
        }"
        @click="selectedLanguage = lang"
      >
        <span>{{ lang }}</span>
        <Icon
          v-if="lang === selectedLanguage"
          name="tabler:check"
          class="text-black text-base"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");
const selectedLanguage = ref("English");

const languages = ["Bahasa Indonesia", "English"];

const filteredLanguages = computed(() => {
  if (!searchQuery.value) return languages;
  return languages.filter((lang) =>
    lang.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>
