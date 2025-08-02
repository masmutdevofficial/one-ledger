<template>
  <section class="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow mt-6">
    <div class="text-sm text-gray-500 mb-1">
      {{ news?.date }} – {{ news?.time }}
    </div>
    <h1 class="text-xl font-bold text-black mb-4">
      {{ news?.title }}
    </h1>
    <img
      v-if="news?.image"
      :src="news.image"
      :alt="news.title"
      class="w-full h-48 object-cover rounded-lg mb-4"
    />
    <p class="text-gray-700 text-sm leading-relaxed">
      {{ news?.description }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

interface NewsItem {
  date: string;
  time: string;
  title: string;
  description: string;
  slug: string;
  image: string;
}

// Dummy data (bisa ganti ke fetch dari API)
const dummyNews: NewsItem[] = [
  {
    date: "Jul 03 2025",
    time: "15:13",
    title: "U.S. House to Vote on 'One Big Beautiful Bill' Tonight",
    description:
      "The U.S. House is expected to vote tonight on a major piece of legislation.",
    slug: "us-house-to-vote-on-one-big-beautiful-bill-tonight",
    image: "https://placehold.co/600x300?text=News+1",
  },
  {
    date: "Jul 03 2025",
    time: "12:45",
    title: "Bitcoin surges above $110K as traders eye ETF approval",
    description:
      "Bitcoin reached new heights amid optimism for a spot ETF approval.",
    slug: "bitcoin-surges-above-110k-as-traders-eye-etf-approval",
    image: "https://placehold.co/600x300?text=News+2",
  },
  {
    date: "Jul 03 2025",
    time: "09:27",
    title: "Global markets react to Fed rate cut decision",
    description:
      "The Federal Reserve's rate cut decision triggered mixed reactions globally.",
    slug: "global-markets-react-to-fed-rate-cut-decision",
    image: "https://placehold.co/600x300?text=News+3",
  },
];

const route = useRoute();
const router = useRouter();
const news = ref<NewsItem | null>(null);

onMounted(() => {
  const slug = route.params.slug as string;
  const found = dummyNews.find((item) => item.slug === slug);
  if (!found) {
    router.replace("/news"); // Redirect jika tidak ditemukan
  } else {
    news.value = found;
  }
});
</script>
