<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <main class="relative w-full h-[60vh] min-h-100 flex items-center justify-center overflow-hidden">
    <img
      src="../assets/banner.jpg"
      alt="Banner Image"
      class="absolute inset-0 w-full h-full object-cover opacity-15"
    />
    <div class="z-10 flex items-center justify-center text-center flex-col px-4 absolute">
      <h1 class="text-5xl font-extrabold mb-4 text-text">
        {{ t("hero.title") }} <span class="text-accent">{{ t("hero.subtitle") }}</span>
      </h1>
      <p class="text-xl mb-8 text-text/80 max-w-lg">
        {{ t("hero.description") }}
      </p>
      <div class="flex items-center gap-5">
        <a
          href="#Documentation"
          class="px-6 py-3 bg-background font-bold rounded-lg hover:bg-background/80 transition duration-200"
          >{{ t("hero.getStarted") }}</a
        >
        <a
          href="https://yokai-api-nu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="px-6 py-3 flex font-bold justify-center rounded-lg bg-primary hover:bg-primary/80 transition duration-200"
          >{{ t("hero.viewApi") }}
          <img
            src="../assets/external-link.svg"
            alt="Redirection Icon"
            class="w-4 inline-block ml-2"
        /></a>
      </div>
    </div>
  </main>
</template>
