<template>
  <div class="flex items-center justify-between gap-2">
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >{{ name }}</label
    >
    <input
      @change="counte++"
      class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
    />
  </div>
  <h1>{{ counte }}</h1>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps(["value", "name", "type"]);
const counte = ref(0);
</script>
