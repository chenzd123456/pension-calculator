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
    <div>
      <label>{{ label }}</label>
    </div>
    <div>
      <input
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span>{{ unit }}</span>
    </div>
  </div>
</template>
<style scoped></style>
