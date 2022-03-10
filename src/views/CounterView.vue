<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
let counter = useCounterStore();
</script>


<template>
  <div class="h-full w-full bg-red-200">
    <h1 class="text-3xl bg-red-800 text-yellow-300 py-4 px-2">Counter page</h1>
    <p>This page is made with <a href="https://pinia.vuejs.org/" target="_blank">Pinia</a> store</p>
    <section class="mt-8">
      <div class="flex flex-row justify-around">
        <button class="p-2 bg-gray-600 text-white rounded-lg w-16" @click="counter.decrement()">-1</button>
         <span class="text-xl p-2 w-16 text-center text-red-800"> {{ counter.counter }} </span>
        <button class="p-2 bg-gray-600 text-white rounded-lg w-16" @click="counter.increment()">+1</button>
      </div>
    </section>
  </div>
</template>