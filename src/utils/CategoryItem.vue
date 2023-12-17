<template>
  <li
    class="transition duration-300 flex items-center justify-between hover:bg-primary-100 p-4 border-b bprder-primary-100 last:border-b-0"
  >
    <span>{{ name }}</span>
    <div class="flex items-center justify-center gap-2 md:gap-4">
      <button class="cursor-pointer">
        <unicon name="trash-alt" fill="royalblue"></unicon>
      </button>
      <button class="cursor-pointer">
        <unicon name="edit" fill="royalblue"></unicon>
      </button>
    </div>
  </li>
</template>
<script setup>
const props = defineProps(["name", "group"]);
</script>
