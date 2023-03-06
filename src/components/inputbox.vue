<script setup>
const props = defineProps({
  id: "",
  label: "",
  unit: "",
  type: "text",
  modelValue: "",
});
const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="inputbox" :id="id">
    <div class="inputbox-label">
      <label>{{ label }}</label>
    </div>
    <div class="inputbox-input">
      <input
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span>{{ unit }}</span>
    </div>
    <div class="inputbox-tips"></div>
  </div>
</template>
<style scoped></style>
