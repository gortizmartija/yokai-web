<template>
  <main class="flex items-center justify-center relative">
    <img
      src="../assets/banner.jpg"
      alt="Banner Image"
      class="w-full shadow-lg opacity-20 min-w-3xl"
    />
    <div class="z-10 flex items-center justify-center text-center flex-col px-4 absolute">
      <h1 class="text-4xl font-bold mb-4">Welcome to Yokai API</h1>
      <p class="text-lg mb-8">Your gateway to the world of Yokai data.</p>
      <div class="flex items-center gap-5">
        <a href="#Docs" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >Get Started</a
        >
        <a
          href="https://yokai-api-nu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="px-6 py-3 flex justify-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >View API
          <img
            src="../assets/external-link.svg"
            alt="Redirection Icon"
            class="w-4 inline-block ml-2"
        /></a>
      </div>
    </div>
  </main>
</template>
