<template>
  <section id="Example" class="min-h-screen p-8">
    <header class="mt-8 mb-12 text-center">
      <h2 class="text-3xl font-extrabold mb-4">{{ t("example.title") }}</h2>
      <div class="w-24 h-1 bg-accent mx-auto mb-6 rounded-full opacity-50"></div>

      <p class="text-text/80 max-w-2xl mx-auto text-pretty leading-relaxed">
        {{ t("example.description") }}
        <span class="text-accent font-mono">{{ t("example.yokaiApi") }}</span>
        {{ t("example.subtitle") }}
      </p>
    </header>

    <main class="max-w-6xl mx-auto">
      <div v-if="yokais.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="yokai in yokais"
          :key="yokai.id"
          class="group bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]"
        >
          <div class="relative aspect-3/4 overflow-hidden bg-neutral-900">
            <img
              :src="yokai.portrait_path"
              :alt="yokai.west_name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div
              class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#1a1a1a] to-transparent h-24"
            ></div>
          </div>

          <div class="p-6">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="text-xl font-bold text-white group-hover:text-accent transition-colors">
                  {{ yokai.west_name }}
                </h3>
                <p class="text-sm">{{ yokai.kanji_name }}</p>
              </div>

              <span class="text-xs font-mono px-2 py-1 bg-background/50 rounded">
                #{{ yokai.id }}
              </span>
            </div>

            <p class="text-sm text-text/50 line-clamp-3 leading-snug italic">
              "{{ yokai.behavior }}"
            </p>
          </div>
        </article>
      </div>

      <div v-else class="flex flex-col items-center justify-center py-20">
        <div class="flex-col gap-4 w-full flex items-center justify-center">
          <div
            class="w-20 h-20 border-4 border-transparent text-secondary text-4xl animate-spin flex items-center justify-center border-t-secondary rounded-full"
          >
            <div
              class="w-16 h-16 border-4 border-transparent text-primary text-2xl animate-spin flex items-center justify-center border-t-primary rounded-full"
            ></div>
          </div>
        </div>
        <p class="text-text/50 animate-pulse">{{ t("example.summoning") }}</p>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

interface Yokai {
  id: number;
  west_name: string;
  kanji_name: string;
  portrait_path: string;
  behavior: string;
}

const yokais = ref<Yokai[]>([]);

const getUrl = () => `https://yokai-api-nu.vercel.app/${t("example.language")}/yokais`;

async function fetchYokais() {
  try {
    yokais.value = [];

    const response = await fetch(getUrl());
    const data = await response.json();
    yokais.value = data;
  } catch (error) {
    console.error("Error fetching yokais:", error);
  }
}

watch(locale, () => {
  fetchYokais();
});

onMounted(() => {
  fetchYokais();
});
</script>
