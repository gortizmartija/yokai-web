<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section class="max-w-2xl lg:max-w-6xl mx-auto mt-16 max-lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-4">{{ t("overview.title") }}</h2>
      <div class="w-24 h-1 bg-accent mx-auto mb-6 rounded-full opacity-50"></div>
      <p class="text-text/80 max-w-2xl mx-auto text-pretty leading-relaxed">
        {{ t("overview.description") }}
      </p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
      <div class="relative group overflow-hidden rounded-xl bg-[#3d3c3d] p-[1.5px] drop-shadow-xl">
        <div
          class="absolute w-56 h-48 bg-text/20 blur-[60px] -left-20 -top-20 z-0 pointer-events-none transition-transform duration-500 group-hover:scale-110"
        ></div>

        <div
          class="relative h-full flex flex-col p-10 z-10 rounded-[calc(0.75rem-1.5px)] bg-background"
        >
          <img src="../assets/panda.svg" alt="Yokai Icon" class="w-10 h-10 mb-4" />
          <h2 class="text-2xl font-bold">{{ t("overview.yokais.title") }}</h2>
          <p class="mt-4 text-text/80 text-pretty leading-relaxed">
            {{ t("overview.yokais.description") }}
          </p>
        </div>
      </div>

      <div class="relative group overflow-hidden rounded-xl bg-[#3d3c3d] p-[1.5px] drop-shadow-xl">
        <div
          class="absolute w-56 h-48 bg-text/20 blur-[60px] -left-20 -top-20 z-0 pointer-events-none transition-transform duration-500 group-hover:scale-110"
        ></div>

        <div
          class="relative h-full flex flex-col p-10 z-10 rounded-[calc(0.75rem-1.5px)] bg-background"
        >
          <img src="../assets/book-a.svg" alt="Yokai Icon" class="w-10 h-10 mb-4" />
          <h2 class="text-2xl font-bold">{{ t("overview.multiLanguage.title") }}</h2>
          <p class="mt-4 text-text/80 text-pretty leading-relaxed">
            {{ t("overview.multiLanguage.description") }}
          </p>
        </div>
      </div>

      <div class="relative group overflow-hidden rounded-xl bg-[#3d3c3d] p-[1.5px] drop-shadow-xl">
        <div
          class="absolute w-56 h-48 bg-text/20 blur-[60px] -left-20 -top-20 z-0 pointer-events-none transition-transform duration-500 group-hover:scale-110"
        ></div>

        <div
          class="relative h-full flex flex-col p-10 z-10 rounded-[calc(0.75rem-1.5px)] bg-background"
        >
          <img src="../assets/lock-open.svg" alt="Yokai Icon" class="w-10 h-10 mb-4" />
          <h2 class="text-2xl font-bold">{{ t("overview.openSource.title") }}</h2>
          <p class="mt-4 text-text/80 text-pretty leading-relaxed">
            {{ t("overview.openSource.description") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
