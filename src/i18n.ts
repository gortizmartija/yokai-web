import { createI18n } from "vue-i18n";
import type { I18n, I18nOptions } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";

export const SUPPORTED_LOCALES = ["en", "es"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

const messages = {
  en,
  es,
};

function getInitialLocale(): SupportedLocale {
  const savedLocale = localStorage.getItem("preferred-locale") as SupportedLocale | null;
  if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
    return savedLocale;
  }

  const browserLocale = navigator.language.split("-")[0] as SupportedLocale;
  if (SUPPORTED_LOCALES.includes(browserLocale)) {
    return browserLocale;
  }

  return "en";
}

const options: I18nOptions = {
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: "en",
  messages,
  globalInjection: true,
};

export const i18n: I18n = createI18n(options);
