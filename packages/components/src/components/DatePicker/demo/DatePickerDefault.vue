<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div>
    <div class="mt ml">
      {{ value }}
    </div>
    <div class="mt ml">
      <dada-date-picker v-model:value="value" placeholder="请选择日期" start="2023-01-01" end="2023-12-31" />
    </div>
    <div class="mt ml">
      <dada-date-picker v-model:value="value" placeholder="请选择日期" />
    </div>
    <div class="mt ml">
      <dada-date-picker v-model:value="value" placeholder="请选择日期" type="primary" border label="日期" size="large" />
    </div>
    <div class="mt ml">
      <dada-date-picker v-model:value="value" placeholder="请选择日期" type="primary" shadow />
    </div>
  </div>
</template>

<style>

</style>
