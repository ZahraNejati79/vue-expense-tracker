<template>
  <form @submit.prevent="postExpense" class="max-w-xl bg-red-100">
    <!-- expense -->

    <div class="flex items-center justify-between gap-2">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >مبلغ</label
      >
      <input
        type="number"
        v-model.lazy="expenseData.amount"
        class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        required
      />
    </div>

    <!-- <Input
      :value="expenseData.amount"
      type="text"
      name="مبلغ"
      @updateFormValue="handlerUpdateFormValue"
    /> -->

    <!-- category -->

    <div class="flex items-center justify-between gap-2">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >دسته</label
      >
      <select
        v-model="expenseData.category"
        class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      >
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>

    <!-- date -->
    <date-picker v-model="expenseData.date"></date-picker>

    <!-- description -->
    <div class="flex items-center justify-between gap-2">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >توضیحات</label
      >
      <textarea
        type="description"
        v-model.lazy="expenseData.description"
        class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        required
      />
    </div>

    <button type="submit">ارسال</button>
  </form>
</template>
<script>
import { reactive, ref } from "vue";

import { postIncome } from "../service/income/postIncome";

const expenseData = reactive({
  amount: 0,
  category: "A",
  date: "",
  description: "",
});

const options = ref([
  { text: "One", value: "A" },
  { text: "Two", value: "B" },
  { text: "Three", value: "C" },
]);

function postExpense() {
  console.log("submit", expenseData);
  postIncome(expenseData);
}

// function handlerUpdateFormValue(updatedDate) {
//   console.log("update", updatedDate);
// }
</script>
