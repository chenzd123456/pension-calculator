<script setup>
import { storeToRefs } from "pinia";

import inputbox from "@/components/inputbox.vue";
import myButton from "@/components/my-button.vue";

import { usePensionStore } from "@/stores/pension.js";
import router from "@/router";

const pensionStore = usePensionStore();

const { currentAge, retirementAge, monthlyIncome, bankSavings } =
  storeToRefs(pensionStore);

function calculate() {
  router.replace("/report");
}
</script>
<template>
  <inputbox
    id="current-age"
    label="当前年龄？"
    unit="岁"
    v-model.number="currentAge"
  ></inputbox>
  <inputbox
    id="retirement-age"
    label="退休年龄？"
    unit="岁"
    v-model.number="retirementAge"
  ></inputbox>
  <inputbox
    id="monthly-income"
    label="月收入是多少？"
    unit="元"
    v-model.number="monthlyIncome"
  ></inputbox>
  <inputbox
    id="bank-savings"
    label="存款多少？"
    unit="元"
    v-model.number="bankSavings"
  ></inputbox>
  <myButton id="calculate-button" text="计算" @click="calculate"></myButton>
</template>
<style scoped></style>
