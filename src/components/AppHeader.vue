<template>
  <header class="flex items-center justify-between py-4 px-6">
    <img src="../assets/logo.png" alt="Yokai Logo" />
    <nav>
      <ul class="flex space-x-4 items-center">
        <li><a href="#">Docs</a></li>
        <li><a href="#">Example</a></li>
        <li class="border rounded-full aspect-square max-w-10 overflow-hidden">
          <img
            src="../assets/globe.svg"
            alt="Language Selector"
            class="w-full aspect-square p-2 hover:scale-110 transition-transform duration-200"
          />
        </li>
        <li class="border rounded-full aspect-square max-w-10 overflow-hidden">
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
      </ul>
    </nav>
  </header>
</template>
