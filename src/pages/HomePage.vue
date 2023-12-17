<template>
  <div class="bg-wite p-8 px-12 min-w-full bg-white">
    <div
      class="flex items-center justify-between mb-8 pb-8 border-b border-gray-200"
    >
      <div class="flex items-center justify-center gap-4">
        <div class="w-[8rem] h-[8rem] rounded-full bg-slate-400"></div>
        <span>زهرا نجاتی</span>
      </div>
      <div>
        <button
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          دخل
        </button>
        <button
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          خرج
        </button>
      </div>
    </div>

    <DisplayExpense :lists="list" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import { getIncome } from "../service/income/getIncome";
import { toast } from "vue3-toastify";
import DisplayExpense from "../components/DisplayExpense.vue";
const list = ref([]);
onMounted(async () => {
  try {
    list.value = await getIncome();
  } catch (error) {
    toast.error("خطا در ارتباط با سرور");
  }
});
</script>
