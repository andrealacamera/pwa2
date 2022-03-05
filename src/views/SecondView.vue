<script setup>
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();

</script>


<template>
  <div class="h-full w-full bg-red-200">
    <h1 class="text-3xl bg-red-800">Second Page</h1>

    <section class="mt-8">
      <div class="flex flex-row">
      <button class="p-2 w-8 h-4" @click="counter.decrement()">-</button>
      <span> {{ counter }}
      <button class="p-2 w-8 h-4" @click="counter.increment()">-</button>
      </div>
    </section>
  </div>
</template>