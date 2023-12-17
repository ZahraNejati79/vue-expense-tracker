<template>
  <div class="h-full w-full text-lg">
    <div class="flex flex-col items-center justify-center w-full mx-auto">
      <button @click="isOpenModal = true" class="text-primart-500 py-4">
        افزودن عنوان جدید
      </button>
      <Modal @closeModal="isOpenModal = false" :isOpen="isOpenModal">
        <CategoryForm />
      </Modal>
      <section
        class="flex flex-col md:flex-row justify-between gap-8 w-full h- items-stretch"
      >
        <DisplayCategories name="دسته های دخل" :categories="incomeCategories" />
        <DisplayCategories
          name="دسته های خرج"
          :categories="expenseCategories"
        />
      </section>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getIncomeCategories } from "../service/category/getIncomeCategories";
import { getExpenseCategories } from "../service/category/getExpenseCategories";
const incomeCategories = ref([]);
const expenseCategories = ref([]);
import { toast } from "vue3-toastify";
import DisplayCategories from "../components/DisplayCategories.vue";
import Modal from "../utils/Modal.vue";
import CategoryForm from "../components/CategoryForm.vue";
const isOpenModal = ref(false);
async function updateCategoryList() {
  try {
    expenseCategories.value = await getExpenseCategories();
    incomeCategories.value = await getIncomeCategories();
  } catch (error) {
    toast.error("خطا در ارتباط با سرور");
  }
}
onMounted(() => {
  updateCategoryList();
  console.log("incomeCategories", incomeCategories);
  console.log("expenseCategories", expenseCategories);
});
</script>
