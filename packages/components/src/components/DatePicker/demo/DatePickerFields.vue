<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const value1 = ref('')
</script>

<template>
  <div>
    <div class="mt ml">
      {{ value }}
    </div>
    <div class="mt ml">
      <div>只选年月</div>
      <dada-date-picker v-model:value="value" placeholder="请选择日期" fields="month" />
    </div>
    <div class="mt ml">
      {{ value1 }}
    </div>
    <div class="mt ml">
      <div>只选年</div>
      <dada-date-picker v-model:value="value1" placeholder="请选择日期" fields="year" />
    </div>
  </div>
</template>

<style>

</style>
