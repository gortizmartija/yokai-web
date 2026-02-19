<template>
  <div class="mt-16">
    <div class="text-center">
      <h2 class="text-2xl font-bold mb-4">API Overview</h2>
      <p class="text-gray-300 max-w-2xl mx-auto text-pretty">
        This is the overview section of the application. Here you can find a summary of the main
        features and functionalities.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const URL = "https://yokai-api-nu.vercel.app/en/yokais";

async function fetchYokais() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching yokais:", error);
  }
}

fetchYokais();
</script>
