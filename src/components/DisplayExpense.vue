<template>
  <div>
    <ul>
      <li
        class="flex items-center justify-between p-3 m-3 border border-red-200 rounded-lg"
        v-for="item in lists"
      >
        <div class="flex items-center justify-center gap-4">
          <div>{{ item.title }}</div>
          <div>{{ item.amount }} <span class="text-sm">تومان</span></div>
        </div>
        <div><span></span><span></span></div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps(["lists"]);
</script>
