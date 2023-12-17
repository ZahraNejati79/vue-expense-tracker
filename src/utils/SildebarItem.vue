<template>
  <router-link to="/">
    <li
      class="transition duration-300 flex items-center justify-start gap-4 px-4 py-4 cursor-pointer hover:bg-gray-200 rounded-lg"
    >
      <span>
        <unicon :name="icon" fill="royalblue"></unicon>
      </span>
      <span class="hidden lg:block text-lg">{{ name }}</span>
    </li>
  </router-link>
</template>
<script setup>
const props = defineProps(["name", "icon"]);
</script>
