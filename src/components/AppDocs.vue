<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section
    id="Documentation"
    class="max-w-2xl lg:max-w-6xl mx-auto mt-4 sm:mt-8 max-lg:px-8bg-background relative overflow-hidden max-lg:px-8"
  >
    <div class="absolute -top-12 h-96 bg-primary/5 rounded-full blur-3xl"></div>

    <div class="text-center relative z-10 mt-24">
      <h2 class="text-3xl font-bold mb-4">{{ t("documentation.title") }}</h2>
      <div class="w-24 h-1 bg-accent mx-auto mb-6 rounded-full opacity-50"></div>
      <p class="text-text/80 max-w-2xl mx-auto text-pretty leading-relaxed">
        {{ t("documentation.description") }}
      </p>
    </div>

    <div class="mt-16 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="lg:col-span-7 space-y-10">
        <section>
          <h3 class="text-2xl font-semibold text-text mb-5">• {{ t("documentation.baseUrl") }}</h3>
          <div class="group relative">
            <pre
              class="relative bg-secondary/30 border border-white/10 p-5 rounded-xl text-accent font-mono text-sm shadow-2xl overflow-x-auto custom-scrollbar"
            >
https://yokai-api-nu.vercel.app/</pre
            >
          </div>
        </section>

        <section class="space-y-6">
          <h3 class="text-2xl font-semibold text-text">
            • {{ t("documentation.availableEndpoints") }}
          </h3>

          <div
            class="bg-secondary/10 border border-white/5 rounded-2xl p-6 hover:bg-secondary/20 transition-all duration-300"
          >
            <div class="flex items-center gap-4 mb-3">
              <span class="px-3 py-1 bg-primary text-white text-xs font-bold rounded-md">GET</span>
              <code class="text-accent font-mono"
                >/{{ t("documentation.endpoints.language") }}/yokais</code
              >
            </div>
            <p class="text-text/60 text-sm">
              {{ t("documentation.endpoints.allYokais") }}
            </p>
          </div>

          <div
            class="bg-secondary/10 border border-white/5 rounded-2xl p-6 hover:bg-secondary/20 transition-all duration-300"
          >
            <div class="flex items-center gap-4 mb-3">
              <span class="px-3 py-1 bg-primary text-white text-xs font-bold rounded-md">GET</span>
              <code class="text-accent font-mono"
                >/{{ t("documentation.endpoints.language") }}/yokais/{id}</code
              >
            </div>
            <p class="text-text/60 text-sm">
              {{ t("documentation.endpoints.singleYokai") }}
            </p>
          </div>

          <div class="p-6 rounded-2xl border border-accent/20 bg-accent/5">
            <h4
              class="text-accent font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-tighter"
            >
              {{ t("documentation.supportedLanguages") }}
            </h4>
            <div class="flex gap-4">
              <span
                class="text-xs bg-background/50 border border-white/10 px-3 py-1 rounded-full text-text/80"
                >🇬🇧 {{ t("documentation.english") }}</span
              >
              <span
                class="text-xs bg-background/50 border border-white/10 px-3 py-1 rounded-full text-text/80"
                >🇪🇸 {{ t("documentation.spanish") }}</span
              >
            </div>
          </div>
        </section>
      </div>

      <div class="lg:col-span-5 space-y-8">
        <div class="sticky top-24">
          <h3 class="text-sm font-bold text-text/40 mb-3 uppercase tracking-widest">
            {{ t("documentation.liveExample") }}
          </h3>
          <div class="bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div class="bg-white/5 px-4 py-2 border-b border-white/5 flex gap-1.5">
              <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
            </div>
            <div class="p-6 overflow-x-auto overflow-y-auto max-h-150 custom-scrollbar">
              <pre
                class="text-xs font-mono leading-relaxed"
              ><span class="text-accent">fetch</span>(<span class="text-primary">'/{{ t("documentation.kappaExample.language") }}/yokais/1'</span>)
  .then(res => res.json())
  .then(data => console.log(data));

<span class="text-text/30">// Output:</span>
<span class="text-primary">{</span>
  <span class="text-accent">"id"</span>: <span class="text-primary">1</span>,
  <span class="text-accent">"west_name"</span>: <span class="text-text/80">"Kappa"</span>,
  <span class="text-accent">"jp_name"</span>: <span class="text-text/80">"かっぱ"</span>,
  <span class="text-accent">"kanji_name"</span>: <span class="text-text/80">"河童"</span>,
  <span class="text-accent">"portrait_path"</span>: <span class="text-text/80">"https://raw.githubusercontent.com/.../kappa.jpg"</span>,
  <span class="text-accent">"thumbnails_path"</span>: <span class="text-text/80">"https://raw.githubusercontent.com/.../kappa.jpg"</span>,
  <span class="text-accent">"webp_path"</span>: <span class="text-text/80">"https://raw.githubusercontent.com/.../kappa.webp"</span>,
  <span class="text-accent">"translation"</span>: <span class="text-text/80">{{t("documentation.kappaExample.translation")}}</span>,
  <span class="text-accent">"alternate_names"</span>: <span class="text-text/80">"kawatarō, kawako"</span>,
  <span class="text-accent">"habitat"</span>: <span class="text-text/80">{{t("documentation.kappaExample.habitat")}}</span>,
  <span class="text-accent">"diet"</span>: <span class="text-text/80">{{t("documentation.kappaExample.diet")}}</span>,
  <span class="text-accent">"apparence"</span>: <span class="text-text/80">{{t("documentation.kappaExample.apparence")}}</span>,
  <span class="text-accent">"behavior"</span>: <span class="text-text/80">{{t("documentation.kappaExample.behavior")}}</span>,
  <span class="text-accent">"interactions"</span>: <span class="text-text/80">{{t("documentation.kappaExample.interactions")}}</span>
<span class="text-primary">}</span>
</pre>
            </div>
          </div>

          <div
            class="mt-6 flex gap-4 p-4 border-l-2 border-primary bg-primary/5 italic text-sm text-text/70"
          >
            <span>{{ t("documentation.note") }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #9d2933;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
