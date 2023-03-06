import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePensionStore = defineStore("pension", () => {
  // 声明 ref 变量
  const currentAge = ref(0);
  const retirementAge = ref(0);
  const monthlyIncome = ref(0);
  const bankSavings = ref(0);

  // 类似计算属性，可以惰性计算
  const report = computed(() => {
    return {}
  })

  return { currentAge, retirementAge, monthlyIncome, bankSavings, report };
});
