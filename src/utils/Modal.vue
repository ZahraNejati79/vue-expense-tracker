<template>
  <div v-show="isOpen" class="bg-orange-300 p-40">
    <button @click="closeModal">close</button>
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const props = defineProps(["isOpen"]);
const emit = defineEmits(["closeModal"]);
onMounted(() => {
  console.log(props.isOpen);
});
function closeModal() {
  emit("closeModal");
}
</script>
