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
      <dada-region-picker v-model:value="value" placeholder="请选择地区" start="2023-01-01" end="2023-12-31" />
    </div>
    <div class="mt ml">
      <dada-region-picker v-model:value="value" placeholder="请选择地区" />
    </div>
    <div class="mt ml">
      <dada-region-picker v-model:value="value" placeholder="请选择地区" type="primary" border label="地区" size="large" />
    </div>
    <div class="mt ml">
      <dada-region-picker v-model:value="value" placeholder="请选择地区" type="primary" shadow />
    </div>
  </div>
</template>

<style>

</style>
