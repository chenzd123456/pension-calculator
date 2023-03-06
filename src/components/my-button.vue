<script setup>
const props = defineProps({
  id: "",
  text: "",
});

const emit = defineEmits(["onclick"]);

function handleClick() {
  emit("onclick");
}
</script>
<template>
  <input :id="id" type="button" :value="text" @click="handleClick" />
</template>
<style scoped></style>
