<template>
  <router-link class="w-full" to="/">
    <li
      class="w-full transition duration-300 flex items-center justify-start gap-4 px-4 py-4 cursor-pointer hover:bg-gray-200 rounded-lg"
    >
      <span>
        <unicon :name="icon" fill="royalblue"></unicon>
      </span>
      <span class="hidden sm:block text-lg">{{ name }}</span>
    </li>
  </router-link>
</template>
<script setup>
const props = defineProps(["name", "icon"]);
</script>
