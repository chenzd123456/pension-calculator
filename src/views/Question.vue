<script setup>
import inputbox from "@/components/inputbox.vue";
import myButton from "@/components/my-button.vue";

import { usePensionStore } from "@/stores/pension.js";
import router from '@/router'

const pensionStore = usePensionStore();

function calculate() {
  router.replace("/report");
}
</script>
<template>
  <inputbox
    id="current-age"
    label="当前年龄？"
    unit="岁"
    v-model.number="pensionStore.currentAge"
  ></inputbox>
  <inputbox
    id="retirement-age"
    label="退休年龄？"
    unit="岁"
    v-model.number="pensionStore.retirementAge"
  ></inputbox>
  <inputbox
    id="monthly-income"
    label="月收入是多少？"
    unit="元"
    v-model.number="pensionStore.monthlyIncome"
  ></inputbox>
  <inputbox
    id="bank-savings"
    label="存款多少？"
    unit="元"
    v-model.number="pensionStore.bankSavings"
  ></inputbox>
  <myButton id="calculate-button" text="计算" @click="calculate"></myButton>
</template>
<style scoped></style>
