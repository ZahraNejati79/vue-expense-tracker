<template>
  <div
    class="grid grid-cols-[minmax(4rem,15rem)_minmax(900px,_1fr)] bg-red-500 h-full"
  >
    <div><Sidebar /></div>
    <main class="h-screen bg-gray-100">
      <div class="mx-8"><router-view></router-view></div>
    </main>
  </div>
</template>
<script setup>
import Sidebar from "../components/SideBar.vue";
</script>
