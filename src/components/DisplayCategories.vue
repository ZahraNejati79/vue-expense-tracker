<template>
  <div
    class="bg-white h-full w-full md:w-1/2 flex flex-col items-center justify-center pt-4 rounded-lg"
  >
    <h1 class="w-full text-center">{{ name }}</h1>
    <ul class="w-full">
      <Categoryitem
        v-for="category in categories"
        :name="category.name"
        :group="category.group"
      />
    </ul>
  </div>
</template>
<script setup>
import Categoryitem from "../utils/categoryitem.vue";
import { defineProps } from "vue";
const props = defineProps(["categories", "name"]);
</script>
