<template>
  <div class="grid grid-cols-[minmax(3.6rem,15rem)_minmax(400px,_1fr)] h-full">
    <div><Sidebar /></div>
    <main class="h-screen bg-gray-100">
      <div class="mx-8 h-full"><router-view></router-view></div>
    </main>
  </div>
</template>
<script setup>
import Sidebar from "../components/SideBar.vue";
</script>
