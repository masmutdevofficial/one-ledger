<template>
  <section class="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow mt-6">
    <div v-if="news">
      <div class="text-sm text-gray-500 mb-1">
        {{ news.date }} – {{ news.time }}
      </div>
      <h1 class="text-xl font-bold text-black mb-4">
        {{ news.title }}
      </h1>
      <img
        v-if="news.image"
        :src="news.image"
        :alt="news.title"
        class="w-full h-48 object-cover rounded-lg mb-4"
      />
      <p class="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
        {{ news.content }}
      </p>
    </div>

    <div v-else class="text-center text-sm text-gray-500">
      Loading or not found...
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

interface NewsItem {
  title: string;
  slug: string;
  content: string;
  image: string;
  date: string;
  time: string;
}

const route = useRoute();
const router = useRouter();
const news = ref<NewsItem | null>(null);

onMounted(async () => {
  const slug = route.params.slug as string;
  const token = localStorage.getItem("token");

  try {
    const res = await fetch(`http://localhost:8000/api/news/${slug}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (data.status !== "success" || !data.data) {
      router.replace("/news");
      return;
    }

    const item = data.data;
    const published = new Date(item.published_at);

    news.value = {
      title: item.title,
      slug: item.slug,
      content: item.content,
      image: item.image ? `http://127.0.0.1:8000${item.image}` : "",
      date: published.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      time: published.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    };
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("Failed to fetch news detail:", e.message);
    } else {
      console.error("Unknown error occurred while fetching news detail.");
    }
    router.replace("/news");
  }
});
</script>
