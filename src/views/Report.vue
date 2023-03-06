<script setup>
import myButton from "@/components/my-button.vue";

import { usePensionStore } from "@/stores/pension.js";
import router from "@/router";

const pensionStore = usePensionStore();

function reCalculate() {
  router.replace("/");
}
</script>
<template>
  <div>
    <div class="report-content">
      每个月存款{{ pensionStore.report.monthlyDeposit }}元。<br />
      到退休可以存{{
        pensionStore.report.totelDeposit
      }}元。<br />退休每个月生活费{{ pensionStore.report.monthlyAmount }}元。
    </div>
    <div class="report-footer">
      <myButton text="重新计算" @click="reCalculate"></myButton>
    </div>
  </div>
</template>
<style scoped></style>
