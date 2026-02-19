<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { SUPPORTED_LOCALES, type SupportedLocale } from "../i18n";

const { t, locale } = useI18n();

function changeLanguage(event: Event) {
  const target = event.target as HTMLSelectElement;
  const newLocale = target.value as SupportedLocale;
  if (SUPPORTED_LOCALES.includes(newLocale)) {
    locale.value = newLocale;
    localStorage.setItem("preferred-locale", newLocale);
  }
}
</script>

<template>
  <header
    class="flex items-center justify-between py-4 px-4 sm:px-8 lg:px-14 sticky top-0 z-50 bg-background/80 backdrop-blur-sm"
  >
    <a href="#"><img src="../assets/logo.png" alt="Yokai Logo" class="w-20 -my-4" /></a>
    <nav>
      <ul class="flex space-x-4 items-center">
        <div class="flex gap-2">
          <li>
            <a href="#Documentation" class="max-sm:text-sm">{{ t("nav.docs") }}</a>
          </li>
          <li>
            <a href="#Example" class="max-sm:text-sm">{{ t("nav.example") }}</a>
          </li>
        </div>
        <div class="flex gap-2">
          <li
            class="relative border rounded-full aspect-square max-w-8 sm:max-w-10 flex items-center justify-center overflow-hidden group"
          >
            <img
              src="../assets/globe.svg"
              alt="Language"
              class="w-full h-full p-2 sm:p-2.5 group-hover:scale-110 transition-transform duration-200"
            />

            <select
              class="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none bg-transparent p-1 sm:p-2"
              :title="t('nav.language')"
              :value="locale"
              @change="changeLanguage"
            >
              <option value="en" class="bg-[#1a1a1a] text-white">EN</option>
              <option value="es" class="bg-[#1a1a1a] text-white">ES</option>
            </select>
          </li>
          <li class="border rounded-full aspect-square max-w-8 sm:max-w-10 overflow-hidden">
            <a
              href="https://github.com/gortizmartija/yokai-api"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                src="../assets/github.svg"
                alt="GitHub Page"
                class="w-full aspect-square p-2 hover:scale-110 transition-transform duration-200"
            /></a>
          </li>
        </div>
      </ul>
    </nav>
  </header>
</template>
