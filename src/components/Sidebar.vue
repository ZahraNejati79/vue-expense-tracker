<template>
  <aside class="h-screen bg-white border-l border-primary-200">
    <ul class="h-full p-2 flex flex-col items-center justify-start">
      <SildebarItem name="خانه" icon="home" to="/" />
      <SildebarItem name="دسته بندی" icon="book-medical" to="/category" />
      <SildebarItem name="گزارش گیری" icon="chart" to="reports" />
      <SildebarItem name="پروفایل" icon="user-square" to="profile" />
      <SildebarItem name="خروج" icon="signout" to="/" />
    </ul>
  </aside>
</template>
<script setup>
import SildebarItem from "../utils/SildebarItem.vue";
</script>
