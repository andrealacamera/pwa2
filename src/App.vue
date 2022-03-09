<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import ReloadPrompt from '@/components/ReloadPrompt.vue';
</script>

<template>
  <section class="flex flex-col md:flex-row h-screen items-center"> 

      <header class="w-full md:w-1/2 flex flex-col justify-center items-center p-4 md:p-8"> 
        <img src="/pwa-512x512.png" alt="PWA 2 logo" class="w-32 h-32">
<!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
      <div class="flex flex-col gap-4">
        <HelloWorld msg="Eccola!" />
        <nav class="flex justify-around">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/counter">Counter</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView class="w-full md:w-1/2 p-4 md:p-8" />
  </section>
  <ReloadPrompt />

</template>

<style>

</style>
